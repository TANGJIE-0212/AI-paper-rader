// AI Paper Radar - Weekly Analysis
const PAPER_DATA = {
  "week": "2026-W14",
  "dateRange": "2026-03-29 to 2026-04-04",
  "dimensions": {
    "understanding": {
      "name": "理解与记忆",
      "icon": "🧠",
      "keywords": [
        "long context",
        "reasoning",
        "chain of thought",
        "inference",
        "math",
        "rag",
        "memory",
        "retrieval"
      ]
    },
    "action": {
      "name": "行动能力",
      "icon": "🧰",
      "keywords": [
        "tool use",
        "agent",
        "function calling",
        "planning",
        "mcp",
        "code",
        "workflow",
        "orchestration"
      ]
    },
    "multimodal": {
      "name": "多模态",
      "icon": "🖼",
      "keywords": [
        "vision",
        "image",
        "video",
        "visual",
        "ocr",
        "audio",
        "multimodal",
        "vlm"
      ]
    },
    "efficiency": {
      "name": "效率与成本",
      "icon": "⚙️",
      "keywords": [
        "quantization",
        "distillation",
        "compression",
        "pruning",
        "efficient",
        "speed",
        "latency"
      ]
    },
    "safety": {
      "name": "可靠性与安全",
      "icon": "🛡",
      "keywords": [
        "hallucination",
        "alignment",
        "safety",
        "robust",
        "evaluation",
        "guardrail",
        "benchmark"
      ]
    },
    "robotics": {
      "name": "机器人/具身智能",
      "icon": "🦾",
      "keywords": [
        "robot",
        "robotics",
        "vla",
        "embodied",
        "manipulation",
        "world model",
        "simulation"
      ]
    }
  },
  "papers": [
    {
      "id": 1,
      "title": "FIPO: Eliciting Deep Reasoning with Future-KL Influenced Policy Optimization",
      "url": "https://huggingface.co/papers/2603.19835",
      "likes": 300,
      "date": "2026-04-02",
      "published_date": "Mar 20",
      "abstract": "We present Future-KL InfluencedPolicy Optimization(FIPO), areinforcement learningalgorithm designed to overcome reasoning bottlenecks in large language models. While GRPO style training scales effectively, it typically relies on outcome-based rewards (ORM) that distribute a global advantage uniformly across every token in a trajectory. We argue that this coarse-grained credit assignment imposes a performance ceiling by failing to distinguish critical logical pivots from trivial tokens. FIPO addresses this by incorporatingdiscounted future-KL divergenceinto thepolicy update, creating adense advantage formulationthat re-weights tokens based on their influence on subsequent trajectory behavior. Empirically, FIPO enables models to break through the length stagnation seen in standard baselines. Evaluated on Qwen2.5-32B, FIPO extends the average chain-of-thought length from roughly 4,000 to over 10,000 tokens and increasesAIME 2024Pass@1 accuracyfrom 50.0% to a peak of 58.0% (converging at approximately 56.0\\%). This outperforms both DeepSeek-R1-Zero-Math-32B (around 47.0%) and o1-mini (approximately 56.0%). Our results suggest that establishingdense advantage formulations is a vital path for evolving ORM-based algorithms to unlock the full reasoning potential of base models. We open-source our training system, built on the verl framework.",
      "github_url": "https://github.com/qwenpilot/FIPO",
      "org_tag": "Qwen",
      "dimension": "understanding",
      "tech_core": "它不是只看最后答没答对，而是给推理链里真正关键的拐点单独加权，相当于给模型配了“过程教练”，逼它把长推理练扎实。",
      "value": "适合数学、代码、深研究这类需要长链条思考的场景，解决模型会做题但推理半路掉线、越想越乱的问题。",
      "pm_suggestion": "如果你的产品卖点是深度推理，不要再只刷结果奖励了，立刻评估这种过程级 credit assignment；长链路任务的稳定性会比单纯堆数据更值钱。"
    },
    {
      "id": 2,
      "title": "CARLA-Air: Fly Drones Inside a CARLA World -- A Unified Infrastructure for Air-Ground Embodied Intelligence",
      "url": "https://huggingface.co/papers/2603.28032",
      "likes": 232,
      "date": "2026-04-02",
      "published_date": "Mar 30",
      "abstract": "The convergence of low-altitude economies,embodied intelligence, and air-ground cooperative systems creates growing demand for simulation infrastructure capable of jointly modeling aerial and ground agents within a single physically coherent environment. Existing open-source platforms remain domain-segregated: driving simulators lack aerial dynamics, while multirotor simulators lack realistic ground scenes. Bridge-basedco-simulationintroduces synchronization overhead and cannot guarantee strict spatial-temporal consistency.\n  We presentCARLA-Air, an open-source infrastructure that unifies high-fidelity urban driving andphysics-accuratemultirotor flight within a singleUnreal Engineprocess. The platform preserves bothCARLAandAirSimnative Python APIs andROS 2interfaces, enabling zero-modification code reuse. Within a shared physics tick and rendering pipeline,CARLA-Air delivers photorealistic environments with rule-compliant traffic, socially-aware pedestrians, and aerodynamically consistent UAV dynamics, synchronously capturing up to 18sensor modalitiesacross all platforms at each tick. The platform supports representative air-groundembodied intelligenceworkloads spanning cooperation, embodied navigation and vision-language action, multi-modal perception and dataset construction, andreinforcement-learning-based policy training. An extensible asset pipeline allows integration of custom robot platforms into the shared world. By inheritingAirSim's aerial capabilities -- whose upstream development has been archived --CARLA-Air ensures this widely adopted flight stack continues to evolve within a modern infrastructure.\n  Released with prebuilt binaries and full source: https://github.com/louiszengCN/CarlaAir",
      "github_url": "https://github.com/louiszengCN/CarlaAir",
      "org_tag": null,
      "dimension": "robotics",
      "tech_core": "把地面车流、行人和无人机飞行塞进同一个仿真世界里跑，相当于把“自动驾驶模拟器”和“无人机模拟器”焊成了一套统一训练场。",
      "value": "适合低空经济、巡检、配送和空地协同安防，解决过去多仿真器拼接不同步、代码难复用、数据口径不一致的问题。",
      "pm_suggestion": "如果你在做空地协同或无人机产品，别再自己搭双仿真桥了，直接基于这种统一环境做数据闭环；训练、评测、演示会快一个量级。"
    },
    {
      "id": 3,
      "title": "ClawKeeper: Comprehensive Safety Protection for OpenClaw Agents Through Skills, Plugins, and Watchers",
      "url": "https://huggingface.co/papers/2603.24414",
      "likes": 161,
      "date": "2026-04-02",
      "published_date": "Mar 25",
      "abstract": "OpenClaw has rapidly established itself as a leading open-sourceautonomous agent runtime, offering powerful capabilities includingtool integration,local file access, andshell command execution. However, these broad operational privileges introduce criticalsecurity vulnerabilities, transforming model errors into tangible system-level threats such as sensitive data leakage,privilege escalation, andmalicious third-party skill execution. Existing security measures for the OpenClaw ecosystem remain highly fragmented, addressing only isolated stages of the agent lifecycle rather than providing holistic protection. To bridge this gap, we present ClawKeeper, a real-timesecurity frameworkthat integratesmulti-dimensional protection mechanismsacross three complementary architectural layers. (1) Skill-based protection operates at theinstruction level, injectingstructured security policiesdirectly into the agent context to enforceenvironment-specific constraintsandcross-platform boundaries. (2) Plugin-based protection serves as aninternal runtime enforcer, providingconfiguration hardening,proactive threat detection, andcontinuous behavioral monitoringthroughout theexecution pipeline. (3) Watcher-based protection introduces a novel,decoupled system-level security middlewarethat continuously verifies agent state evolution. It enablesreal-time execution interventionwithout coupling to the agent's internal logic, supporting operations such as haltinghigh-risk actionsor enforcinghuman confirmation. We argue that thisWatcher paradigmholds strong potential to serve as afoundational building blockfor securing next-generation autonomous agent systems. Extensive qualitative and quantitative evaluations demonstrate the effectiveness and robustness of ClawKeeper across diverse threat scenarios. We release our code.",
      "github_url": "https://github.com/SafeAI-Lab-X/ClawKeeper",
      "org_tag": null,
      "dimension": "safety",
      "tech_core": "它把 Agent 安全拆成三层：提示词里的规矩、运行时里的拦截器、系统外的观察哨，像给高权限 Agent 同时配了交规、交警和行车记录仪。",
      "value": "适合任何能读文件、跑命令、调工具的 Agent 平台，解决单点防护不够、越能干越危险的问题。",
      "pm_suggestion": "如果你的 Agent 已经能碰真实系统，把安全从“回复前提醒一句”升级成三层防线，否则迟早会在数据泄漏或越权执行上交学费。"
    },
    {
      "id": 4,
      "title": "ShotStream: Streaming Multi-Shot Video Generation for Interactive Storytelling",
      "url": "https://huggingface.co/papers/2603.25746",
      "likes": 150,
      "date": "2026-04-02",
      "published_date": "Mar 26",
      "abstract": "Multi-shot video generationis crucial for long narrative storytelling, yet current bidirectional architectures suffer from limited interactivity and high latency. We propose ShotStream, a novel causal multi-shot architecture that enables interactive storytelling and efficient on-the-fly frame generation. By reformulating the task asnext-shot generationconditioned on historical context, ShotStream allows users to dynamically instruct ongoing narratives via streaming prompts. We achieve this by first fine-tuning atext-to-video modelinto a bidirectional next-shot generator, which is then distilled into a causal student viaDistribution Matching Distillation. To overcome the challenges ofinter-shot consistencyanderror accumulationinherent inautoregressive generation, we introduce two key innovations. First, adual-cache memory mechanismpreserves visual coherence: aglobal context cacheretains conditional frames forinter-shot consistency, while alocal context cacheholds generated frames within the current shot forintra-shot consistency. And aRoPE discontinuity indicatoris employed to explicitly distinguish the two caches to eliminate ambiguity. Second, to mitigateerror accumulation, we propose atwo-stage distillationstrategy. This begins with intra-shotself-forcingconditioned on ground-truth historical shots and progressively extends to inter-shotself-forcingusing self-generated histories, effectively bridging thetrain-test gap. Extensive experiments demonstrate that ShotStream generates coherent multi-shot videos with sub-second latency, achieving 16 FPS on a single GPU. It matches or exceeds the quality of slower bidirectional models, paving the way for real-time interactive storytelling. Training and inference code, as well as the models, are available on our",
      "github_url": "https://github.com/KlingAIResearch/ShotStream",
      "org_tag": null,
      "dimension": "multimodal",
      "tech_core": "把长视频生成改成一镜一镜往前接着拍，还给模型留了全局记忆和当前镜头记忆，相当于把一次性出片改成导演式连拍。",
      "value": "适合互动短剧、游戏过场和品牌内容生成，解决长视频不连贯、用户没法中途改剧情、生成太慢的问题。",
      "pm_suggestion": "如果你在做 AI 视频产品，别只卷单镜头画质了，立刻把“流式续写+可中途插指令”排进路线图，这才是能提高留存的交互形态。"
    },
    {
      "id": 5,
      "title": "Out of Sight but Not Out of Mind: Hybrid Memory for Dynamic Video World Models",
      "url": "https://huggingface.co/papers/2603.25716",
      "likes": 146,
      "date": "2026-04-02",
      "published_date": "Mar 26",
      "abstract": "Video world modelshave shown immense potential in simulating the physical world, yet existing memory mechanisms primarily treat environments as static canvases. Whendynamic subjectshide out of sight and later re-emerge, current methods often struggle, leading to frozen, distorted, or vanishing subjects. To address this, we introduceHybrid Memory, a novel paradigm requiring models to simultaneously act as precise archivists forstatic backgroundsand vigilant trackers fordynamic subjects, ensuringmotion continuityduring out-of-view intervals. To facilitate research in this direction, we construct HM-World, the first large-scale video dataset dedicated tohybrid memory. It features 59K high-fidelity clips with decoupled camera and subject trajectories, encompassing 17 diverse scenes, 49 distinct subjects, and meticulously designed exit-entry events to rigorously evaluate hybrid coherence. Furthermore, we propose HyDRA, a specializedmemory architecturethat compresses memory into tokens and utilizes aspatiotemporal relevance-driven retrievalmechanism. By selectively attending to relevant motion cues, HyDRA effectively preserves the identity and motion of hidden subjects. Extensive experiments on HM-World demonstrate that our method significantly outperforms state-of-the-art approaches in both dynamic subject consistency and overall generation quality.",
      "github_url": "https://github.com/H-EmbodVis/HyDRA",
      "org_tag": "H-EmbodVis",
      "dimension": "robotics",
      "tech_core": "它让世界模型同时记住静态背景和离开视野的运动目标，像监控员一样知道人只是暂时出框了，但没从世界里消失。",
      "value": "适合机器人导航、自动驾驶预测和仿真训练，解决遮挡后目标丢失、轨迹断裂、场景一动就失真的问题。",
      "pm_suggestion": "如果你在做具身智能或视频世界模型，把“出视野后仍连续追踪”设成硬指标；连这个都做不到，落地场景里的安全和稳定都不够。"
    },
    {
      "id": 6,
      "title": "TAPS: Task Aware Proposal Distributions for Speculative Sampling",
      "url": "https://huggingface.co/papers/2603.27027",
      "likes": 134,
      "date": "2026-04-02",
      "published_date": "Mar 27",
      "abstract": "Speculative decodingacceleratesautoregressive generationby letting a lightweightdraft modelpropose future tokens that a larger target model then verifies in parallel. In practice, however,draft models are usually trained on broad generic corpora, which leaves it unclear how muchspeculative decodingquality depends on the draft training distribution. We study this question with lightweightHASSandEAGLE-2drafters trained on MathInstruct, ShareGPT, and mixed-data variants, evaluated onMT-Bench,GSM8K,MATH-500, andSVAMP. Measured byacceptance length, task-specific training yields clear specialization: MathInstruct-trained drafts are strongest on reasoning benchmarks, while ShareGPT-trained drafts are strongest onMT-Bench. Mixed-data training improves robustness, but larger mixtures do not dominate across decoding temperatures. We also study how to combine specialized drafters at inference time. Naive checkpoint averaging performs poorly, whereasconfidence-based routingimproves over single-domain drafts andmerged-tree verificationyields the highestacceptance lengthoverall for both backbones. Finally, confidence is a more useful routing signal thanentropy: rejected tokens tend to have higherentropy, but confidence produces much clearer benchmark-level routing decisions. These results show thatspeculative decodingquality depends not only on draft architecture, but also on the match between draft training data and downstream workload, and that specialized drafters are better combined at inference time than in weight space.",
      "github_url": "https://github.com/Moe-Zbeeb/TAPS",
      "org_tag": "Image and Video Understanding Lab",
      "dimension": "efficiency",
      "tech_core": "别让一个通用小草稿模型硬吃所有任务，而是按任务路由到更擅长的 draft model，相当于给大模型配了分科助教。",
      "value": "适合推理、客服、通用问答混跑的平台，解决 speculative decoding 提速不稳定、某些任务越加速越翻车的问题。",
      "pm_suggestion": "如果你已经在做推理加速，立刻把单一 drafter 改成任务分流；同样的显卡预算，吞吐量通常比继续抠内核更快见效。"
    },
    {
      "id": 7,
      "title": "LongCat-Next: Lexicalizing Modalities as Discrete Tokens",
      "url": "https://huggingface.co/papers/2603.27538",
      "likes": 121,
      "date": "2026-04-02",
      "published_date": "Mar 29",
      "abstract": "The prevailingNext-Token Prediction(NTP) paradigm has driven the success of large language models through discreteautoregressive modeling. However, contemporarymultimodal systemsremain language-centric, often treating non-linguistic modalities as external attachments, leading to fragmented architectures and suboptimal integration. To transcend this limitation, we introduce Discrete Native Autoregressive (DiNA), a unified framework that represents multimodal information within a shareddiscrete space, enabling a consistent and principledautoregressive modelingacross modalities. A key innovation is theDiscrete Native Any-resolution Visual Transformer(dNaViT), which performstokenizationandde-tokenizationat arbitrary resolutions, transforming continuous visual signals into hierarchical discrete tokens. Building on this foundation, we developLongCat-Next, a native multimodal model that processes text, vision, and audio under a single autoregressive objective with minimal modality-specific design. As an industrial-strength foundation model, it excels at seeing, painting, and talking within a single framework, achieving strong performance across a wide range of multimodal benchmarks. In particular,LongCat-Nextaddresses the long-standing performance ceiling of discrete vision modeling on understanding tasks and provides a unified approach to effectively reconcile the conflict between understanding and generation. As an attempt toward native multimodality, we open-source theLongCat-Nextand its tokenizers, hoping to foster further research and development in the community. GitHub: https://github.com/meituan-longcat/LongCat-Next",
      "github_url": "https://github.com/meituan-longcat/LongCat-Next",
      "org_tag": "LongCat",
      "dimension": "multimodal",
      "tech_core": "它把图片、音频也离散成像“词”一样的 token，让模型真正在同一套语言里看、说、画，而不是外挂几个模态适配器。",
      "value": "适合统一做文档理解、视觉问答和图像生成的平台，解决多模态系统东拼西凑、理解和生成两张皮的问题。",
      "pm_suggestion": "如果你想做统一多模态底座，不要再堆独立 encoder 了，优先押注原生 token 统一架构；后面做产品能力扩展会省很多技术债。"
    },
    {
      "id": 8,
      "title": "Towards a Medical AI Scientist",
      "url": "https://huggingface.co/papers/2603.28589",
      "likes": 81,
      "date": "2026-04-02",
      "published_date": "Mar 30",
      "abstract": "Autonomous systems that generate scientific hypotheses, conduct experiments, and draft manuscripts have recently emerged as a promising paradigm for accelerating discovery. However, existing AI Scientists remain largely domain-agnostic, limiting their applicability to clinical medicine, where research is required to be grounded in medical evidence with specialized data modalities. In this work, we introduce Medical AI Scientist, the firstautonomous research frameworktailored toclinical autonomous research. It enables clinically grounded ideation by transforming extensively surveyed literature into actionable evidence throughclinician-engineer co-reasoning mechanism, which improves the traceability of generated research ideas. It further facilitatesevidence-grounded manuscript draftingguided bystructured medical compositional conventionsandethical policies. The framework operates under 3 research modes, namelypaper-based reproduction,literature-inspired innovation, andtask-driven exploration, each corresponding to a distinct level of automated scientific inquiry with progressively increasing autonomy. Comprehensive evaluations by bothlarge language modelsandhuman expertsdemonstrate that the ideas generated by the Medical AI Scientist are of substantially higher quality than those produced by commercial LLMs across 171 cases, 19 clinical tasks, and 6 data modalities. Meanwhile, our system achieves strong alignment between the proposed method and its implementation, while also demonstrating significantly higher success rates inexecutable experiments. Double-blind evaluations byhuman expertsand the Stanford Agentic Reviewer suggest that the generated manuscripts approachMICCAI-level quality, while consistently surpassing those fromISBIandBIBM. The proposed Medical AI Scientist highlights the potential of leveraging AI for autonomous scientific discovery in healthcare.",
      "github_url": null,
      "org_tag": null,
      "dimension": "action",
      "tech_core": "它不是让模型随便写医学论文，而是把文献证据、临床规则、实验执行和写作规范串成一条可追溯的研究流水线。",
      "value": "适合医药研发、临床研究支持和医学情报团队，解决通用 AI Scientist 不懂医学证据链、写得像样却站不住脚的问题。",
      "pm_suggestion": "如果你在做医疗 AI，别急着卖“全自动科学家”，先把证据追溯、伦理约束和可执行实验三件事做硬，这才过得了行业门槛。"
    },
    {
      "id": 9,
      "title": "Lingshu-Cell: A generative cellular world model for transcriptome modeling toward virtual cells",
      "url": "https://huggingface.co/papers/2603.25240",
      "likes": 73,
      "date": "2026-04-02",
      "published_date": "Mar 26",
      "abstract": "Modeling cellular states and predicting their responses to perturbations are central challenges in computational biology and the development of virtual cells. Existing foundation models forsingle-cell transcriptomicsprovide powerful static representations, but they do not explicitly model the distribution of cellular states for generative simulation. Here, we introduce Lingshu-Cell, amasked discrete diffusion modelthat learns transcriptomic state distributions and supportsconditional simulationunder perturbation. By operating directly in adiscrete token spacethat is compatible with the sparse, non-sequential nature of single-cell transcriptomic data, Lingshu-Cell captures complextranscriptome-wide expression dependenciesacross approximately 18,000 genes without relying on prior gene selection, such as filtering by high variability or ranking by expression level. Across diverse tissues and species, Lingshu-Cell accurately reproduces transcriptomic distributions, marker-gene expression patterns and cell-subtype proportions, demonstrating its ability to capture complex cellular heterogeneity. Moreover, by jointly embedding cell type or donor identity with perturbation, Lingshu-Cell can predict whole-transcriptome expression changes for novel combinations of identity and perturbation. It achieves leading performance on theVirtual Cell ChallengeH1genetic perturbation benchmarkand in predictingcytokine-induced responsesin human PBMCs. Together, these results establish Lingshu-Cell as a flexible cellular world model for in silico simulation of cell states andperturbation responses, laying the foundation for a new paradigm in biological discovery and perturbation screening.",
      "github_url": null,
      "org_tag": "DAMO Academy",
      "dimension": "robotics",
      "tech_core": "它把细胞状态当成一个可模拟的世界来建模，能在给定扰动下提前“演一遍”基因表达会怎么变。",
      "value": "适合药物筛选、虚拟细胞实验和生物研发，解决真实湿实验慢、贵、组合空间大到试不完的问题。",
      "pm_suggestion": "如果你盯着 AI for Science 的商业化，把它当作“湿实验前的仿真层”去卖，而不是论文展示；省掉一次实验回合就有真实付费理由。"
    },
    {
      "id": 10,
      "title": "GEMS: Agent-Native Multimodal Generation with Memory and Skills",
      "url": "https://huggingface.co/papers/2603.28088",
      "likes": 66,
      "date": "2026-04-02",
      "published_date": "Mar 30",
      "abstract": "Recentmultimodal generation modelshave achieved remarkable progress on general-purpose generation tasks, yet continue to struggle with complex instructions and specialized downstream tasks. Inspired by the success of advancedagent frameworkssuch as Claude Code, we propose GEMS (Agent-Native Multimodal GEneration with Memory and Skills), a framework that pushes beyond the inherent limitations of foundational models on both general and downstream tasks. GEMS is built upon three core components.Agent Loopintroduces a structured multi-agent framework that iteratively improves generation quality throughclosed-loop optimization.Agent Memoryprovides a persistent,trajectory-level memorythat hierarchically stores both factual states and compressed experiential summaries, enabling a global view of the optimization process while reducing redundancy.Agent Skilloffers an extensible collection ofdomain-specific expertisewith on-demand loading, allowing the system to effectively handle diverse downstream applications. Across five mainstream tasks and four downstream tasks, evaluated on multiplegenerative backends, GEMS consistently achieves significant performance gains. Most notably, it enables the lightweight 6B modelZ-Image-Turboto surpass the state-of-the-artNano Banana 2on GenEval2, demonstrating the effectiveness of agent harness in extending model capabilities beyond their original limits.",
      "github_url": "https://github.com/lcqysl/GEMS",
      "org_tag": null,
      "dimension": "action",
      "tech_core": "给生成模型外挂了 Agent loop、长期记忆和技能库，相当于让一个会画图的模型学会先复盘、再调用专家、再迭代改稿。",
      "value": "适合电商设计、营销素材和复杂工业生成任务，解决基础模型单轮指令听不懂、专业任务一做就掉链子的问题。",
      "pm_suggestion": "如果你的生成产品已经卡在复杂指令上，不要急着换更大的底模，先把 memory + skills 做成产品层增强，性价比更高。"
    },
    {
      "id": 11,
      "title": "Gen-Searcher: Reinforcing Agentic Search for Image Generation",
      "url": "https://huggingface.co/papers/2603.28767",
      "likes": 51,
      "date": "2026-04-02",
      "published_date": "Mar 30",
      "abstract": "Recent image generation models have shown strong capabilities in generating high-fidelity and photorealistic images. However, they are fundamentally constrained by frozen internal knowledge, thus often failing on real-world scenarios that are knowledge-intensive or require up-to-date information. In this paper, we present Gen-Searcher, as the first attempt to train asearch-augmented image generationagent, which performsmulti-hop reasoningand search to collect the textual knowledge and reference images needed for grounded generation. To achieve this, we construct a tailored data pipeline and curate two high-quality datasets, Gen-Searcher-SFT-10k and Gen-Searcher-RL-6k, containing diverse search-intensive prompts and corresponding ground-truth synthesis images. We further introduce KnowGen, a comprehensive benchmark that explicitly requires search-grounded external knowledge for image generation and evaluates models from multiple dimensions. Based on these resources, we train Gen-Searcher with SFT followed byagentic reinforcement learningwithdual reward feedback, which combines text-based and image-based rewards to provide more stable and informative learning signals forGRPO training. Experiments show that Gen-Searcher brings substantial gains, improving Qwen-Image by around 16 points on KnowGen and 15 points on WISE. We hope this work can serve as an open foundation for search agents in image generation, and we fully open-source our data, models, and code.",
      "github_url": "https://github.com/tulerfeng/Gen-Searcher",
      "org_tag": null,
      "dimension": "action",
      "tech_core": "先搜资料、再找参考图、再多跳推理，最后才生成图，相当于给文生图加了一个会做案头研究的美术助理。",
      "value": "适合品牌海报、新闻配图、知识型内容创作，解决模型闭卷作画、遇到实时信息和冷门概念就胡画的问题。",
      "pm_suggestion": "如果你在做商用图像生成，把“搜索增强”做成付费档位；客户真正愿意买单的不是更会画，而是更不容易画错。"
    },
    {
      "id": 12,
      "title": "Project Imaging-X: A Survey of 1000+ Open-Access Medical Imaging Datasets for Foundation Model Development",
      "url": "https://huggingface.co/papers/2603.27460",
      "likes": 51,
      "date": "2026-04-02",
      "published_date": "Mar 29",
      "abstract": "Foundation modelshave demonstrated remarkable success across diverse domains and tasks, primarily due to the thrive of large-scale, diverse, and high-qualitydatasets. However, in the field ofmedical imaging, the curation and assembling of such medicaldatasetsare highly challenging due to the reliance on clinical expertise and strict ethical and privacy constraints, resulting in a scarcity of large-scale unified medicaldatasetsand hindering the development of powerfulmedical foundation models. In this work, we present the largest survey to date of medical imagedatasets, covering over 1,000 open-accessdatasetswith a systematic catalog of their modalities, tasks, anatomies, annotations, limitations, and potential for integration. Our analysis exposes a landscape that is modest in scale, fragmented across narrowly scoped tasks, and unevenly distributed across organs and modalities, which in turn limits the utility of existing medical imagedatasetsfor developing versatile and robustmedical foundation models. To turn fragmentation into scale, we propose ametadata-driven fusionparadigm (MDFP) that integrates publicdatasetswith shared modalities or tasks, thereby transforming multiple small data silos into larger, more coherent resources. Building on MDFP, we release an interactive discovery portal that enables end-to-end, automated medical image dataset integration, and compile all surveyeddatasetsinto a unified, structured table that clearly summarizes their key characteristics and provides reference links, offering the community an accessible and comprehensive repository. By charting the current terrain and offering a principled path to dataset consolidation, our survey provides a practical roadmap for scalingmedical imagingcorpora, supporting faster data discovery, more principled dataset creation, and more capablemedical foundation models.",
      "github_url": "https://github.com/uni-medical/Project-Imaging-X",
      "org_tag": "General Medical AI",
      "dimension": "multimodal",
      "tech_core": "它不是再造一个模型，而是先把上千个碎片化医学影像数据集整理成可发现、可拼接、可自动融合的地图和装配线。",
      "value": "适合医疗影像基础模型团队和数据平台，解决数据分散、标准不统一、每次立项都要重新找数清洗的问题。",
      "pm_suggestion": "如果你做医疗影像平台，把“数据集发现+自动拼库”单独做成基础设施模块收费，这比再训一个 demo 模型更容易形成护城河。"
    },
    {
      "id": 13,
      "title": "Emergent Social Intelligence Risks in Generative Multi-Agent Systems",
      "url": "https://huggingface.co/papers/2603.27771",
      "likes": 46,
      "date": "2026-04-02",
      "published_date": "Mar 29",
      "abstract": "Multi-agent systemscomposed oflarge generative modelsare rapidly moving from laboratory prototypes to real-world deployments, where they jointly plan, negotiate, and allocate shared resources to solve complex tasks. While such systems promise unprecedented scalability and autonomy, theircollective interactionalso gives rise to failure modes that cannot be reduced to individual agents. Understanding theseemergent risksis therefore critical. Here, we present a pioneer study of such emergent multi-agent risk in workflows that involve competition over shared resources (e.g., computing resources or market share),sequential handoff collaboration(where downstream agents see only predecessor outputs),collective decision aggregation, and others. Across these settings, we observe that such group behaviors arise frequently across repeated trials and a wide range of interaction conditions, rather than as rare or pathological cases. In particular, phenomena such ascollusion-like coordinationandconformityemerge with non-trivial frequency under realistic resource constraints, communication protocols, and role assignments, mirroring well-known pathologies in human societies despite no explicit instruction. Moreover, these risks cannot be prevented by existing agent-level safeguards alone. These findings expose the dark side of intelligentmulti-agent systems: asocial intelligence riskwhere agent collectives, despite no instruction to do so, spontaneously reproduce familiar failure patterns from human societies.",
      "github_url": "https://github.com/HowieHwong/RiskLab",
      "org_tag": null,
      "dimension": "safety",
      "tech_core": "它发现多 Agent 凑在一起后，会自己长出串谋、从众、甩锅这类群体风险，不是单个 Agent 安全了，系统就安全了。",
      "value": "适合多 Agent 协同、资源调度和自动化业务流程，解决集体行为失控、结果看起来合理但过程已经偏航的问题。",
      "pm_suggestion": "如果你的系统里已经有多个 Agent 在分工合作，立刻补一层群体行为监控；只做单 Agent guardrail，等于没做。"
    },
    {
      "id": 14,
      "title": "PackForcing: Short Video Training Suffices for Long Video Sampling and Long Context Inference",
      "url": "https://huggingface.co/papers/2603.25730",
      "likes": 46,
      "date": "2026-04-02",
      "published_date": "Mar 26",
      "abstract": "Autoregressive video diffusion modelshave demonstrated remarkable progress, yet they remain bottlenecked by intractable linearKV-cachegrowth,temporal repetition, andcompounding errorsduring long-video generation. To address these challenges, we present PackForcing, a unified framework that efficiently manages the generation history through a novel three-partitionKV-cachestrategy. Specifically, we categorize the historical context into three distinct types: (1)Sink tokens, which preserve early anchor frames at full resolution to maintain global semantics; (2)Mid tokens, which achieve a massive spatiotemporal compression (32x token reduction) via adual-branch networkfusingprogressive 3D convolutionswithlow-resolution VAE re-encoding; and (3)Recent tokens, kept at full resolution to ensure local temporal coherence. To strictly bound the memory footprint without sacrificing quality, we introduce adynamic top-k context selectionmechanism for themid tokens, coupled with a continuousTemporal RoPE Adjustmentthat seamlessly re-aligns position gaps caused by dropped tokens with negligible overhead. Empowered by this principledhierarchical context compression, PackForcing can generate coherent 2-minute, 832x480 videos at 16 FPS on a single H200 GPU. It achieves a bounded KV cache of just 4 GB and enables a remarkable 24xtemporal extrapolation(5s to 120s), operating effectively either zero-shot or trained on merely 5-second clips. Extensive results onVBenchdemonstrate state-of-the-art temporal consistency (26.07) and dynamic degree (56.25), proving that short-video supervision is sufficient for high-quality, long-video synthesis. https://github.com/ShandaAI/PackForcing",
      "github_url": "https://github.com/ShandaAI/PackForcing",
      "org_tag": "Shanda AI Research Tokyo",
      "dimension": "efficiency",
      "tech_core": "它把长视频历史切成锚点、压缩记忆和最近上下文三层来存，像剪视频素材库一样，只保留真正该保真的部分。",
      "value": "适合长视频生成、长上下文视频理解和实时渲染，解决 KV cache 爆炸、越生成越重复、显存先崩的问题。",
      "pm_suggestion": "如果你的视频产品想上长时长，先上分层上下文压缩，不然成本和延迟会直接把商业模型压垮。"
    },
    {
      "id": 15,
      "title": "VGGRPO: Towards World-Consistent Video Generation with 4D Latent Reward",
      "url": "https://huggingface.co/papers/2603.26599",
      "likes": 44,
      "date": "2026-04-02",
      "published_date": "Mar 27",
      "abstract": "Large-scalevideo diffusion modelsachieve impressive visual quality, yet often fail to preserve geometric consistency. Prior approaches improve consistency either by augmenting the generator with additional modules or applying geometry-aware alignment. However, architectural modifications can compromise the generalization of internet-scale pretrained models, while existing alignment methods are limited to static scenes and rely on RGB-space rewards that require repeated VAE decoding, incurring substantial compute overhead and failing to generalize to highly dynamic real-world scenes. To preserve the pretrained capacity while improving geometric consistency, we propose VGGRPO (Visual Geometry GRPO), a latent geometry-guided framework for geometry-aware video post-training. VGGRPO introduces aLatent Geometry Model(LGM) that stitches video diffusion latents togeometry foundation models, enabling direct decoding of scene geometry from thelatent space. By constructing LGM from a geometry model with4D reconstructioncapability, VGGRPO naturally extends to dynamic scenes, overcoming the static-scene limitations of prior methods. Building on this, we perform latent-spaceGroup Relative Policy Optimizationwith two complementary rewards: acamera motion smoothnessreward that penalizes jittery trajectories, and ageometry reprojection consistencyreward that enforces cross-view geometric coherence. Experiments on both static and dynamic benchmarks show that VGGRPO improves camera stability, geometry consistency, and overall quality while eliminating costly VAE decoding, making latent-space geometry-guided reinforcement an efficient and flexible approach toworld-consistent video generation.",
      "github_url": null,
      "org_tag": "Google",
      "dimension": "multimodal",
      "tech_core": "它不是只盯着每帧漂不漂亮，而是在 latent 空间里直接奖励几何一致性，相当于边拍边纠正镜头运动和空间结构。",
      "value": "适合影视预演、3D 内容生成和世界一致性要求高的视频场景，解决视频好看但空间关系乱、镜头抖、物体变形的问题。",
      "pm_suggestion": "如果你在做视频生成，下一阶段别只卷审美分，要把几何一致性当核心 KPI；否则高端场景根本进不去。"
    },
    {
      "id": 16,
      "title": "MiroEval: Benchmarking Multimodal Deep Research Agents in Process and Outcome",
      "url": "https://huggingface.co/papers/2603.28407",
      "likes": 43,
      "date": "2026-04-02",
      "published_date": "Mar 30",
      "abstract": "Recent progress indeep research systemshas been impressive, but evaluation still lags behindreal user needs. Existing benchmarks predominantly assess final reports using fixed rubrics, failing to evaluate the underlying research process. Most also offer limitedmultimodal coverage, rely on synthetic tasks that do not reflect real-world query complexity, and cannot be refreshed as knowledge evolves. To address these gaps, we introduce MiroEval, a benchmark andevaluation frameworkfordeep research systems. The benchmark comprises 100 tasks (70 text-only, 30 multimodal), all grounded inreal user needsand constructed via adual-path pipelinethat supports periodic updates, enabling a live and evolving setting. The proposed evaluation suite assessesdeep research systemsalong three complementary dimensions:adaptive synthesis quality evaluationwith task-specific rubrics,agentic factuality verificationvia active retrieval and reasoning over both web sources and multimodal attachments, andprocess-centric evaluationaudits how the system searches, reasons, and refines throughout its investigation. Evaluation across 13 systems yields three principal findings: the three evaluation dimensions capture complementary aspects of system capability, with each revealing distinct strengths and weaknesses across systems; process quality serves as a reliable predictor of overall outcome while revealing weaknesses invisible to output-level metrics; and multimodal tasks pose substantially greater challenges, with most systems declining by 3 to 10 points. The MiroThinker series achieves the most balanced performance, with MiroThinker-H1 ranking the highest overall in both settings. Human verification and robustness results confirm the reliability of the benchmark andevaluation framework. MiroEval provides a holistic diagnostic tool for the next generation ofdeep research agents.",
      "github_url": "https://github.com/MiroMindAI/MiroEval",
      "org_tag": "MiroMind AI",
      "dimension": "safety",
      "tech_core": "它评估深研究 Agent 不只看最后报告，而是把搜索、核验、推理过程一起审，像从查成绩单改成全程看考试录像。",
      "value": "适合研究型助手、情报分析和多模态问答产品，解决最终答案看着不错，但过程偷懒、乱搜、乱引的问题。",
      "pm_suggestion": "如果你卖 deep research，立刻补过程级评测；只晒最终答卷分数，客户迟早会发现系统其实不会研究。"
    },
    {
      "id": 17,
      "title": "Trace2Skill: Distill Trajectory-Local Lessons into Transferable Agent Skills",
      "url": "https://huggingface.co/papers/2603.25158",
      "likes": 43,
      "date": "2026-04-02",
      "published_date": "Mar 26",
      "abstract": "Equipping Large Language Model (LLM) agents with domain-specific skills is critical for tackling complex tasks. Yet, manual authoring creates a severe scalability bottleneck. Conversely, automatedskill generationoften yields fragile or fragmented results because it either relies on shallow parametric knowledge or sequentially overfits to non-generalizable trajectory-local lessons. To overcome this, we introduce Trace2Skill, a framework that mirrors how human experts author skills: by holistically analyzing broad execution experience before distilling it into a single, comprehensive guide. Instead of reacting sequentially to individual trajectories, Trace2Skill dispatches a parallel fleet of sub-agents to analyze a diverse pool of executions. It extracts trajectory-specific lessons and hierarchically consolidates them into a unified, conflict-free skill directory viainductive reasoning. Trace2Skill supports both deepening existing human-written skills and creating new ones from scratch. Experiments in challenging domains, such as spreadsheet, VisionQA and math reasoning, show that Trace2Skill significantly improves upon strong baselines, including Anthropic's official xlsx skills. Crucially, this trajectory-grounded evolution does not merely memorize task instances or model-specific quirks: evolved skills transfer across LLM scales and generalize to OOD settings. For example, skills evolved by Qwen3.5-35B on its own trajectories improved a Qwen3.5-122B agent by up to 57.65 absolute percentage points on WikiTableQuestions. Ultimately, our results demonstrate that complex agent experience can be packaged into highly transferable,declarative skills-- requiring no parameter updates, no external retrieval modules, and utilizing open-source models as small as 35B parameters.",
      "github_url": null,
      "org_tag": null,
      "dimension": "action",
      "tech_core": "它把大量 agent 轨迹里的局部经验先并行分析，再浓缩成可迁移的技能文档，相当于把实习生踩过的坑整理成标准作业手册。",
      "value": "适合企业内部 Agent、行业 Copilot 和复杂流程自动化，解决技能靠人工手写、更新慢、换模型就失效的问题。",
      "pm_suggestion": "如果你已经积累了一堆执行日志，别只拿来做评测，立刻把它们蒸馏成技能库；这是让 Agent 越用越值钱的关键资产。"
    },
    {
      "id": 18,
      "title": "EpochX: Building the Infrastructure for an Emergent Agent Civilization",
      "url": "https://huggingface.co/papers/2603.27304",
      "likes": 41,
      "date": "2026-04-02",
      "published_date": "Mar 28",
      "abstract": "General-purposetechnologiesreshapeeconomieslessbyimprovingindividualtoolsthanbyenablingnewwaystoorganizeproductionandcoordination.WebelieveAIagentsareapproachingasimilarinflectionpoint:asfoundationmodelsmakebroadtaskexecutionandtooluseincreasinglyaccessible,thebindingconstraintshiftsfromrawcapabilitytohowworkisdelegated,verified,andrewardedatscale.WeintroduceEpochX,acredits-nativemarketplaceinfrastructureforhuman-agentproductionnetworks.EpochXtreatshumansandagentsaspeerparticipantswhocanposttasksorclaimthem.Claimedtaskscanbedecomposedintosubtasksandexecutedthroughanexplicitdeliveryworkflowwithverificationandacceptance.Crucially,EpochXisdesignedsothateachcompletedtransactioncanproducereusableecosystemassets,includingskills,workflows,executiontraces,anddistilledexperience.Theseassetsarestoredwithexplicitdependencystructure,enablingretrieval,composition,andcumulativeimprovementovertime.EpochXalsointroducesanativecreditmechanismtomakeparticipationeconomicallyviableunderrealcomputecosts.Creditslocktaskbounties,budgetdelegation,settlerewardsuponacceptance,andcompensatecreatorswhenverifiedassetsarereused.Byformalizingtheend-to-endtransactionmodeltogetherwithitsassetandincentivelayers,EpochXreframesagenticAIasanorganizationaldesignproblem:buildinginfrastructureswhereverifiableworkleavespersistent,reusableartifacts,andwherevalueflowssupportdurablehuman-agentcollaboration.",
      "github_url": "https://github.com/QuantaAlpha/EpochX",
      "org_tag": "QuantaAlpha",
      "dimension": "action",
      "tech_core": "它把 agent 协作当成一个可结算的生产网络来设计：任务可拆、结果可验、资产可复用、贡献能分账。",
      "value": "适合众包式 AI 生产、开放平台和 agent marketplace，解决任务做完即蒸发、经验不能复用、协作无法结算的问题。",
      "pm_suggestion": "如果你想做 Agent 平台，别只做任务广场，必须把验证、复用资产和激励结算一起设计进去，不然网络效应起不来。"
    },
    {
      "id": 19,
      "title": "Unify-Agent: A Unified Multimodal Agent for World-Grounded Image Synthesis",
      "url": "https://huggingface.co/papers/2603.29620",
      "likes": 37,
      "date": "2026-04-02",
      "published_date": "Mar 31",
      "abstract": "Unified multimodal modelsprovide a natural and promising architecture for understanding diverse and complex real-world knowledge while generating high-quality images. However, they still rely primarily on frozen parametric knowledge, which makes them struggle with real-world image generation involving long-tail and knowledge-intensive concepts. Inspired by the broad success of agents on real-world tasks, we exploreagentic modelingto address this limitation. Specifically, we present Unify-Agent, a unified multimodal agent forworld-grounded image synthesis, which reframes image generation as an agentic pipeline consisting ofprompt understanding,multimodal evidence searching,grounded recaptioning, and final synthesis. To train our model, we construct a tailored multimodal data pipeline and curate 143K high-qualityagent trajectoriesforworld-grounded image synthesis, enabling effective supervision over the full agentic generation process. We further introduceFactIP, a benchmark covering 12 categories of culturally significant and long-tail factual concepts that explicitly requires external knowledge grounding. Extensive experiments show that our proposed Unify-Agent substantially improves over its base unified model across diverse benchmarks and real world generation tasks, while approaching the world knowledge capabilities of the strongestclosed-source models. As an early exploration of agent-based modeling forworld-grounded image synthesis, our work highlights the value of tightly coupling reasoning, searching, and generation for reliable open-world agentic image synthesis.",
      "github_url": "https://github.com/shawn0728/Unify-Agent",
      "org_tag": "Tencent Hunyuan",
      "dimension": "action",
      "tech_core": "它把世界知识搜集、图文理解、重写描述和出图放进同一条 agent 流程里，让模型先查清楚再画，而不是凭记忆硬编。",
      "value": "适合旅游、文化、教育和品牌内容生成，解决长尾事实型图像生成容易画错、看似高级其实不可信的问题。",
      "pm_suggestion": "如果你的图片产品面向真实世界内容，把“检索-核实-生成”做成默认链路；这会比单纯提升画质更能拉开差距。"
    },
    {
      "id": 20,
      "title": "Terminal Agents Suffice for Enterprise Automation",
      "url": "https://huggingface.co/papers/2604.00073",
      "likes": 34,
      "date": "2026-04-02",
      "published_date": "Mar 31",
      "abstract": "There has been growing interest in building agents that can interact with digital platforms to execute meaningful enterprise tasks autonomously. Among the approaches explored aretool-augmented agentsbuilt on abstractions such asModel Context Protocol(MCP) andweb agentsthat operate through graphical interfaces. Yet, it remains unclear whether such complex agentic systems are necessary given their cost and operational overhead. We argue that a coding agent equipped only with a terminal and a filesystem can solve many enterprise tasks more effectively by interacting directly with platform APIs. We evaluate this hypothesis across diverse real-world systems and show that these low-level terminal agents match or outperform more complex agent architectures. Our findings suggest that simple programmatic interfaces, combined with strongfoundation models, are sufficient for practicalenterprise automation.",
      "github_url": null,
      "org_tag": "ServiceNow-AI",
      "dimension": "action",
      "tech_core": "它证明很多企业自动化根本不需要花里胡哨的 GUI agent，一个会写脚本、能读文件、直连 API 的终端 agent 就够打了。",
      "value": "适合内部系统集成、工单处理、报表生成和运维自动化，解决浏览器 agent 成本高、脆弱、维护难的问题。",
      "pm_suggestion": "如果你在做企业 Agent，先砍掉一半 GUI 操作链路，优先走 API 和终端；能稳定赚钱的往往不是最像人操作电脑的方案。"
    }
  ],
  "opportunities": {
    "strategies": [
      {
        "icon": "💰",
        "title": "企业 Agent 的现金牛不在 GUI，而在可验证执行",
        "type": "cashcow",
        "action": "别再把资源主要砸在“像人点网页”上了。企业真正愿意付费的是 API/终端直连、技能沉淀、结果可验收的执行栈；先做这层，收入会比花哨交互来得更快更稳。",
        "relatedPapers": [
          10,
          17,
          18,
          20
        ]
      },
      {
        "icon": "🏋️",
        "title": "长推理和长视频的成本控制已经是基础设施战",
        "type": "efficiency",
        "action": "不要再把长链路任务当成算力硬扛的问题。speculative decoding、过程奖励、分层上下文压缩、流式生成都该进主线；谁先把成本打下来，谁才有资格谈规模化。",
        "relatedPapers": [
          1,
          6,
          14,
          4
        ]
      },
      {
        "icon": "🌊",
        "title": "有世界知识的多模态生成，会变成下一代内容入口",
        "type": "blueocean",
        "action": "下一波创作产品不该只会“生成”，而要先检索、核实、理解，再出图出视频。现在做“有事实依据的创作 Copilot”还有明显窗口期，晚了就只能卷模型同质化。",
        "relatedPapers": [
          7,
          11,
          15,
          19
        ]
      }
    ],
    "newProducts": [
      {
        "icon": "🆕",
        "title": "Agent Execution Console",
        "description": "面向企业自动化的执行控制台：任务拆解、技能装载、终端/API 执行、交付验收、风险回放全放在一个界面里。它不是聊天框，而是给业务团队管一支数字操作员。",
        "scenes": [
          "内部运维",
          "财务与报表自动化",
          "工单与运营流程"
        ],
        "relatedPapers": [
          10,
          17,
          18,
          20
        ]
      },
      {
        "icon": "🆕",
        "title": "Grounded Creative Studio",
        "description": "一个先查证再生成的创作工作台：自动搜索世界知识、拉取参考图、重写提示词，再统一生成图片或视频。卖点不是更炫，而是更少事实错误。",
        "scenes": [
          "品牌营销",
          "新闻与内容团队",
          "文旅与教育内容"
        ],
        "relatedPapers": [
          11,
          15,
          19,
          7
        ]
      },
      {
        "icon": "🆕",
        "title": "Research QA Copilot",
        "description": "给研究和情报团队的深研究副驾：能持续检索、标注证据、审计过程、输出结构化结论，不再只给一段“看起来很对”的最终答案。",
        "scenes": [
          "行业研究",
          "医疗情报",
          "投资与战略分析"
        ],
        "relatedPapers": [
          1,
          8,
          16,
          3
        ]
      },
      {
        "icon": "🆕",
        "title": "Embodied Simulation Cloud",
        "description": "把空地协同、世界模型和虚拟实验统一到云端仿真平台里，支持训练、回放、评测和数据生成。硬件没到位前，先把软件世界跑顺。",
        "scenes": [
          "低空经济",
          "机器人研发",
          "AI for Science 仿真实验"
        ],
        "relatedPapers": [
          2,
          5,
          9
        ]
      }
    ]
  }
};
