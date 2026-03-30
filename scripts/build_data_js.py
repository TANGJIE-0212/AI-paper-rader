#!/usr/bin/env python3
"""
Build assets/data.js from scripts/papers.json.

This guarantees the radar page has usable content even before LLM enrichment.
"""

import json
from pathlib import Path

DIMENSIONS = {
    "understanding": {
        "name": "理解与记忆",
        "icon": "🧠",
        "keywords": ["long context", "reasoning", "chain of thought", "inference", "math", "rag", "memory", "retrieval"],
    },
    "action": {
        "name": "行动能力",
        "icon": "🧰",
        "keywords": ["tool use", "agent", "function calling", "planning", "mcp", "code", "workflow", "orchestration"],
    },
    "multimodal": {
        "name": "多模态",
        "icon": "🖼",
        "keywords": ["vision", "image", "video", "visual", "ocr", "audio", "multimodal", "vlm"],
    },
    "efficiency": {
        "name": "效率与成本",
        "icon": "⚙️",
        "keywords": ["quantization", "distillation", "compression", "pruning", "efficient", "speed", "latency"],
    },
    "safety": {
        "name": "可靠性与安全",
        "icon": "🛡",
        "keywords": ["hallucination", "alignment", "safety", "robust", "evaluation", "guardrail", "benchmark"],
    },
    "robotics": {
        "name": "机器人/具身智能",
        "icon": "🦾",
        "keywords": ["robot", "robotics", "vla", "embodied", "manipulation", "world model", "simulation"],
    },
}

STRATEGY_TEMPLATES = {
    "action": {
        "icon": "💰",
        "type": "cashcow",
        "title": "智能体执行层进入可产品化区间",
        "action": "如果你正在做工作流智能体、AI 副驾或自动化系统，这已经不是远期概念，而是可以立刻落产品的能力层。",
    },
    "multimodal": {
        "icon": "🌊",
        "type": "blueocean",
        "title": "多模态开始从演示能力走向主交互",
        "action": "不要再把图像、视频和视觉推理当作附加功能。下一波真正好用的 AI 产品，会把多模态作为原生输入层。",
    },
    "understanding": {
        "icon": "👀",
        "type": "special",
        "title": "深研究工作流正在变得更长更结构化",
        "action": "市场还缺一类不像聊天框、更像真实研究系统的产品：能持续检索、比对、验证并在多轮中逐步收敛答案。",
    },
    "efficiency": {
        "icon": "🏋️",
        "type": "efficiency",
        "title": "速度和成本仍然是决定性优势",
        "action": "所有线上 AI 团队都该有独立的效率路线图。更低延迟和更便宜推理，依然会直接转化为产品竞争力。",
    },
    "safety": {
        "icon": "👀",
        "type": "special",
        "title": "评测质量正在变成产品差异点",
        "action": "评测基准、护栏和可信层不再只是基础设施议题，它们越来越决定用户是否相信产品输出。",
    },
    "robotics": {
        "icon": "🌊",
        "type": "blueocean",
        "title": "具身智能的产品面正在变宽",
        "action": "机器人仍然偏早期，但底层技术栈正在变得可复用。能把软件编排和物理执行连接起来的产品值得持续跟踪。",
    },
}

NEW_PRODUCT_TEMPLATES = {
    "action": {
        "title": "智能体工作流工作台",
        "description": "一个用来设计、追踪和部署智能体工作流的工作台，支持任务拆分、工具调用和多智能体编排。",
        "scenes": ["运维自动化", "研究流程", "内部 AI 助手"],
    },
    "multimodal": {
        "title": "多模态研究台",
        "description": "一个能查看文档、截图、图表、视频和 UI 流程的多模态工作台，用来输出有依据的总结和后续动作。",
        "scenes": ["设计评审", "文档分析", "内容运营"],
    },
    "understanding": {
        "title": "深研究工作空间",
        "description": "一个面向多源证据收集、结论核验和长篇结构化回答生成的产品，而不是一次性聊天回复。",
        "scenes": ["分析师团队", "战略研究", "技术情报"],
    },
    "efficiency": {
        "title": "AI 成本控制台",
        "description": "一个对比模型质量、Token 成本、延迟和压缩选项的控制平面，帮助团队更经济地交付 AI。",
        "scenes": ["AI 基础设施", "生产优化", "模型选型"],
    },
    "safety": {
        "title": "AI 可信层",
        "description": "一层在结果触达用户或下游系统前做审计、打风险分和暴露薄弱推理环节的可靠性能力。",
        "scenes": ["企业 AI", "客户支持", "合规敏感流程"],
    },
    "robotics": {
        "title": "具身智能运维台",
        "description": "一个用于监控、适配和评估多种机器人形态行为的协调层，适合不断变化的硬件组合。",
        "scenes": ["机器人实验室", "仓储自动化", "物理智能运维"],
    },
}


DIMENSION_VALUE_TEMPLATES = {
    "understanding": "这类能力适合做深研究、复杂推理和长上下文决策，是高价值知识型产品的底层能力。",
    "action": "这类能力更接近可执行系统，适合落到 Agent、自动化流程和工具调用产品中。",
    "multimodal": "这类能力适合进入文档理解、视觉分析、视频理解和 UI 交互等真实场景。",
    "efficiency": "这类能力适合直接转化为降本、提速和更低部署门槛，价值非常工程化。",
    "safety": "这类能力更适合沉淀为评测、风控和可信层，直接影响用户对产品结果的信任。",
    "robotics": "这类能力适合延伸到物理世界交互、机器人编排和具身智能系统。",
}


def infer_artifact_type(title: str, abstract: str) -> str:
    title_text = title.lower()
    if "survey" in title_text:
        return "综述"
    if "benchmark" in title_text or "bench" in title_text:
        return "评测基准"
    if "dataset" in title_text or "suite" in title_text or "corpus" in title_text:
        return "数据集"
    if "pipeline" in title_text or "workflow" in title_text:
        return "流程框架"
    if "framework" in title_text:
        return "方法框架"
    if (
        "model" in title_text
        or "transformer" in title_text
        or "tts" in title_text
        or "diffusion" in title_text
        or "architecture" in title_text
        or "prover" in title_text
    ):
        return "模型方法"
    return "技术方案"


def choose_dimension(title: str, abstract: str) -> str:
    text = f"{title} {abstract}".lower()
    scores = {key: 0 for key in DIMENSIONS}
    for key, dim in DIMENSIONS.items():
        for keyword in dim["keywords"]:
            if keyword in text:
                scores[key] += 1
    best = max(scores, key=scores.get)
    return best if scores[best] > 0 else "understanding"



def short_tech_core(title: str, abstract: str, dimension: str) -> str:
    artifact_type = infer_artifact_type(title, abstract)
    dimension_name = DIMENSIONS[dimension]["name"]

    if artifact_type == "评测基准":
        return f"核心思路：这篇工作提出了一套面向{dimension_name}的评测基准，不再只看结果分数，而是更强调交互过程、状态变化或真实任务表现。"
    if artifact_type == "数据集":
        return f"核心思路：这篇工作构建了面向{dimension_name}的大规模数据集或演示集，用更真实、更连续的样本去推动后续模型训练和评测。"
    if artifact_type == "综述":
        return f"核心思路：这篇工作系统梳理了{dimension_name}方向的方法脉络，把问题拆成更清晰的模块、结构和评估维度。"
    if artifact_type == "流程框架":
        return f"核心思路：这篇工作把{dimension_name}问题组织成可复用的流程框架，通过更明确的步骤、工具或阶段划分提升整体效果。"
    if artifact_type == "方法框架":
        return f"核心思路：这篇工作提出了一套新的方法框架，试图在{dimension_name}任务里同时提升效果、稳定性和可扩展性。"
    return f"核心思路：这篇工作提出了一种新的{artifact_type}，重点提升{dimension_name}相关任务中的效果、效率或稳定性。"



def short_value(title: str, abstract: str, dimension: str) -> str:
    dim_name = DIMENSIONS[dimension]["name"]
    return f"归类到{dim_name}。{DIMENSION_VALUE_TEMPLATES[dimension]}"



def short_pm_suggestion(dimension: str) -> str:
    prompts = {
        "understanding": "优先判断它是否能提升推理、记忆或长上下文能力，再决定是否值得纳入核心能力路线。",
        "action": "优先关注它是否能直接提升 agent、工具调用或自动化执行的效果。",
        "multimodal": "重点看它是否能转化为图像、视频、OCR 或多模态交互产品能力。",
        "efficiency": "优先评估它能否显著降低成本、延迟或部署门槛。",
        "safety": "把它当成评测和风控能力候选，优先用于可靠性建设。",
        "robotics": "如果你在看具身智能或物理世界交互，这是值得持续跟踪的方向。",
    }
    return prompts[dimension]


def build_dimension_counts(papers):
    counts = {key: 0 for key in DIMENSIONS}
    for paper in papers:
        counts[paper["dimension"]] += 1
    return counts


def top_papers_for_dimension(papers, dimension, limit=3):
    items = [paper for paper in papers if paper["dimension"] == dimension]
    items.sort(key=lambda paper: paper.get("likes", 0), reverse=True)
    return items[:limit]


def build_strategies(papers):
    counts = build_dimension_counts(papers)
    sorted_dims = sorted(counts.items(), key=lambda item: item[1], reverse=True)
    strategies = []

    for dimension, count in sorted_dims:
        if count <= 0 or dimension not in STRATEGY_TEMPLATES:
            continue
        top_items = top_papers_for_dimension(papers, dimension, limit=3)
        if not top_items:
            continue
        template = STRATEGY_TEMPLATES[dimension]
        titles = ", ".join(paper["title"] for paper in top_items[:2])
        strategies.append(
            {
                "icon": template["icon"],
                "title": template["title"],
                "type": template["type"],
                "observation": f"本周{DIMENSIONS[dimension]['name']}是最密集的主题之一，共出现 {count} 篇，代表论文包括 {titles}。",
                "action": template["action"],
                "relatedPapers": [paper["id"] for paper in top_items],
            }
        )
        if len(strategies) == 4:
            break

    if not strategies:
        return [
            {
                "icon": "👀",
                "title": "本周论文集已整理完成",
                "type": "special",
                "observation": "论文列表已经生成，但脚本没有自动聚类出足够明确的战略主题。",
                "action": "建议结合头部高热论文手动补一轮 PM 视角判断，再决定资源投入方向。",
                "relatedPapers": [],
            }
        ]

    return strategies


def build_new_products(papers):
    counts = build_dimension_counts(papers)
    sorted_dims = sorted(counts.items(), key=lambda item: item[1], reverse=True)
    products = []

    for dimension, count in sorted_dims:
        if count <= 0 or dimension not in NEW_PRODUCT_TEMPLATES:
            continue
        top_items = top_papers_for_dimension(papers, dimension, limit=4)
        template = NEW_PRODUCT_TEMPLATES[dimension]
        products.append(
            {
                "icon": "🆕",
                "title": template["title"],
                "description": f"{template['description']} 本周在{DIMENSIONS[dimension]['name']}方向共出现 {count} 篇相关论文，说明这条技术栈正在加速成熟。",
                "scenes": template["scenes"],
                "relatedPapers": [paper["id"] for paper in top_items],
            }
        )
        if len(products) == 4:
            break

    if not products:
        return [
            {
                "icon": "🆕",
                "title": "AI 论文雷达",
                "description": "本周论文已经整理完成，下一步适合继续补强成更完整的产品机会判断。",
                "scenes": ["每周追踪", "PM 研究", "AI 趋势观察"],
                "relatedPapers": [],
            }
        ]

    return products



def main() -> None:
    root = Path(__file__).resolve().parent.parent
    papers_path = root / "scripts" / "papers.json"
    data_js_path = root / "assets" / "data.js"

    payload = json.loads(papers_path.read_text(encoding="utf-8"))
    papers = []

    for idx, paper in enumerate(payload.get("papers", []), start=1):
        title = paper.get("title", "Untitled Paper")
        abstract = paper.get("abstract", "")
        dimension = choose_dimension(title, abstract)
        papers.append(
            {
                "id": idx,
                "title": title,
                "url": paper.get("url"),
                "likes": paper.get("likes", 0),
                "date": paper.get("date"),
                "published_date": paper.get("published_date") or paper.get("date"),
                "abstract": abstract,
                "github_url": paper.get("github_url"),
                "org_tag": paper.get("org_tag"),
                "dimension": dimension,
                "tech_core": short_tech_core(title, abstract, dimension),
                "value": short_value(title, abstract, dimension),
                "pm_suggestion": short_pm_suggestion(dimension),
            }
        )

    js_obj = {
        "week": payload.get("week"),
        "dateRange": payload.get("dateRange"),
        "dimensions": DIMENSIONS,
        "papers": papers,
        "opportunities": {
            "strategies": build_strategies(papers),
            "newProducts": build_new_products(papers),
        },
    }

    data_js_path.write_text(
        "const PAPER_DATA = " + json.dumps(js_obj, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )
    print(f"✅ Wrote {len(papers)} papers to {data_js_path}")


if __name__ == "__main__":
    main()
