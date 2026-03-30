---
name: ai-paper-radar
description: "Use when fetching HuggingFace weekly papers, analyzing AI paper trends, generating an AI paper radar page, tracking hot papers in areas like agents or long context, or turning paper summaries into product opportunities."
---

# AI 论文雷达 - Skill

## 核心原则

**脚本先抓取并生成基础页面数据，LLM 再做增强分析。**

- `fetch_papers.py`: 仅抓取点赞数前20的论文标题、URL、点赞数、日期、abstract
- `build_data_js.py`: 将 `papers.json` 转成可直接渲染的 `assets/data.js`，确保页面不会是空壳
- 分析和机会挖掘由 GitHub Copilot 在基础数据上继续增强

**工作流自动化原则：**

- **一次性完成**：Step 1 → Step 2 → Step 3 → Step 4 必须连续执行，不要中途停下来等待用户确认


## 使用场景

当用户说以下类型的话时，使用此 skill：
- "帮我看看这周 HuggingFace 上有什么热门论文"
- "分析最近的 AI 论文趋势"
- "生成一个论文雷达网页"
- "帮我追踪一下长上下文、agent、工具调用相关的论文"
- "这周多模态有什么新进展"

## 工作流程

### Step 1: 抓取原始数据

```bash
cd scripts
python3 fetch_papers.py --top 20 --output papers.json
python3 build_data_js.py
```

输出结构：
```json
{
  "week": "2026-W05",
  "dateRange": "2026-01-27 to 2026-02-02",
  "papers": [
    {
      "title": "论文标题",
      "url": "https://huggingface.co/papers/xxx",
      "likes": 1234,
      "date": "2026-01-28",
      "abstract": "论文摘要..."
    }
  ]
}
```

### Step 2: 理解与分析（核心任务）

**这是你的核心工作。阅读每篇论文的 abstract，基于已经生成的 `assets/data.js` 做增强，而不是从空文件开始。**

#### 2.1 六大能力维度（固定分类）

每篇论文归类到以下 6 个维度之一：

| 维度 Key | 图标 | 名称 | 核心问题 | 典型关键词 |
|---------|------|------|---------|-----------|
| `understanding` | 🧠 | **理解与记忆** | AI 有多"聪明"？能理解多复杂的内容？能学习新知识吗？ | long context, reasoning, chain of thought, inference, math, RAG, memory, retrieval |
| `action` | 🧰 | **行动能力** | AI 能帮我干活吗？执行力如何？ | tool use, agent, function calling, planning, MCP, code |
| `multimodal` | 🖼 | **多模态** | AI 能看懂图片/视频吗？能生成吗？ | vision, image, video, visual, UI, OCR |
| `efficiency` | ⚙️ | **效率与成本** | 够快吗？够便宜吗？ | quantization, distillation, compression, pruning, efficient |
| `safety` | 🛡 | **可靠性与安全** | AI 靠谱吗？会不会胡说八道？ | hallucination, alignment, safety, robustness, evaluation, guardrail |
| `robotics` | 🦾 | **机器人/具身智能** | AI 能操控物理世界吗？ | robot, VLA, embodied, manipulation, world model, simulation |

**分类原则**：
- 每篇论文只归一个维度，选择最核心的那个
- 如果论文横跨多个维度，选择「创新点」所在的维度
- 内容生成类论文：如果是视频/图片生成，归 `multimodal`；如果是世界模型/机器人仿真，归 `robotics`

**dimensions 数据结构**：
```javascript
dimensions: {
  understanding: { name: "理解与记忆", icon: "🧠", keywords: ["long context", "reasoning", "chain of thought", "RAG", "memory", "retrieval"] },
  action: { name: "行动能力", icon: "🧰", keywords: ["tool use", "agent", "function calling", "planning"] },
  multimodal: { name: "多模态", icon: "🖼", keywords: ["vision", "image", "video", "OCR"] },
  efficiency: { name: "效率与成本", icon: "⚙️", keywords: ["quantization", "distillation", "pruning"] },
  safety: { name: "可靠性与安全", icon: "🛡", keywords: ["hallucination", "alignment", "safety", "guardrail"] },
  robotics: { name: "机器人/具身智能", icon: "🦾", keywords: ["robot", "VLA", "embodied", "world model"] }
}
```

#### 2.2 逐篇论文分析

**写作原则**：

| 字段 | 写作要求 | 好的例子 | 坏的例子 |
|-----|---------|---------|---------|
| 核心技术 | 一句话说清楚技术本质，用类比让小白也能懂 | "像人类程序员一样，自动扫读代码，把无关部分删掉，只留重要的" | "提出了一种基于注意力机制的上下文压缩方法" |
| 应用价值 | 指出具体的应用场景和解决的痛点 | "RAG 系统的前置净水器，解决企业知识库垃圾进垃圾出的问题" | "提升了模型的性能" |
| PM 建议 | 可执行的行动指令，带有判断和态度 | "如果你的 Coding Agent 还在把整个文件塞给 GPT-4，立刻集成这种剪枝算法，Token 账单能省 50%" | "可以考虑在产品中应用该技术" |

**PM 建议的四种类型**（选择最匹配的一种）：
1. **立刻行动型**："立刻把 XX 替换成 YY，能省/提升 N%"
2. **场景匹配型**："如果你在做 XX 场景，这个技术是核心依赖"
3. **关注跟进型**："这个方向值得关注，预计 Q3 会有成熟方案"
4. **商业模式型**："把这个作为 XX 模块单独收费"

#### 2.3 自动继续（重要）

**完成 Step 2 后，立即执行 Step 3 和 Step 4，不要停下来等待用户确认。**

如果担心输出过长：
1. 使用文件编辑工具直接更新 `assets/data.js`
2. 对话中只输出简短的进度汇报和最终摘要
3. 确保 Step 1 → 2 → 3 → 4 一气呵成

### Step 3: 产品机会挖掘

**结合你对当下最新 AI 产品与技术趋势的理解，提炼战略级洞察和新产品机会。**

产品机会板只输出两类内容：**战略级判断** 和 **新产品形态机会**。

---

#### 3.1 战略级判断（3+1 模式）

**目标**：从 20 篇论文中提炼 3-4 个高层次的战略洞察，帮助 PM 做资源配置决策。

**生成方法论**：

1. **跨论文归纳**：找出多篇论文共同指向的技术方向或问题域
2. **提炼规律**：问自己"这些论文放在一起说明了什么趋势"
3. **给出判断**：不只是描述现象，要有态度（"这是/不是机会"、"应该/不应该投入"）
4. **行动建议**：具体到"做什么"、"不做什么"、"怎么做"

**四种战略判断类型**（每种最多选 1 个，总共 3+1 个）：

| 类型 | 图标 | 含义 | 判断标准 |
|-----|------|-----|---------|
| **现金牛** | 💰 | 当前可落地变现的方向 | 多篇论文解决同一个明确的、企业愿意付费的痛点 |
| **效率革命** | 🏋️ | 降本增效的工程必修课 | 多篇论文在优化成本、速度、资源消耗 |
| **蓝海方向** | 🌊 | 增量市场的新机会 | 多篇论文指向一个尚未被产品化的技术领域 |
| **特别关注** | 👀 | 有趣但需要观察的方向 | 单篇或少数论文提出了颠覆性的新思路 |

**输出格式**：
```javascript
strategies: [
  {
    icon: "💰",
    title: "脏活自动化是现金牛",
    type: "cashcow",  // cashcow | efficiency | blueocean | special
    observation: "Paper A, Paper B, Paper C 都在解决数据处理的问题。",
    action: "别盯着炫酷的 Chatbot 了。最赚钱的机会在...",
    relatedPapers: [1, 17, 18]  // 关联论文 ID
  }
]
```

**写作示例**：

✅ **好的战略判断**：
> 💰 **脏活自动化是现金牛**
> 
> 📊 Can LLMs Clean Up Your Mess, DeepSeek-OCR 2, OCRVerse 都在解决数据处理的问题。
> 
> 💡 别盯着炫酷的 Chatbot 了。最赚钱的机会在 RAG 的上游——做一个能自动把企业那堆烂 Excel 和扫描件整理成完美数据库的 Agent。这是 B 端的刚需。

❌ **坏的战略判断**：
> 📊 本周有多篇论文关于数据处理。
> 
> 💡 可以考虑在数据处理方向进行探索。

---

#### 3.2 新产品形态机会

**目标**：识别可能催生全新产品形态的技术组合，这些产品在市场上尚不存在或尚未成熟。

**生成方法论**：

1. **能力组合思考**：当 A 能力 + B 能力组合时，能做出什么新产品？
2. **痛点反推**：现有产品解决不了什么问题？这些论文的技术能填补吗？
3. **类比迁移**：这个技术在 A 领域成功了，能否迁移到 B 领域？
4. **形态想象**：描述这个新产品"长什么样"、"用户怎么用"

**新产品判断标准**（至少满足 2 条）：
- [ ] 市场上没有成熟的同类产品
- [ ] 需要本周论文中的 2+ 项技术组合
- [ ] 有明确的目标用户和使用场景
- [ ] 能用一句话说清楚产品价值

**输出格式**：
```javascript
newProducts: [
  {
    icon: "🆕",
    title: "Agent Observability 平台",
    description: "当 Agent 开始干真实业务，就必须像微服务一样可观测。轨迹回放 + 风险点标注 + 上下文裁剪可视化。",
    scenes: ["企业 Agent", "自动化客服", "自动运维"],
    relatedPapers: [5, 10, 4]  // 关联论文 ID
  }
]
```

**写作示例**：

✅ **好的新产品描述**：
> 🆕 **视觉推理 Copilot**
> 
> 看 → 拆结构 → 想 → 调工具 → 算 → 给结论。当模型能看+想+用工具，它不再是聊天机器人，而是分析型助理。
> 
> 🎯 适用场景：财报分析、网页理解、实验数据、工程图纸

❌ **坏的新产品描述**：
> 🆕 **多模态分析工具**
> 
> 利用多模态技术进行数据分析。

---

#### 3.3 产品机会板数据结构

```javascript
opportunities: {
  strategies: [...],   // 3-4 个战略级判断
  newProducts: [...]   // 3-5 个新产品形态
}
```

**不再使用**：highlights、breakthroughs、productTypes、battlefields 等结构。

### Step 4: 填充网页模板

使用 `assets/` 目录下的模板文件：

| 文件 | 用途 |
|-----|------|
| `index.html` | 网页结构和样式（内联 CSS/JS） |
| `data.js` | 论文数据（每次运行自动重写） |

**⚠️ 重要：字符转义规则**
`data.js` 是 JavaScript 文件，所有字符串内容必须正确转义，否则会导致语法错误：
- 双引号 `"` → 转义为 `\"`
- 反斜杠 `\` → 转义为 `\\`
- 换行符 → 转义为 `\n`
- 特殊字符如 `$` 在模板字符串中需注意

**修改 `data.js`**：
```javascript
const PAPER_DATA = {
  week: "2026-W05",
  dateRange: "2026-01-27 to 2026-02-02",
  
  // 六大能力维度（固定分类）
  dimensions: {
    understanding: { name: "理解与记忆", icon: "🧠", keywords: ["long context", "reasoning", "RAG", "memory"] },
    action: { name: "行动能力", icon: "🧰", keywords: ["tool use", "agent", "function calling", "planning"] },
    multimodal: { name: "多模态", icon: "🖼", keywords: ["vision", "image", "video", "OCR"] },
    efficiency: { name: "效率与成本", icon: "⚙️", keywords: ["quantization", "distillation", "pruning"] },
    safety: { name: "可靠性与安全", icon: "🛡", keywords: ["hallucination", "alignment", "safety"] },
    robotics: { name: "机器人/具身智能", icon: "🦾", keywords: ["robot", "VLA", "embodied", "world model"] }
  },
  
  // 论文列表（动态生成，根据本周抓取的 papers.json）
  papers: [
    {
      id: 1,
      title: "论文标题",
      url: "https://huggingface.co/papers/xxx",
      likes: 1234,
      date: "2026-01-28",
      published_date: "Jan 28",
      abstract: "论文摘要...",
      github_url: "https://github.com/xxx/xxx",  // 可选
      org_tag: "Google DeepMind",  // 可选，机构标签
      dimension: "understanding",  // 对应 dimensions 的 key（6选1）
      
      // 三个核心分析字段
      tech_core: "核心技术（一句大白话描述技术本质）",
      value: "应用价值（这项技术能解决什么实际问题）",
      pm_suggestion: "PM 建议（作为产品经理，下一步该怎么行动）"
    }
    // ... 更多论文（动态填充）
  ],
  
  // 产品机会（只有两类）
  opportunities: {
    // 战略级判断（3-4 个）
    strategies: [
      {
        icon: "💰",
        title: "脏活自动化是现金牛",
        type: "cashcow",  // cashcow | efficiency | blueocean | special
        observation: "Paper A, Paper B, Paper C 都在解决数据处理的问题。",
        action: "别盯着炫酷的 Chatbot 了。最赚钱的机会在 RAG 的上游...",
        relatedPapers: [1, 17, 18]
      }
    ],
    
    // 新产品形态机会（3-5 个）
    newProducts: [
      {
        icon: "🆕",
        title: "Agent Observability 平台",
        description: "当 Agent 开始干真实业务，就必须像微服务一样可观测。",
        scenes: ["企业 Agent", "自动化客服", "自动运维"],
        relatedPapers: [5, 10, 4]
      }
    ]
  }
};
```

## 资源文件

### scripts/ 目录

| 脚本 | 功能 |
|-----|------|
| `fetch_papers.py` | 仅抓取：标题、URL、点赞、日期、abstract、机构标签 |
| `build_data_js.py` | 将 `papers.json` 生成为可渲染的 `assets/data.js`，避免空页面 |

### assets/ 目录

- `index.html` - 单页应用（包含样式和交互逻辑）
- `data.js` - 论文数据模板（每次运行自动重写）

## 输出格式

```
✅ AI 论文雷达网页已生成！

📁 项目结构：
assets/
├── index.html          # 网页（内联样式和交互）
└── data.js             # 已填充论文数据
scripts/
├── fetch_papers.py     # 抓取脚本
└── papers.json         # 原始论文数据

📊 数据概览：
- 周次：2026-W05
- 论文总数：20 篇
- 六大能力维度分布：
  🧠 理解与记忆：X 篇
  🧰 行动能力：X 篇
  🖼 多模态：X 篇
  ⚙️ 效率与成本：X 篇
  🛡 可靠性与安全：X 篇
  🦾 机器人/具身智能：X 篇

🎯 战略级判断：
1. 💰 [判断1标题]
2. 🏋️ [判断2标题]
3. 🌊 [判断3标题]
4. 👀 [特别关注]（可选）

💡 新产品形态机会：
1. [新产品1]：[一句话描述]
2. [新产品2]：[一句话描述]

📂 在浏览器中打开 assets/index.html 查看完整雷达网页。
```

## 注意事项

1. **固定分类**：维度固定为 6 个，每篇论文选择最核心的那个
2. **PM 视角**：每篇论文的 pm_suggestion 要有态度、可执行
3. **战略高度**：strategies 要跨论文归纳，不是简单罗列
4. **新产品想象**：newProducts 要描述产品形态，不是技术能力
5. **链接可点击**：所有论文引用都要关联到源论文 URL
