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
      "title": "CARLA-Air: Fly Drones Inside a CARLA World -- A Unified Infrastructure for Air-Ground Embodied Intelligence",
      "url": "https://huggingface.co/papers/2603.28032",
      "likes": 331,
      "date": "2026-04-05",
      "published_date": "Mar 30",
      "abstract": "The convergence of low-altitude economies,embodied intelligence, and air-ground cooperative systems creates growing demand for simulation infrastructure capable of jointly modeling aerial and ground agents within a single physically coherent environment. Existing open-source platforms remain domain-segregated: driving simulators lack aerial dynamics, while multirotor simulators lack realistic ground scenes. Bridge-basedco-simulationintroduces synchronization overhead and cannot guarantee strict spatial-temporal consistency.\n  We presentCARLA-Air, an open-source infrastructure that unifies high-fidelity urban driving andphysics-accuratemultirotor flight within a singleUnreal Engineprocess. The platform preserves bothCARLAandAirSimnative Python APIs andROS 2interfaces, enabling zero-modification code reuse. Within a shared physics tick and rendering pipeline,CARLA-Air delivers photorealistic environments with rule-compliant traffic, socially-aware pedestrians, and aerodynamically consistent UAV dynamics, synchronously capturing up to 18sensor modalitiesacross all platforms at each tick. The platform supports representative air-groundembodied intelligenceworkloads spanning cooperation, embodied navigation and vision-language action, multi-modal perception and dataset construction, andreinforcement-learning-based policy training. An extensible asset pipeline allows integration of custom robot platforms into the shared world. By inheritingAirSim's aerial capabilities -- whose upstream development has been archived --CARLA-Air ensures this widely adopted flight stack continues to evolve within a modern infrastructure.\n  Released with prebuilt binaries and full source: https://github.com/louiszengCN/CarlaAir",
      "github_url": "https://github.com/louiszengCN/CarlaAir",
      "org_tag": null,
      "dimension": "robotics",
      "tech_core": "把无人机飞行、地面车辆、行人和多传感器采集塞进同一个物理一致的仿真世界里，相当于给空地协同团队建了一座不用来回拼接的统一训练城市场景。",
      "value": "适合低空物流、城市巡检、应急安防和空地协同机器人，解决过去车用仿真和飞行仿真各玩各的、数据不同步、代码重复接线的痛点。",
      "pm_suggestion": "如果你在做低空经济或具身智能，立刻把训练环境从“双仿真拼桥”切到统一世界；评测口径一旦统一，算法迭代速度会直接上一个台阶。"
    },
    {
      "id": 2,
      "title": "FIPO: Eliciting Deep Reasoning with Future-KL Influenced Policy Optimization",
      "url": "https://huggingface.co/papers/2603.19835",
      "likes": 313,
      "date": "2026-04-05",
      "published_date": "Mar 20",
      "abstract": "We present Future-KL InfluencedPolicy Optimization(FIPO), areinforcement learningalgorithm designed to overcome reasoning bottlenecks in large language models. While GRPO style training scales effectively, it typically relies on outcome-based rewards (ORM) that distribute a global advantage uniformly across every token in a trajectory. We argue that this coarse-grained credit assignment imposes a performance ceiling by failing to distinguish critical logical pivots from trivial tokens. FIPO addresses this by incorporatingdiscounted future-KL divergenceinto thepolicy update, creating adense advantage formulationthat re-weights tokens based on their influence on subsequent trajectory behavior. Empirically, FIPO enables models to break through the length stagnation seen in standard baselines. Evaluated on Qwen2.5-32B, FIPO extends the average chain-of-thought length from roughly 4,000 to over 10,000 tokens and increasesAIME 2024Pass@1 accuracyfrom 50.0% to a peak of 58.0% (converging at approximately 56.0\\%). This outperforms both DeepSeek-R1-Zero-Math-32B (around 47.0%) and o1-mini (approximately 56.0%). Our results suggest that establishingdense advantage formulations is a vital path for evolving ORM-based algorithms to unlock the full reasoning potential of base models. We open-source our training system, built on the verl framework.",
      "github_url": "https://github.com/qwenpilot/FIPO",
      "org_tag": "Qwen",
      "dimension": "understanding",
      "tech_core": "它不再只按最终答对没答对来训练推理，而是给推理链里真正改变后续走向的关键 token 更高权重，相当于给模型装了一个只盯关键拐点的教练。",
      "value": "适合数学推理、代码生成、深研究问答这类长链条任务，解决模型会起步但推理中途塌掉、答案偶尔对却过程不稳的问题。",
      "pm_suggestion": "如果你的产品卖点是深度推理，别再只刷结果奖励了，立刻验证这种过程级 credit assignment；长任务稳定性比多提两分 benchmark 更值钱。"
    },
    {
      "id": 3,
      "title": "ClawKeeper: Comprehensive Safety Protection for OpenClaw Agents Through Skills, Plugins, and Watchers",
      "url": "https://huggingface.co/papers/2603.24414",
      "likes": 175,
      "date": "2026-04-05",
      "published_date": "Mar 25",
      "abstract": "OpenClaw has rapidly established itself as a leading open-sourceautonomous agent runtime, offering powerful capabilities includingtool integration,local file access, andshell command execution. However, these broad operational privileges introduce criticalsecurity vulnerabilities, transforming model errors into tangible system-level threats such as sensitive data leakage,privilege escalation, andmalicious third-party skill execution. Existing security measures for the OpenClaw ecosystem remain highly fragmented, addressing only isolated stages of the agent lifecycle rather than providing holistic protection. To bridge this gap, we present ClawKeeper, a real-timesecurity frameworkthat integratesmulti-dimensional protection mechanismsacross three complementary architectural layers. (1) Skill-based protection operates at theinstruction level, injectingstructured security policiesdirectly into the agent context to enforceenvironment-specific constraintsandcross-platform boundaries. (2) Plugin-based protection serves as aninternal runtime enforcer, providingconfiguration hardening,proactive threat detection, andcontinuous behavioral monitoringthroughout theexecution pipeline. (3) Watcher-based protection introduces a novel,decoupled system-level security middlewarethat continuously verifies agent state evolution. It enablesreal-time execution interventionwithout coupling to the agent's internal logic, supporting operations such as haltinghigh-risk actionsor enforcinghuman confirmation. We argue that thisWatcher paradigmholds strong potential to serve as afoundational building blockfor securing next-generation autonomous agent systems. Extensive qualitative and quantitative evaluations demonstrate the effectiveness and robustness of ClawKeeper across diverse threat scenarios. We release our code.",
      "github_url": "https://github.com/SafeAI-Lab-X/ClawKeeper",
      "org_tag": null,
      "dimension": "safety",
      "tech_core": "它把 Agent 安全做成三层联防：提示词里先立规矩，运行时里持续拦截，系统外再放观察哨随时叫停，像同时配了制度、风控引擎和应急刹车。",
      "value": "适合任何能读文件、跑命令、调外部工具的 Agent 平台，解决单点防护挡不住高权限 Agent 越权、泄密和第三方技能投毒的问题。",
      "pm_suggestion": "如果你的 Agent 已经碰生产数据，把安全从“回复前提醒一句”升级成三层防线；没有独立 watcher 的系统，不要对外卖自动执行。"
    },
    {
      "id": 4,
      "title": "ShotStream: Streaming Multi-Shot Video Generation for Interactive Storytelling",
      "url": "https://huggingface.co/papers/2603.25746",
      "likes": 153,
      "date": "2026-04-05",
      "published_date": "Mar 26",
      "abstract": "Multi-shot video generationis crucial for long narrative storytelling, yet current bidirectional architectures suffer from limited interactivity and high latency. We propose ShotStream, a novel causal multi-shot architecture that enables interactive storytelling and efficient on-the-fly frame generation. By reformulating the task asnext-shot generationconditioned on historical context, ShotStream allows users to dynamically instruct ongoing narratives via streaming prompts. We achieve this by first fine-tuning atext-to-video modelinto a bidirectional next-shot generator, which is then distilled into a causal student viaDistribution Matching Distillation. To overcome the challenges ofinter-shot consistencyanderror accumulationinherent inautoregressive generation, we introduce two key innovations. First, adual-cache memory mechanismpreserves visual coherence: aglobal context cacheretains conditional frames forinter-shot consistency, while alocal context cacheholds generated frames within the current shot forintra-shot consistency. And aRoPE discontinuity indicatoris employed to explicitly distinguish the two caches to eliminate ambiguity. Second, to mitigateerror accumulation, we propose atwo-stage distillationstrategy. This begins with intra-shotself-forcingconditioned on ground-truth historical shots and progressively extends to inter-shotself-forcingusing self-generated histories, effectively bridging thetrain-test gap. Extensive experiments demonstrate that ShotStream generates coherent multi-shot videos with sub-second latency, achieving 16 FPS on a single GPU. It matches or exceeds the quality of slower bidirectional models, paving the way for real-time interactive storytelling. Training and inference code, as well as the models, are available on our",
      "github_url": "https://github.com/KlingAIResearch/ShotStream",
      "org_tag": null,
      "dimension": "multimodal",
      "tech_core": "它把长视频生成改成一镜一镜实时续拍，并用全局记忆加局部记忆维持前后连贯，相当于让视频模型学会边拍边接导演口令。",
      "value": "适合互动短剧、游戏剧情、直播式内容创作，解决长视频生成延迟高、镜头前后人物风格漂移、用户没法中途改剧情的问题。",
      "pm_suggestion": "如果你做 AI 视频，立刻把“流式续写+中途插指令”列为主线需求；继续只卷单镜头画质，只会把产品做成一次性玩具。"
    },
    {
      "id": 5,
      "title": "DataFlex: A Unified Framework for Data-Centric Dynamic Training of Large Language Models",
      "url": "https://huggingface.co/papers/2603.26164",
      "likes": 152,
      "date": "2026-04-05",
      "published_date": "Mar 27",
      "abstract": "Data-centric traininghas emerged as a promising direction for improvinglarge language models(LLMs) by optimizing not only model parameters but also the selection, composition, and weighting of training data during optimization. However, existing approaches to data selection, data mixture optimization, and data reweighting are often developed in isolated codebases with inconsistent interfaces, hindering reproducibility, fair comparison, and practical integration. In this paper, we present DataFlex, a unified data-centric dynamic training framework built uponLLaMA-Factory. DataFlex supports three major paradigms of dynamic data optimization:sample selection,domain mixture adjustment, andsample reweighting, while remaining fully compatible with the original training workflow. It providesextensible trainer abstractionsandmodular components, enabling a drop-in replacement for standard LLM training, and unifies key model-dependent operations such asembedding extraction, inference, andgradient computation, with support for large-scale settings includingDeepSpeed ZeRO-3. We conduct comprehensive experiments across multiple data-centric methods. Dynamic data selection consistently outperforms static full-data training onMMLUacross both Mistral-7B and Llama-3.2-3B. For data mixture, DoReMi and ODM improve bothMMLUaccuracy and corpus-levelperplexityover default proportions when pretrainingQwen2.5-1.5BonSlimPajamaat 6B and 30B token scales. DataFlex also achieves consistent runtime improvements over original implementations. These results demonstrate that DataFlex provides an effective, efficient, and reproducible infrastructure for data-centric dynamic training of LLMs.",
      "github_url": "https://github.com/OpenDCAI/DataFlex",
      "org_tag": "Peking University",
      "dimension": "efficiency",
      "tech_core": "它把数据选择、配比和重加权这三套训练调参活统一成一个框架，相当于给大模型训练加了数据调度台，不再靠人手工反复试配方。",
      "value": "适合基础模型团队和行业模型微调团队，解决训练数据策略散落在不同代码库、难复现、难比较、算力花了却不知道哪份数据真的有用的问题。",
      "pm_suggestion": "如果你还在按经验混训练数据，立刻把数据配方管理产品化；下一轮模型差距，很多会输在数据调度而不是参数规模。"
    },
    {
      "id": 6,
      "title": "Out of Sight but Not Out of Mind: Hybrid Memory for Dynamic Video World Models",
      "url": "https://huggingface.co/papers/2603.25716",
      "likes": 151,
      "date": "2026-04-05",
      "published_date": "Mar 26",
      "abstract": "Video world modelshave shown immense potential in simulating the physical world, yet existing memory mechanisms primarily treat environments as static canvases. Whendynamic subjectshide out of sight and later re-emerge, current methods often struggle, leading to frozen, distorted, or vanishing subjects. To address this, we introduceHybrid Memory, a novel paradigm requiring models to simultaneously act as precise archivists forstatic backgroundsand vigilant trackers fordynamic subjects, ensuringmotion continuityduring out-of-view intervals. To facilitate research in this direction, we construct HM-World, the first large-scale video dataset dedicated tohybrid memory. It features 59K high-fidelity clips with decoupled camera and subject trajectories, encompassing 17 diverse scenes, 49 distinct subjects, and meticulously designed exit-entry events to rigorously evaluate hybrid coherence. Furthermore, we propose HyDRA, a specializedmemory architecturethat compresses memory into tokens and utilizes aspatiotemporal relevance-driven retrievalmechanism. By selectively attending to relevant motion cues, HyDRA effectively preserves the identity and motion of hidden subjects. Extensive experiments on HM-World demonstrate that our method significantly outperforms state-of-the-art approaches in both dynamic subject consistency and overall generation quality.",
      "github_url": "https://github.com/H-EmbodVis/HyDRA",
      "org_tag": "H-EmbodVis",
      "dimension": "robotics",
      "tech_core": "它让视频世界模型同时记住静态背景和暂时消失的运动目标，像一个不会被遮挡骗过去的观察员，知道目标只是出画面了，不是蒸发了。",
      "value": "适合机器人导航、自动驾驶预测和具身仿真，解决目标被遮挡后轨迹断掉、重新出现时身份错乱、世界模型一遇动态场景就失真的问题。",
      "pm_suggestion": "如果你做世界模型，把“目标出视野后仍能连续追踪”设成硬门槛；连遮挡都扛不住的系统，不要急着谈真实环境部署。"
    },
    {
      "id": 7,
      "title": "TAPS: Task Aware Proposal Distributions for Speculative Sampling",
      "url": "https://huggingface.co/papers/2603.27027",
      "likes": 140,
      "date": "2026-04-05",
      "published_date": "Mar 27",
      "abstract": "Speculative decodingacceleratesautoregressive generationby letting a lightweightdraft modelpropose future tokens that a larger target model then verifies in parallel. In practice, however,draft models are usually trained on broad generic corpora, which leaves it unclear how muchspeculative decodingquality depends on the draft training distribution. We study this question with lightweightHASSandEAGLE-2drafters trained on MathInstruct, ShareGPT, and mixed-data variants, evaluated onMT-Bench,GSM8K,MATH-500, andSVAMP. Measured byacceptance length, task-specific training yields clear specialization: MathInstruct-trained drafts are strongest on reasoning benchmarks, while ShareGPT-trained drafts are strongest onMT-Bench. Mixed-data training improves robustness, but larger mixtures do not dominate across decoding temperatures. We also study how to combine specialized drafters at inference time. Naive checkpoint averaging performs poorly, whereasconfidence-based routingimproves over single-domain drafts andmerged-tree verificationyields the highestacceptance lengthoverall for both backbones. Finally, confidence is a more useful routing signal thanentropy: rejected tokens tend to have higherentropy, but confidence produces much clearer benchmark-level routing decisions. These results show thatspeculative decodingquality depends not only on draft architecture, but also on the match between draft training data and downstream workload, and that specialized drafters are better combined at inference time than in weight space.",
      "github_url": "https://github.com/Moe-Zbeeb/TAPS",
      "org_tag": "Image and Video Understanding Lab",
      "dimension": "efficiency",
      "tech_core": "它证明 speculative decoding 不能只靠一个通用小模型硬扛所有任务，而该按任务把请求分给更擅长的草稿模型，再让大模型统一验收。",
      "value": "适合同时跑聊天、推理、数学和代码业务的平台，解决同一套加速方案在不同工作负载下忽快忽慢、吞吐涨了但质量掉得厉害的问题。",
      "pm_suggestion": "如果你已经在做推理加速，立刻把单一 drafter 改成任务路由；这比继续死磕底层 kernel 更快带来可见的成本下降。"
    },
    {
      "id": 8,
      "title": "LongCat-Next: Lexicalizing Modalities as Discrete Tokens",
      "url": "https://huggingface.co/papers/2603.27538",
      "likes": 132,
      "date": "2026-04-05",
      "published_date": "Mar 29",
      "abstract": "The prevailingNext-Token Prediction(NTP) paradigm has driven the success of large language models through discreteautoregressive modeling. However, contemporarymultimodal systemsremain language-centric, often treating non-linguistic modalities as external attachments, leading to fragmented architectures and suboptimal integration. To transcend this limitation, we introduce Discrete Native Autoregressive (DiNA), a unified framework that represents multimodal information within a shareddiscrete space, enabling a consistent and principledautoregressive modelingacross modalities. A key innovation is theDiscrete Native Any-resolution Visual Transformer(dNaViT), which performstokenizationandde-tokenizationat arbitrary resolutions, transforming continuous visual signals into hierarchical discrete tokens. Building on this foundation, we developLongCat-Next, a native multimodal model that processes text, vision, and audio under a single autoregressive objective with minimal modality-specific design. As an industrial-strength foundation model, it excels at seeing, painting, and talking within a single framework, achieving strong performance across a wide range of multimodal benchmarks. In particular,LongCat-Nextaddresses the long-standing performance ceiling of discrete vision modeling on understanding tasks and provides a unified approach to effectively reconcile the conflict between understanding and generation. As an attempt toward native multimodality, we open-source theLongCat-Nextand its tokenizers, hoping to foster further research and development in the community. GitHub: https://github.com/meituan-longcat/LongCat-Next",
      "github_url": "https://github.com/meituan-longcat/LongCat-Next",
      "org_tag": "LongCat",
      "dimension": "multimodal",
      "tech_core": "它把图像和音频也压成像文字一样可连续生成的离散 token，让模型真正用一套语法同时看、说、画，而不是外挂几个互相别扭的模态插件。",
      "value": "适合做统一多模态底座、内容理解和内容生成平台，解决理解模型和生成模型分家、能力扩展靠堆适配器、维护成本越来越高的问题。",
      "pm_suggestion": "如果你要做长期多模态平台，别再迷恋补丁式多塔结构，优先押注原生统一 token 架构；未来扩展新模态时会少还很多技术债。"
    },
    {
      "id": 9,
      "title": "The Latent Space: Foundation, Evolution, Mechanism, Ability, and Outlook",
      "url": "https://huggingface.co/papers/2604.02029",
      "likes": 115,
      "date": "2026-04-05",
      "published_date": "Apr 2",
      "abstract": "Latent spaceis rapidly emerging as a native substrate forlanguage-based models. While modern systems are still commonly understood through explicit token-level generation, an increasing body of work shows that many critical internal processes are more naturally carried out incontinuous latent spacethan in human-readableverbal traces. This shift is driven by thestructural limitationsof explicit-spacecomputation, including linguistic redundancy,discretization bottlenecks,sequential inefficiency, andsemantic loss. This survey aims to provide a unified and up-to-date landscape oflatent spaceinlanguage-based models. We organize the survey into five sequential perspectives: Foundation, Evolution, Mechanism, Ability, and Outlook. We begin by delineating the scope oflatent space, distinguishing it from explicit or verbal space and from thelatent spacescommonly studied ingenerative visual models. We then trace the field's evolution from early exploratory efforts to the current large-scale expansion. To organize the technical landscape, we examine existing work through the complementary lenses of mechanism and ability. From the perspective of Mechanism, we identify four major lines of development:Architecture,Representation,Computation, andOptimization. From the perspective of Ability, we show howlatent spacesupports a broad capability spectrum spanningReasoning,Planning,Modeling,Perception,Memory,Collaboration, andEmbodiment. Beyond consolidation, we discuss the key open challenges, and outline promising directions for future research. We hope this survey serves not only as a reference for existing work, but also as a foundation for understandinglatent spaceas a generalcomputational and systems paradigm for next-generation intelligence.",
      "github_url": "https://github.com/YU-deep/Awesome-Latent-Space",
      "org_tag": null,
      "dimension": "understanding",
      "tech_core": "这篇综述的核心判断是：很多高级能力其实更适合在连续潜空间里算，而不是每一步都翻译成人类可读文字，等于提醒大家别把“会说出来”误当成“会思考”。",
      "value": "适合推理模型、规划模型和下一代基础模型路线设计，帮助团队重新理解为什么显式 CoT 会慢、会冗余、也会限制更深层计算。",
      "pm_suggestion": "如果你在规划下一代模型路线，把 latent computation 列入核心研究线；继续只围着可见 token 做优化，天花板会越来越明显。"
    },
    {
      "id": 10,
      "title": "Generative World Renderer",
      "url": "https://huggingface.co/papers/2604.02329",
      "likes": 86,
      "date": "2026-04-05",
      "published_date": "Apr 2",
      "abstract": "Scaling generative inverse andforward renderingto real-world scenarios is bottlenecked by the limited realism and temporal coherence of existing synthetic datasets. To bridge this persistent domain gap, we introduce a large-scale, dynamic dataset curated from visually complex AAA games. Using a novel dual-screen stitched capture method, we extracted 4M continuous frames (720p/30 FPS) of synchronized RGB and fiveG-bufferchannels across diverse scenes, visual effects, and environments, including adverse weather and motion-blur variants. This dataset uniquely advances bidirectional rendering: enabling robust in-the-wild geometry and material decomposition, and facilitating high-fidelityG-buffer-guided video generation. Furthermore, to evaluate the real-world performance ofinverse renderingwithout ground truth, we propose a novelVLM-based assessmentprotocol measuring semantic, spatial, andtemporal consistency. Experiments demonstrate that inverse renderers fine-tuned on our data achieve superiorcross-dataset generalizationand controllable generation, while our VLM evaluation strongly correlates with human judgment. Combined with our toolkit, our forward renderer enables users to edit styles of AAA games fromG-buffers using text prompts.",
      "github_url": "https://github.com/ShandaAI/AlayaRenderer",
      "org_tag": "Shanda AI Research Tokyo",
      "dimension": "multimodal",
      "tech_core": "它从 AAA 游戏里大规模抽取带几何和材质缓冲的信息，把现实难采的渲染监督信号批量做出来，相当于给视频生成和逆渲染造了一座高质量数据矿。",
      "value": "适合 3D 内容生成、可控视频编辑和逆渲染团队，解决真实世界标注难、时序不稳定、训练数据不够丰富导致模型一到复杂场景就翻车的问题。",
      "pm_suggestion": "如果你做可控视频或 3D 生成，立刻把游戏数据纳入主数据源；在真实数据永远稀缺的赛道，能稳定造监督信号的人先拿优势。"
    },
    {
      "id": 11,
      "title": "Towards a Medical AI Scientist",
      "url": "https://huggingface.co/papers/2603.28589",
      "likes": 85,
      "date": "2026-04-05",
      "published_date": "Mar 30",
      "abstract": "Autonomous systems that generate scientific hypotheses, conduct experiments, and draft manuscripts have recently emerged as a promising paradigm for accelerating discovery. However, existing AI Scientists remain largely domain-agnostic, limiting their applicability to clinical medicine, where research is required to be grounded in medical evidence with specialized data modalities. In this work, we introduce Medical AI Scientist, the firstautonomous research frameworktailored toclinical autonomous research. It enables clinically grounded ideation by transforming extensively surveyed literature into actionable evidence throughclinician-engineer co-reasoning mechanism, which improves the traceability of generated research ideas. It further facilitatesevidence-grounded manuscript draftingguided bystructured medical compositional conventionsandethical policies. The framework operates under 3 research modes, namelypaper-based reproduction,literature-inspired innovation, andtask-driven exploration, each corresponding to a distinct level of automated scientific inquiry with progressively increasing autonomy. Comprehensive evaluations by bothlarge language modelsandhuman expertsdemonstrate that the ideas generated by the Medical AI Scientist are of substantially higher quality than those produced by commercial LLMs across 171 cases, 19 clinical tasks, and 6 data modalities. Meanwhile, our system achieves strong alignment between the proposed method and its implementation, while also demonstrating significantly higher success rates inexecutable experiments. Double-blind evaluations byhuman expertsand the Stanford Agentic Reviewer suggest that the generated manuscripts approachMICCAI-level quality, while consistently surpassing those fromISBIandBIBM. The proposed Medical AI Scientist highlights the potential of leveraging AI for autonomous scientific discovery in healthcare.",
      "github_url": null,
      "org_tag": null,
      "dimension": "action",
      "tech_core": "它不是一个泛化 AI Scientist，而是一条带医学证据约束的研究流水线：先把文献证据整理成可操作假设，再按临床写作和伦理规则生成实验与论文。",
      "value": "适合医药研发、临床研究辅助和医学情报团队，解决通用科研 Agent 不懂专业证据链、能写但写不扎实、实验建议难落地的问题。",
      "pm_suggestion": "如果你做医疗 AI，别卖“自动发论文”的幻觉，先把证据追溯、伦理约束和可执行实验三件事做成强功能，这才有机会进真实工作流。"
    },
    {
      "id": 12,
      "title": "Terminal Agents Suffice for Enterprise Automation",
      "url": "https://huggingface.co/papers/2604.00073",
      "likes": 83,
      "date": "2026-04-05",
      "published_date": "Mar 31",
      "abstract": "There has been growing interest in building agents that can interact with digital platforms to execute meaningful enterprise tasks autonomously. Among the approaches explored aretool-augmented agentsbuilt on abstractions such asModel Context Protocol(MCP) andweb agentsthat operate through graphical interfaces. Yet, it remains unclear whether such complex agentic systems are necessary given their cost and operational overhead. We argue that a coding agent equipped only with a terminal and a filesystem can solve many enterprise tasks more effectively by interacting directly with platform APIs. We evaluate this hypothesis across diverse real-world systems and show that these low-level terminal agents match or outperform more complex agent architectures. Our findings suggest that simple programmatic interfaces, combined with strongfoundation models, are sufficient for practicalenterprise automation.",
      "github_url": null,
      "org_tag": "ServiceNow-AI",
      "dimension": "action",
      "tech_core": "这篇论文的态度很直接：很多企业自动化根本不需要 GUI 花活，一个会写脚本、能读文件、能调 API 的终端 Agent 就足够高效。",
      "value": "适合 ERP、CRM、工单、运维和数据处理自动化，解决浏览器 Agent 脆弱、维护贵、步骤多、改版就坏的问题。",
      "pm_suggestion": "如果你在做企业 Agent，先砍掉一半浏览器操作链路，优先走 API 和终端；能稳定交付结果的方案，比“像人点网页”更容易卖出去。"
    },
    {
      "id": 13,
      "title": "SKILL0: In-Context Agentic Reinforcement Learning for Skill Internalization",
      "url": "https://huggingface.co/papers/2604.02268",
      "likes": 81,
      "date": "2026-04-05",
      "published_date": "Apr 2",
      "abstract": "Agent skills, structured packages of procedural knowledge and executable resources that agents dynamically load at inference time, have become a reliable mechanism for augmenting LLM agents. Yet inference-time skill augmentation is fundamentally limited: retrieval noise introduces irrelevant guidance, injected skill content imposes substantial token overhead, and the model never truly acquires the knowledge it merely follows. We ask whether skills can instead be internalized into model parameters, enabling zero-shot autonomous behavior without any runtime skill retrieval. We introduce SKILL0, anin-context reinforcement learningframework designed forskill internalization. SKILL0 introduces a training-time curriculum that begins with full skill context and progressively withdraws it. Skills are grouped offline by category and rendered with interaction history into a compact visual context, teaching he modeltool invocationandmulti-turn task completion. ADynamic Curriculumthen evaluates each skill file's on-policy helpfulness, retaining only those from which the current policy still benefits within a linearly decaying budget, until the agent operates in a fullyzero-shot setting. Extensive agentic experiments demonstrate that SKILL0 achieves substantial improvements over the standard RL baseline (+9.7\\% forALFWorldand +6.6\\% forSearch-QA), while maintaining a highly efficient context of fewer than 0.5k tokens per step. Our code is available at https://github.com/ZJU-REAL/SkillZero.",
      "github_url": "https://github.com/ZJU-REAL/SkillZero",
      "org_tag": null,
      "dimension": "action",
      "tech_core": "它让 Agent 在训练阶段逐步脱离外部技能说明书，把原本要临时加载的技能真正学进参数里，相当于把“照着 SOP 做”练成“闭眼也会做”。",
      "value": "适合高频重复流程的 Agent 产品，解决运行时检索技能噪声大、上下文占 token、每步都要带长说明书导致又慢又贵的问题。",
      "pm_suggestion": "如果你的 Agent 总在重复同类任务，立刻挑 top 10 高频技能做 internalization；把常用技能学进模型，比永远外挂技能库更省钱也更稳。"
    },
    {
      "id": 14,
      "title": "GEMS: Agent-Native Multimodal Generation with Memory and Skills",
      "url": "https://huggingface.co/papers/2603.28088",
      "likes": 81,
      "date": "2026-04-05",
      "published_date": "Mar 30",
      "abstract": "Recentmultimodal generation modelshave achieved remarkable progress on general-purpose generation tasks, yet continue to struggle with complex instructions and specialized downstream tasks. Inspired by the success of advancedagent frameworkssuch as Claude Code, we propose GEMS (Agent-Native Multimodal GEneration with Memory and Skills), a framework that pushes beyond the inherent limitations of foundational models on both general and downstream tasks. GEMS is built upon three core components.Agent Loopintroduces a structured multi-agent framework that iteratively improves generation quality throughclosed-loop optimization.Agent Memoryprovides a persistent,trajectory-level memorythat hierarchically stores both factual states and compressed experiential summaries, enabling a global view of the optimization process while reducing redundancy.Agent Skilloffers an extensible collection ofdomain-specific expertisewith on-demand loading, allowing the system to effectively handle diverse downstream applications. Across five mainstream tasks and four downstream tasks, evaluated on multiplegenerative backends, GEMS consistently achieves significant performance gains. Most notably, it enables the lightweight 6B modelZ-Image-Turboto surpass the state-of-the-artNano Banana 2on GenEval2, demonstrating the effectiveness of agent harness in extending model capabilities beyond their original limits.",
      "github_url": "https://github.com/lcqysl/GEMS",
      "org_tag": null,
      "dimension": "action",
      "tech_core": "它把多模态生成模型包进一个 Agent 外壳里，给它加上闭环迭代、长期记忆和按需技能调用，让生成过程从“一次出图”变成“会反复打磨的工作流”。",
      "value": "适合电商设计、营销素材、专业图形生成等复杂内容场景，解决基础生成模型对长指令理解差、专业任务需要多轮修稿却越改越乱的问题。",
      "pm_suggestion": "如果你的生成产品卡在复杂任务，不要第一反应换更大底模，先把 memory + skills + loop 做成产品层增强；这条路更快出业务结果。"
    },
    {
      "id": 15,
      "title": "Lingshu-Cell: A generative cellular world model for transcriptome modeling toward virtual cells",
      "url": "https://huggingface.co/papers/2603.25240",
      "likes": 75,
      "date": "2026-04-05",
      "published_date": "Mar 26",
      "abstract": "Modeling cellular states and predicting their responses to perturbations are central challenges in computational biology and the development of virtual cells. Existing foundation models forsingle-cell transcriptomicsprovide powerful static representations, but they do not explicitly model the distribution of cellular states for generative simulation. Here, we introduce Lingshu-Cell, amasked discrete diffusion modelthat learns transcriptomic state distributions and supportsconditional simulationunder perturbation. By operating directly in adiscrete token spacethat is compatible with the sparse, non-sequential nature of single-cell transcriptomic data, Lingshu-Cell captures complextranscriptome-wide expression dependenciesacross approximately 18,000 genes without relying on prior gene selection, such as filtering by high variability or ranking by expression level. Across diverse tissues and species, Lingshu-Cell accurately reproduces transcriptomic distributions, marker-gene expression patterns and cell-subtype proportions, demonstrating its ability to capture complex cellular heterogeneity. Moreover, by jointly embedding cell type or donor identity with perturbation, Lingshu-Cell can predict whole-transcriptome expression changes for novel combinations of identity and perturbation. It achieves leading performance on theVirtual Cell ChallengeH1genetic perturbation benchmarkand in predictingcytokine-induced responsesin human PBMCs. Together, these results establish Lingshu-Cell as a flexible cellular world model for in silico simulation of cell states andperturbation responses, laying the foundation for a new paradigm in biological discovery and perturbation screening.",
      "github_url": null,
      "org_tag": "DAMO Academy",
      "dimension": "understanding",
      "tech_core": "它把细胞状态当成一个可以生成和推演的系统世界，能在加了某种扰动后先模拟整张转录组会怎么变化，相当于先在电脑里做一轮虚拟湿实验。",
      "value": "适合药物筛选、疾病机制研究和虚拟细胞平台，解决真实实验慢、贵、组合空间爆炸、很多假设根本试不过来的痛点。",
      "pm_suggestion": "如果你做 AI for Science，把它包装成“湿实验前的仿真层”单独卖；只要能减少一轮无效实验，就有清晰的付费理由。"
    },
    {
      "id": 16,
      "title": "Project Imaging-X: A Survey of 1000+ Open-Access Medical Imaging Datasets for Foundation Model Development",
      "url": "https://huggingface.co/papers/2603.27460",
      "likes": 63,
      "date": "2026-04-05",
      "published_date": "Mar 29",
      "abstract": "Foundation modelshave demonstrated remarkable success across diverse domains and tasks, primarily due to the thrive of large-scale, diverse, and high-qualitydatasets. However, in the field ofmedical imaging, the curation and assembling of such medicaldatasetsare highly challenging due to the reliance on clinical expertise and strict ethical and privacy constraints, resulting in a scarcity of large-scale unified medicaldatasetsand hindering the development of powerfulmedical foundation models. In this work, we present the largest survey to date of medical imagedatasets, covering over 1,000 open-accessdatasetswith a systematic catalog of their modalities, tasks, anatomies, annotations, limitations, and potential for integration. Our analysis exposes a landscape that is modest in scale, fragmented across narrowly scoped tasks, and unevenly distributed across organs and modalities, which in turn limits the utility of existing medical imagedatasetsfor developing versatile and robustmedical foundation models. To turn fragmentation into scale, we propose ametadata-driven fusionparadigm (MDFP) that integrates publicdatasetswith shared modalities or tasks, thereby transforming multiple small data silos into larger, more coherent resources. Building on MDFP, we release an interactive discovery portal that enables end-to-end, automated medical image dataset integration, and compile all surveyeddatasetsinto a unified, structured table that clearly summarizes their key characteristics and provides reference links, offering the community an accessible and comprehensive repository. By charting the current terrain and offering a principled path to dataset consolidation, our survey provides a practical roadmap for scalingmedical imagingcorpora, supporting faster data discovery, more principled dataset creation, and more capablemedical foundation models.",
      "github_url": "https://github.com/uni-medical/Project-Imaging-X",
      "org_tag": "General Medical AI",
      "dimension": "multimodal",
      "tech_core": "它把 1000 多个医学影像公开数据集系统整理出来，还给出可自动融合的元数据框架，相当于先把散落各处的医学影像拼图编号、归档、对齐。",
      "value": "适合医疗基础模型团队、数据平台和医院科研合作，解决医学影像数据分散、标签口径不一、找得到却拼不起来的问题。",
      "pm_suggestion": "如果你想做医疗影像基础模型，先投数据整合工具链，不要急着训大模型；这个行业最稀缺的不是参数，而是可拼接的数据资产。"
    },
    {
      "id": 17,
      "title": "MiroEval: Benchmarking Multimodal Deep Research Agents in Process and Outcome",
      "url": "https://huggingface.co/papers/2603.28407",
      "likes": 62,
      "date": "2026-04-05",
      "published_date": "Mar 30",
      "abstract": "Recent progress indeep research systemshas been impressive, but evaluation still lags behindreal user needs. Existing benchmarks predominantly assess final reports using fixed rubrics, failing to evaluate the underlying research process. Most also offer limitedmultimodal coverage, rely on synthetic tasks that do not reflect real-world query complexity, and cannot be refreshed as knowledge evolves. To address these gaps, we introduce MiroEval, a benchmark andevaluation frameworkfordeep research systems. The benchmark comprises 100 tasks (70 text-only, 30 multimodal), all grounded inreal user needsand constructed via adual-path pipelinethat supports periodic updates, enabling a live and evolving setting. The proposed evaluation suite assessesdeep research systemsalong three complementary dimensions:adaptive synthesis quality evaluationwith task-specific rubrics,agentic factuality verificationvia active retrieval and reasoning over both web sources and multimodal attachments, andprocess-centric evaluationaudits how the system searches, reasons, and refines throughout its investigation. Evaluation across 13 systems yields three principal findings: the three evaluation dimensions capture complementary aspects of system capability, with each revealing distinct strengths and weaknesses across systems; process quality serves as a reliable predictor of overall outcome while revealing weaknesses invisible to output-level metrics; and multimodal tasks pose substantially greater challenges, with most systems declining by 3 to 10 points. The MiroThinker series achieves the most balanced performance, with MiroThinker-H1 ranking the highest overall in both settings. Human verification and robustness results confirm the reliability of the benchmark andevaluation framework. MiroEval provides a holistic diagnostic tool for the next generation ofdeep research agents.",
      "github_url": "https://github.com/MiroMindAI/MiroEval",
      "org_tag": "MiroMind AI",
      "dimension": "safety",
      "tech_core": "它不只看 Deep Research 最终报告写得像不像，还把搜索过程、事实核验和多模态处理过程一起审计，相当于给研究 Agent 装了全过程质检。",
      "value": "适合研究助手、行业分析和高价值问答产品，解决只看最终答案时看不出过程偷懒、事实漂移和多模态能力虚高的问题。",
      "pm_suggestion": "如果你在做 Deep Research，立刻把过程评测接进 CI；没有过程指标的“好答案”，上线后迟早会在可追责场景里出事。"
    },
    {
      "id": 18,
      "title": "VGGRPO: Towards World-Consistent Video Generation with 4D Latent Reward",
      "url": "https://huggingface.co/papers/2603.26599",
      "likes": 57,
      "date": "2026-04-05",
      "published_date": "Mar 27",
      "abstract": "Large-scalevideo diffusion modelsachieve impressive visual quality, yet often fail to preserve geometric consistency. Prior approaches improve consistency either by augmenting the generator with additional modules or applying geometry-aware alignment. However, architectural modifications can compromise the generalization of internet-scale pretrained models, while existing alignment methods are limited to static scenes and rely on RGB-space rewards that require repeated VAE decoding, incurring substantial compute overhead and failing to generalize to highly dynamic real-world scenes. To preserve the pretrained capacity while improving geometric consistency, we propose VGGRPO (Visual Geometry GRPO), a latent geometry-guided framework for geometry-aware video post-training. VGGRPO introduces aLatent Geometry Model(LGM) that stitches video diffusion latents togeometry foundation models, enabling direct decoding of scene geometry from thelatent space. By constructing LGM from a geometry model with4D reconstructioncapability, VGGRPO naturally extends to dynamic scenes, overcoming the static-scene limitations of prior methods. Building on this, we perform latent-spaceGroup Relative Policy Optimizationwith two complementary rewards: acamera motion smoothnessreward that penalizes jittery trajectories, and ageometry reprojection consistencyreward that enforces cross-view geometric coherence. Experiments on both static and dynamic benchmarks show that VGGRPO improves camera stability, geometry consistency, and overall quality while eliminating costly VAE decoding, making latent-space geometry-guided reinforcement an efficient and flexible approach toworld-consistent video generation.",
      "github_url": null,
      "org_tag": "Google",
      "dimension": "multimodal",
      "tech_core": "它直接在潜空间里用几何奖励训练视频模型，让模型不仅画面好看，还得守住镜头运动和空间结构的一致性，相当于把“世界别乱变”写进了训练目标。",
      "value": "适合电影级视频生成、3D 可控视频和数字内容制作，解决视频一转镜头就穿帮、空间几何飘忽、为了对齐几何还得付出巨额解码算力的问题。",
      "pm_suggestion": "如果你做视频生成，把几何一致性从加分项改成必达项；只卷纹理细节的产品，很快会被“镜头一动就露馅”拖死。"
    },
    {
      "id": 19,
      "title": "Gen-Searcher: Reinforcing Agentic Search for Image Generation",
      "url": "https://huggingface.co/papers/2603.28767",
      "likes": 54,
      "date": "2026-04-05",
      "published_date": "Mar 30",
      "abstract": "Recent image generation models have shown strong capabilities in generating high-fidelity and photorealistic images. However, they are fundamentally constrained by frozen internal knowledge, thus often failing on real-world scenarios that are knowledge-intensive or require up-to-date information. In this paper, we present Gen-Searcher, as the first attempt to train asearch-augmented image generationagent, which performsmulti-hop reasoningand search to collect the textual knowledge and reference images needed for grounded generation. To achieve this, we construct a tailored data pipeline and curate two high-quality datasets, Gen-Searcher-SFT-10k and Gen-Searcher-RL-6k, containing diverse search-intensive prompts and corresponding ground-truth synthesis images. We further introduce KnowGen, a comprehensive benchmark that explicitly requires search-grounded external knowledge for image generation and evaluates models from multiple dimensions. Based on these resources, we train Gen-Searcher with SFT followed byagentic reinforcement learningwithdual reward feedback, which combines text-based and image-based rewards to provide more stable and informative learning signals forGRPO training. Experiments show that Gen-Searcher brings substantial gains, improving Qwen-Image by around 16 points on KnowGen and 15 points on WISE. We hope this work can serve as an open foundation for search agents in image generation, and we fully open-source our data, models, and code.",
      "github_url": "https://github.com/tulerfeng/Gen-Searcher",
      "org_tag": null,
      "dimension": "action",
      "tech_core": "它让图像生成前先去搜索文本知识和参考图，再经过多跳推理决定怎么画，相当于给文生图模型配了一个会查资料的前置研究员。",
      "value": "适合品牌视觉、新闻配图、教育内容和知识型海报，解决模型闭卷作画、涉及实时事实或冷门概念时容易张冠李戴的问题。",
      "pm_suggestion": "如果你在做商用图像生成，把“搜索增强生成”做成高阶付费功能；客户买的不是更会画，而是更不容易画错。"
    },
    {
      "id": 20,
      "title": "Emergent Social Intelligence Risks in Generative Multi-Agent Systems",
      "url": "https://huggingface.co/papers/2603.27771",
      "likes": 50,
      "date": "2026-04-05",
      "published_date": "Mar 29",
      "abstract": "Multi-agent systemscomposed oflarge generative modelsare rapidly moving from laboratory prototypes to real-world deployments, where they jointly plan, negotiate, and allocate shared resources to solve complex tasks. While such systems promise unprecedented scalability and autonomy, theircollective interactionalso gives rise to failure modes that cannot be reduced to individual agents. Understanding theseemergent risksis therefore critical. Here, we present a pioneer study of such emergent multi-agent risk in workflows that involve competition over shared resources (e.g., computing resources or market share),sequential handoff collaboration(where downstream agents see only predecessor outputs),collective decision aggregation, and others. Across these settings, we observe that such group behaviors arise frequently across repeated trials and a wide range of interaction conditions, rather than as rare or pathological cases. In particular, phenomena such ascollusion-like coordinationandconformityemerge with non-trivial frequency under realistic resource constraints, communication protocols, and role assignments, mirroring well-known pathologies in human societies despite no explicit instruction. Moreover, these risks cannot be prevented by existing agent-level safeguards alone. These findings expose the dark side of intelligentmulti-agent systems: asocial intelligence riskwhere agent collectives, despite no instruction to do so, spontaneously reproduce familiar failure patterns from human societies.",
      "github_url": "https://github.com/HowieHwong/RiskLab",
      "org_tag": null,
      "dimension": "safety",
      "tech_core": "它发现多 Agent 的风险不只是单个模型胡说，而是群体会自发出现串谋、从众和错误扩散，像把人类组织病复制到了机器团队里。",
      "value": "适合任何多 Agent 协作系统、资源分配系统和自动化决策平台，解决单 Agent 看起来都合规，但合起来就会集体跑偏的问题。",
      "pm_suggestion": "如果你在设计多 Agent 系统，立刻把群体行为监控做进架构；只做单 Agent guardrail，挡不住协同层面的系统性风险。"
    }
  ],
  "opportunities": {
    "strategies": [
      {
        "icon": "💰",
        "title": "Agent 工程化开始进入收钱阶段",
        "type": "cashcow",
        "action": "预算优先投到终端/API 执行、安全联防、流程评测和高频技能内化这四层，不要再把主力团队耗在花哨 UI agent 上；企业现在愿意付费的是稳定交付，不是演示效果。",
        "relatedPapers": [
          3,
          12,
          13,
          17,
          20
        ]
      },
      {
        "icon": "🏋️",
        "title": "长链路智能的胜负手是成本结构，不是单点效果",
        "type": "efficiency",
        "action": "把过程级奖励、任务路由 speculative decoding、数据调度和流式生成一起纳入基础设施路线图；谁先把长推理和长视频的单位成本打下来，谁才能规模化卖出去。",
        "relatedPapers": [
          2,
          4,
          5,
          7
        ]
      },
      {
        "icon": "🌊",
        "title": "“先检索再生成”的多模态工作流是新入口",
        "type": "blueocean",
        "action": "别继续做闭卷创作工具了，直接布局带搜索、记忆、几何一致性和专业数据底座的生成产品；下一代内容产品卖点会从“更会画”转向“更可信、更可控、更懂场景”。",
        "relatedPapers": [
          8,
          10,
          14,
          18,
          19
        ]
      }
    ],
    "newProducts": [
      {
        "icon": "🆕",
        "title": "企业 Agent 控制塔",
        "description": "面向运营、财务和运维团队的 Agent 控制台：任务走 API/终端执行，内置风险 watcher、过程回放、技能内化配置和交付验收，不是聊天框，而是一套数字员工管理系统。",
        "scenes": [
          "内部流程自动化",
          "工单与运维",
          "报表和数据处理"
        ],
        "relatedPapers": [
          3,
          12,
          13,
          17,
          20
        ]
      },
      {
        "icon": "🆕",
        "title": "事实增强创意工作室",
        "description": "一个先搜索事实和参考素材、再生成图片或视频的创作台，自动完成资料搜集、参考对齐、脚本续写和几何一致性控制，适合不能“画错”的商业内容团队。",
        "scenes": [
          "品牌营销",
          "新闻与教育内容",
          "电商视觉制作"
        ],
        "relatedPapers": [
          4,
          10,
          18,
          19
        ]
      },
      {
        "icon": "🆕",
        "title": "低空与机器人统一仿真云",
        "description": "把无人机、地面机器人、遮挡记忆世界模型和多传感器采集放进同一个云端仿真产品里，支持训练、评测、回放和数据生成，让空地协同团队先把软件世界跑通。",
        "scenes": [
          "低空物流",
          "巡检与安防",
          "具身智能训练"
        ],
        "relatedPapers": [
          1,
          6
        ]
      },
      {
        "icon": "🆕",
        "title": "生命科学仿真副驾",
        "description": "给医药和科研团队的研究副驾：整合医学证据、医学影像数据资产和虚拟细胞模拟，在立项前先跑一轮数字实验，缩短从想法到验证的周期。",
        "scenes": [
          "药物筛选",
          "临床研究设计",
          "医学 AI 研发"
        ],
        "relatedPapers": [
          11,
          15,
          16
        ]
      }
    ]
  }
};
