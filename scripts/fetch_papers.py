#!/usr/bin/env python3
"""
HuggingFace 每周论文榜单数据抓取脚本

仅负责抓取内容，不做分析和理解。
分析和机会挖掘由 skill prompt 引导 Claude 完成。

使用方法:
    python3 fetch_papers.py [--week YYYY-WXX] [--top N]

功能:
    1. 自动计算当前或指定周的 HuggingFace 论文榜单 URL
    2. 顺序请求 + 延迟 + 重试，避免限流
    3. 降级策略：无 abstract 时使用标题关键词
    4. 限流检测和自动退避
"""

import argparse
import json
import re
import sys
import time
from datetime import datetime, timedelta
from typing import List, Dict, Optional
from urllib.parse import urljoin

def check_and_install_dependencies():
    """检查并自动安装缺失的依赖"""
    required = {'requests': 'requests', 'bs4': 'beautifulsoup4'}
    missing = []
    for module, package in required.items():
        try:
            __import__(module)
        except ImportError:
            missing.append(package)
    
    if missing:
        print(f"📦 检测到缺失依赖: {', '.join(missing)}，正在自动安装...")
        import subprocess
        subprocess.check_call([sys.executable, '-m', 'pip', 'install', *missing])
        print("✅ 依赖安装完成")

check_and_install_dependencies()

import requests
from bs4 import BeautifulSoup


class HuggingFacePaperFetcher:
    """HuggingFace 论文抓取器 - 抗限流版"""

    BASE_URL = "https://huggingface.co"
    PAPERS_WEEK_URL = "https://huggingface.co/papers/week/{week}"

    # 配置
    REQUEST_DELAY = 1.5  # 基础请求间隔（秒）
    MAX_RETRIES = 2  # 最大重试次数
    BACKOFF_FACTOR = 2  # 退避因子（指数退避）
    RATE_LIMIT_STATUS = 429  # 限流状态码

    # 合理的浏览器 User-Agent
    DEFAULT_HEADERS = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Connection": "keep-alive",
        "Upgrade-Insecure-Requests": "1",
    }

    def __init__(self):
        # 使用 Session 保持连接
        self.session = requests.Session()
        self.session.headers.update(self.DEFAULT_HEADERS)
        self.request_count = 0
        self.last_request_time = 0

    def _rate_limited_request(self, url: str, max_retries: int = None) -> Optional[requests.Response]:
        """
        带限流检测和退避的请求
        """
        if max_retries is None:
            max_retries = self.MAX_RETRIES

        for attempt in range(max_retries + 1):
            # 计算请求间隔（从最后一次请求开始计算）
            elapsed = time.time() - self.last_request_time
            if elapsed < self.REQUEST_DELAY:
                sleep_time = self.REQUEST_DELAY - elapsed
                print(f"  💤 等待 {sleep_time:.1f}s 避免限流...")
                time.sleep(sleep_time)

            try:
                self.last_request_time = time.time()
                response = self.session.get(url, timeout=30)

                # 检测限流
                if response.status_code == self.RATE_LIMIT_STATUS:
                    wait_time = self.BACKOFF_FACTOR ** attempt * 5
                    print(f"  ⚠️ 触发限流 (429)，等待 {wait_time}s 后重试 ({attempt + 1}/{max_retries})...")
                    time.sleep(wait_time)
                    continue

                response.raise_for_status()
                self.request_count += 1
                return response

            except requests.exceptions.RequestException as e:
                if attempt < max_retries:
                    wait_time = self.BACKOFF_FACTOR ** attempt * 2
                    print(f"  ⚠️ 请求失败: {e}，{wait_time}s 后重试 ({attempt + 1}/{max_retries})...")
                    time.sleep(wait_time)
                else:
                    print(f"  ❌ 请求最终失败: {e}")
                    return None

        return None

    def fetch_page(self, url: str) -> Optional[BeautifulSoup]:
        """抓取页面内容"""
        print(f"  📡 请求: {url}")
        response = self._rate_limited_request(url)
        if response:
            return BeautifulSoup(response.text, 'html.parser')
        return None

    def get_week_number(self, date: datetime) -> str:
        """获取指定日期的 ISO 周数"""
        year, week_num, _ = date.isocalendar()
        return f"{year}-W{week_num:02d}"

    def get_hf_week_number(self, period_start: datetime) -> str:
        """
        获取 HuggingFace 周期对应的周数
        
        HuggingFace 周期从周日开始，但 URL 中的周数基于 ISO 周（周一）
        所以用周期内的周一来获取正确的周数
        
        Args:
            period_start: 周期起始日（周日）
        """
        monday_in_period = period_start + timedelta(days=1)
        year, week_num, _ = monday_in_period.isocalendar()
        return f"{year}-W{week_num:02d}"

    def get_current_hf_period(self, date: datetime = None) -> tuple:
        """
        获取当前 HuggingFace 周期（周日到周六）
        
        Returns:
            (period_start, period_end) - 周日和周六的日期
        """
        if date is None:
            date = datetime.now()
        
        weekday = date.weekday()  # 0=周一, 6=周日
        
        if weekday == 6:  # 今天是周日，就是当前周期的起始
            period_start = date
        else:
            # 往前推到最近的周日
            days_since_sunday = weekday + 1
            period_start = date - timedelta(days=days_since_sunday)
        
        period_end = period_start + timedelta(days=6)
        return period_start, period_end

    def get_smart_week(self, date: datetime = None) -> tuple:
        """
        智能选择要获取的周数
        
        HuggingFace 论文周期: 周日到周六
        - 周一~周三: 当前周期论文还在积累，返回上一个周期的数据
        - 周四~周日: 当前周期论文够多了，返回当前周期数据
        
        示例（假设今天是 2026-02-02 周一，当前周期 W06 = Feb 1-7）:
        - 周一~周三: 返回 W05 (Jan 25-31)
        - 周四~周日: 返回 W06 (Feb 1-7)
        
        Returns:
            (week_str, week_start, week_end, is_current_week)
        """
        if date is None:
            date = datetime.now()
        
        weekday = date.weekday()  # 0=周一, 6=周日
        
        # 获取当前 HuggingFace 周期
        current_start, current_end = self.get_current_hf_period(date)
        
        # 获取上一个周期
        last_start = current_start - timedelta(days=7)
        last_end = last_start + timedelta(days=6)
        
        if weekday <= 2:  # 周一(0)、周二(1)、周三(2) -> 用上一个周期
            week_start, week_end = last_start, last_end
            week_str = self.get_hf_week_number(last_start)
            is_current = False
            date_range = f"{week_start.strftime('%m/%d')}-{week_end.strftime('%m/%d')}"
            print(f"📅 今天是周{['一','二','三','四','五','六','日'][weekday]}，当前周期论文还在积累中，显示上周数据 ({week_str}: {date_range})")
        else:  # 周四(3)~周日(6) -> 用当前周期
            week_start, week_end = current_start, current_end
            week_str = self.get_hf_week_number(current_start)
            is_current = True
            date_range = f"{week_start.strftime('%m/%d')}-{week_end.strftime('%m/%d')}"
            print(f"📅 今天是周{['一','二','三','四','五','六','日'][weekday]}，显示本周最新数据 ({week_str}: {date_range})")
        
        return week_str, week_start, week_end, is_current

    def get_week_url(self, week: str = None) -> str:
        """获取周报 URL"""
        if week is None:
            week, _, _, _ = self.get_smart_week()
        return self.PAPERS_WEEK_URL.format(week=week)

    def extract_paper_info(self, element) -> Optional[Dict]:
        """从列表元素中提取论文基础信息"""
        try:
            # 查找论文链接 - 支持多种 URL 格式
            # /papers/2601.08521 (arxiv 格式)
            # /papers/xxx (其他格式)
            link = element.find('a', href=re.compile(r'/papers/[^?#]+'))
            if not link:
                return None

            title_elem = element.find('h3')
            title = None
            if title_elem:
                # 尝试多种方式获取标题
                title_link = title_elem.find('a', href=re.compile(r'/papers/'))
                if title_link:
                    title = title_link.get_text(strip=True)
                else:
                    # 直接获取 h3 的文本
                    title = title_elem.get_text(strip=True)

            # 如果 h3 没找到标题，尝试从链接或整个元素查找
            if not title or len(title) < 5:
                # 尝试 article 或 div 中的标题元素
                title_candidate = element.find(['h2', 'h3', 'h4'], class_=re.compile(r'title|heading', re.I))
                if title_candidate:
                    title = title_candidate.get_text(strip=True)

            # 最后尝试从链接的 title 属性
            if not title or len(title) < 5:
                title = link.get('title', '') or link.get_text(strip=True)

            # 排除无效标题和元数据
            if not title or len(title) < 5:
                return None

            # 排除明显的元数据（不是真正的标题）
            meta_patterns = [
                r'^\d+\s*authors?$',
                r'^\d+\s*likes?$',
                r'^\d+\s*pages?$',
                r'^[a-z]+\s*\d{4}$',  # 如 "jan 2026"
                r'^\d+:\d+\s*(AM|PM)?$',  # 时间
            ]
            for pattern in meta_patterns:
                if re.match(pattern, title, re.I):
                    return None

            href = link.get('href', '')
            # 清理 URL，移除 #community 等后缀
            if '#' in href:
                href = href.split('#')[0]
            paper_url = urljoin(self.BASE_URL, href)

            # 点赞数：在点赞按钮 div 里的 leading-none
            likes = 0
            like_container = element.find('div', class_=re.compile(r'flex.*h-14'))
            if like_container:
                like_elem = like_container.find('div', class_='leading-none')
                if like_elem:
                    text = like_elem.get_text(strip=True)
                    match = re.search(r'(\d+)', text)
                    if match:
                        likes = int(match.group(1))

            # 备选：在整个元素中搜索数字
            if likes == 0:
                like_elem = element.find('div', class_='leading-none')
                if like_elem:
                    text = like_elem.get_text(strip=True)
                    match = re.search(r'(\d+)', text)
                    if match:
                        likes = int(match.group(1))

            # 查找日期 - 通常在文章元素末尾
            date_elem = element.find(string=re.compile(r'\d{4}-\d{2}-\d{2}'))
            date = str(date_elem).strip() if date_elem else None

            return {
                "title": title,
                "url": paper_url,
                "likes": likes,
                "date": date or datetime.now().strftime("%Y-%m-%d")
            }
        except Exception as e:
            print(f"  ⚠️ 提取论文信息失败: {e}")
            return None

    def extract_keywords_from_title(self, title: str) -> str:
        """从标题提取关键词（降级策略）"""
        # 提取驼峰命名和常见技术词汇
        words = re.findall(r'[A-Z][a-z]+|[a-zA-Z]+', title)
        return ' '.join(words)

    def get_paper_details(self, paper_url: str, title: str) -> Dict:
        """获取论文详情：abstract、发布日期、GitHub 链接、机构标签"""
        result = {
            "abstract": None,
            "published_date": None,
            "github_url": None,
            "org_tag": None
        }

        soup = self.fetch_page(paper_url)
        if not soup:
            # 降级：使用标题关键词
            keywords = self.extract_keywords_from_title(title)
            print(f"  📝 降级：使用标题关键词: {keywords[:50]}...")
            result["abstract"] = f"[关键词: {keywords}]"
            return result

        # ========== 提取 Abstract ==========
        # 方法1: 使用 data-testid
        abstract_elem = soup.find('div', {'data-testid': 'paper-abstract'})
        if abstract_elem:
            abstract = abstract_elem.get_text(strip=True)
            if len(abstract) > 50:
                print(f"  ✅ 获取到 abstract ({len(abstract)} chars)")
                result["abstract"] = abstract
                # 继续提取日期和 GitHub

        if not result["abstract"]:
            # 方法2: 查找 "Abstract" 标题后面的内容
            abstract_header = soup.find(string=re.compile(r'^\s*Abstract\s*$', re.I))
            if abstract_header:
                h2_elem = abstract_header.find_parent('h2')
                if h2_elem:
                    next_elem = h2_elem.find_next_sibling()
                    if next_elem:
                        p_elements = next_elem.find_all('p')
                        if len(p_elements) >= 2:
                            abstract = p_elements[1].get_text(strip=True)
                        elif len(p_elements) == 1:
                            abstract = p_elements[0].get_text(strip=True)

                        if abstract:
                            abstract = re.sub(r'^AI-generated summary\s*', '', abstract)
                            if len(abstract) > 50:
                                print(f"  ✅ 获取到备用 abstract ({len(abstract)} chars)")
                                result["abstract"] = abstract

        if not result["abstract"]:
            # 方法3: 查找包含 AI-generated summary 的摘要容器
            ai_summary = soup.find(string=re.compile(r'AI-generated summary', re.I))
            if ai_summary:
                parent = ai_summary.find_parent(['div', 'section'])
                if parent:
                    abstract = parent.get_text(strip=True)
                    abstract = re.sub(r'AI-generated summary\s*', '', abstract)
                    if len(abstract) > 50:
                        print(f"  ✅ 获取到 AI summary ({len(abstract)} chars)")
                        result["abstract"] = abstract

        # 如果还是没找到，使用标题关键词降级
        if not result["abstract"]:
            keywords = self.extract_keywords_from_title(title)
            print(f"  📝 未找到 abstract，降级使用标题关键词")
            result["abstract"] = f"[关键词: {keywords}]"

        # ========== 提取发布日期 ==========
        # 查找 "Published on" 或类似格式
        pub_text = soup.find(string=re.compile(r'Published on|Published'))
        if pub_text:
            # 尝试提取日期
            match = re.search(r'Published on\s+([A-Z][a-z]+\s+\d{1,2})', pub_text)
            if match:
                result["published_date"] = match.group(1)
                print(f"  ✅ 获取到发布日期: {result['published_date']}")

        # ========== 提取 GitHub 链接 ==========
        github_link = soup.find('a', href=re.compile(r'github\.com/[^/]+/[^/]+'))
        if github_link:
            result["github_url"] = github_link.get('href')
            print(f"  ✅ 获取到 GitHub: {result['github_url']}")

        # ========== 提取机构/项目标签 ==========
        # 方法1: 查找指向 /organizations/ 的链接
        org_link = soup.find('a', href=re.compile(r'/organizations/'))
        if org_link:
            tag_text = org_link.get_text(strip=True)
            if tag_text and len(tag_text) < 50:
                result["org_tag"] = tag_text
                print(f"  ✅ 获取到机构标签: {result['org_tag']}")
        
        # 方法2: 查找带有特定样式的标签（排除导航按钮）
        if not result["org_tag"]:
            # 查找小标签，通常包含 rounded 和颜色类
            all_links = soup.find_all('a', class_=re.compile(r'rounded.*text-|text-.*rounded'))
            for link in all_links:
                href = link.get('href', '')
                tag_text = link.get_text(strip=True)
                # 排除导航元素和常见非机构链接
                skip_words = ['Sign', 'Log', 'Papers', 'Models', 'Datasets', 'Spaces', 'Docs', 'Pricing']
                skip_hrefs = ['/papers/', 'arxiv', 'github', '/login', '/join', '/models', '/datasets']
                if tag_text and len(tag_text) < 40:
                    if not any(w in tag_text for w in skip_words) and not any(h in href for h in skip_hrefs):
                        result["org_tag"] = tag_text
                        print(f"  ✅ 获取到机构标签: {result['org_tag']}")
                        break

        return result

    def fetch_week_papers(self, week: str = None, top_n: int = 25) -> List[Dict]:
        """获取本周热门论文（顺序请求，避免限流）"""
        url = self.get_week_url(week)
        print(f"\n📥 开始抓取: {url}")
        print(f"   目标: top {top_n} 论文，顺序请求 + 延迟")

        soup = self.fetch_page(url)
        if not soup:
            print("❌ 获取周榜页面失败")
            return []

        papers = []

        # 查找论文卡片 - HuggingFace 使用相对通用的 article 元素
        # 先找所有 article，然后筛选包含 /papers/ 链接的
        all_articles = soup.find_all('article')

        # 筛选包含论文链接的 article
        paper_cards = []
        for art in all_articles:
            links = art.find_all('a', href=True)
            if any('/papers/' in a.get('href', '') for a in links):
                paper_cards.append(art)

        # 限制数量
        if len(paper_cards) > 20:
            paper_cards = paper_cards[:20]
            print(f"📄 限制为前 20 篇论文")

        print(f"📄 找到 {len(paper_cards)} 篇论文卡片")

        # 去重：基于 URL 去重
        seen_urls = set()
        unique_cards = []

        # 顺序处理每篇论文，提取信息
        for i, card in enumerate(paper_cards, 1):
            paper_info = self.extract_paper_info(card)
            if not paper_info or not paper_info['url']:
                continue

            # URL 去重
            if paper_info['url'] in seen_urls:
                continue
            seen_urls.add(paper_info['url'])
            unique_cards.append((i, card, paper_info))

        print(f"📄 去重后剩余 {len(unique_cards)} 篇论文")

        # 顺序获取每篇论文的详情
        for i, card, paper_info in unique_cards:
            print(f"\n[{i}/{len(unique_cards)}] 处理论文: {paper_info['title'][:40]}...")

            # 获取详情（带延迟和重试）
            details = self.get_paper_details(paper_info['url'], paper_info['title'])
            paper_info['abstract'] = details.get('abstract')
            paper_info['published_date'] = details.get('published_date')
            paper_info['github_url'] = details.get('github_url')
            paper_info['org_tag'] = details.get('org_tag')
            papers.append(paper_info)

        # 按点赞数排序并取前 N 篇
        papers.sort(key=lambda x: x.get('likes', 0), reverse=True)
        papers = papers[:top_n]

        print(f"\n✅ 完成！共获取 {len(papers)} 篇论文")
        print(f"   总请求数: {self.request_count}")

        return papers

    def fetch_raw_data(self, week: str = None, top_n: int = 25) -> Dict:
        """获取原始数据供 Claude 分析"""
        if week:
            # 用户指定了周数，直接使用
            # 需要反向计算日期范围（简化处理：显示周数即可）
            papers = self.fetch_week_papers(week, top_n)
            output = {
                "week": week,
                "dateRange": f"Week {week}",
                "papers": papers
            }
        else:
            # 智能选择周数
            week, week_start, week_end, is_current = self.get_smart_week()
            papers = self.fetch_week_papers(week, top_n)
            output = {
                "week": week,
                "dateRange": f"{week_start.strftime('%Y-%m-%d')} to {week_end.strftime('%Y-%m-%d')}",
                "papers": papers
            }

        return output


def main():
    parser = argparse.ArgumentParser(description="HuggingFace 论文数据抓取工具（抗限流版）")
    parser.add_argument("--week", "-w", help="指定周数 (如 2026-W05)，默认取上一周")
    parser.add_argument("--top", "-t", type=int, default=20, help="获取论文数量 (默认 20)")
    parser.add_argument("--output", "-o", help="输出 JSON 文件路径")

    args = parser.parse_args()

    fetcher = HuggingFacePaperFetcher()
    data = fetcher.fetch_raw_data(args.week, args.top)

    # 输出到文件
    if args.output:
        with open(args.output, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f"\n💾 数据已保存到: {args.output}")
    else:
        print(json.dumps(data, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
