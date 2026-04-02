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
      "tech_core": "核心思路：这篇工作提出了一种新的技术方案，重点提升理解与记忆相关任务中的效果、效率或稳定性。",
      "value": "归类到理解与记忆。这类能力适合做深研究、复杂推理和长上下文决策，是高价值知识型产品的底层能力。",
      "pm_suggestion": "优先判断它是否能提升推理、记忆或长上下文能力，再决定是否值得纳入核心能力路线。"
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
      "tech_core": "核心思路：这篇工作提出了一种新的技术方案，重点提升机器人/具身智能相关任务中的效果、效率或稳定性。",
      "value": "归类到机器人/具身智能。这类能力适合延伸到物理世界交互、机器人编排和具身智能系统。",
      "pm_suggestion": "如果你在看具身智能或物理世界交互，这是值得持续跟踪的方向。"
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
      "tech_core": "核心思路：这篇工作提出了一种新的技术方案，重点提升可靠性与安全相关任务中的效果、效率或稳定性。",
      "value": "归类到可靠性与安全。这类能力更适合沉淀为评测、风控和可信层，直接影响用户对产品结果的信任。",
      "pm_suggestion": "把它当成评测和风控能力候选，优先用于可靠性建设。"
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
      "dimension": "efficiency",
      "tech_core": "核心思路：这篇工作提出了一种新的技术方案，重点提升效率与成本相关任务中的效果、效率或稳定性。",
      "value": "归类到效率与成本。这类能力适合直接转化为降本、提速和更低部署门槛，价值非常工程化。",
      "pm_suggestion": "优先评估它能否显著降低成本、延迟或部署门槛。"
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
      "dimension": "understanding",
      "tech_core": "核心思路：这篇工作提出了一种新的模型方法，重点提升理解与记忆相关任务中的效果、效率或稳定性。",
      "value": "归类到理解与记忆。这类能力适合做深研究、复杂推理和长上下文决策，是高价值知识型产品的底层能力。",
      "pm_suggestion": "优先判断它是否能提升推理、记忆或长上下文能力，再决定是否值得纳入核心能力路线。"
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
      "dimension": "understanding",
      "tech_core": "核心思路：这篇工作提出了一种新的技术方案，重点提升理解与记忆相关任务中的效果、效率或稳定性。",
      "value": "归类到理解与记忆。这类能力适合做深研究、复杂推理和长上下文决策，是高价值知识型产品的底层能力。",
      "pm_suggestion": "优先判断它是否能提升推理、记忆或长上下文能力，再决定是否值得纳入核心能力路线。"
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
      "tech_core": "核心思路：这篇工作提出了一种新的技术方案，重点提升多模态相关任务中的效果、效率或稳定性。",
      "value": "归类到多模态。这类能力适合进入文档理解、视觉分析、视频理解和 UI 交互等真实场景。",
      "pm_suggestion": "重点看它是否能转化为图像、视频、OCR 或多模态交互产品能力。"
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
      "dimension": "understanding",
      "tech_core": "核心思路：这篇工作提出了一种新的技术方案，重点提升理解与记忆相关任务中的效果、效率或稳定性。",
      "value": "归类到理解与记忆。这类能力适合做深研究、复杂推理和长上下文决策，是高价值知识型产品的底层能力。",
      "pm_suggestion": "优先判断它是否能提升推理、记忆或长上下文能力，再决定是否值得纳入核心能力路线。"
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
      "tech_core": "核心思路：这篇工作提出了一种新的模型方法，重点提升机器人/具身智能相关任务中的效果、效率或稳定性。",
      "value": "归类到机器人/具身智能。这类能力适合延伸到物理世界交互、机器人编排和具身智能系统。",
      "pm_suggestion": "如果你在看具身智能或物理世界交互，这是值得持续跟踪的方向。"
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
      "tech_core": "核心思路：这篇工作提出了一种新的技术方案，重点提升行动能力相关任务中的效果、效率或稳定性。",
      "value": "归类到行动能力。这类能力更接近可执行系统，适合落到 Agent、自动化流程和工具调用产品中。",
      "pm_suggestion": "优先关注它是否能直接提升 agent、工具调用或自动化执行的效果。"
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
      "tech_core": "核心思路：这篇工作提出了一种新的技术方案，重点提升行动能力相关任务中的效果、效率或稳定性。",
      "value": "归类到行动能力。这类能力更接近可执行系统，适合落到 Agent、自动化流程和工具调用产品中。",
      "pm_suggestion": "优先关注它是否能直接提升 agent、工具调用或自动化执行的效果。"
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
      "dimension": "understanding",
      "tech_core": "核心思路：这篇工作系统梳理了理解与记忆方向的方法脉络，把问题拆成更清晰的模块、结构和评估维度。",
      "value": "归类到理解与记忆。这类能力适合做深研究、复杂推理和长上下文决策，是高价值知识型产品的底层能力。",
      "pm_suggestion": "优先判断它是否能提升推理、记忆或长上下文能力，再决定是否值得纳入核心能力路线。"
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
      "dimension": "action",
      "tech_core": "核心思路：这篇工作提出了一种新的技术方案，重点提升行动能力相关任务中的效果、效率或稳定性。",
      "value": "归类到行动能力。这类能力更接近可执行系统，适合落到 Agent、自动化流程和工具调用产品中。",
      "pm_suggestion": "优先关注它是否能直接提升 agent、工具调用或自动化执行的效果。"
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
      "dimension": "understanding",
      "tech_core": "核心思路：这篇工作提出了一种新的技术方案，重点提升理解与记忆相关任务中的效果、效率或稳定性。",
      "value": "归类到理解与记忆。这类能力适合做深研究、复杂推理和长上下文决策，是高价值知识型产品的底层能力。",
      "pm_suggestion": "优先判断它是否能提升推理、记忆或长上下文能力，再决定是否值得纳入核心能力路线。"
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
      "tech_core": "核心思路：这篇工作提出了一种新的技术方案，重点提升多模态相关任务中的效果、效率或稳定性。",
      "value": "归类到多模态。这类能力适合进入文档理解、视觉分析、视频理解和 UI 交互等真实场景。",
      "pm_suggestion": "重点看它是否能转化为图像、视频、OCR 或多模态交互产品能力。"
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
      "dimension": "understanding",
      "tech_core": "核心思路：这篇工作提出了一套面向理解与记忆的评测基准，不再只看结果分数，而是更强调交互过程、状态变化或真实任务表现。",
      "value": "归类到理解与记忆。这类能力适合做深研究、复杂推理和长上下文决策，是高价值知识型产品的底层能力。",
      "pm_suggestion": "优先判断它是否能提升推理、记忆或长上下文能力，再决定是否值得纳入核心能力路线。"
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
      "dimension": "understanding",
      "tech_core": "核心思路：这篇工作提出了一种新的技术方案，重点提升理解与记忆相关任务中的效果、效率或稳定性。",
      "value": "归类到理解与记忆。这类能力适合做深研究、复杂推理和长上下文决策，是高价值知识型产品的底层能力。",
      "pm_suggestion": "优先判断它是否能提升推理、记忆或长上下文能力，再决定是否值得纳入核心能力路线。"
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
      "tech_core": "核心思路：这篇工作提出了一种新的技术方案，重点提升行动能力相关任务中的效果、效率或稳定性。",
      "value": "归类到行动能力。这类能力更接近可执行系统，适合落到 Agent、自动化流程和工具调用产品中。",
      "pm_suggestion": "优先关注它是否能直接提升 agent、工具调用或自动化执行的效果。"
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
      "dimension": "multimodal",
      "tech_core": "核心思路：这篇工作提出了一种新的技术方案，重点提升多模态相关任务中的效果、效率或稳定性。",
      "value": "归类到多模态。这类能力适合进入文档理解、视觉分析、视频理解和 UI 交互等真实场景。",
      "pm_suggestion": "重点看它是否能转化为图像、视频、OCR 或多模态交互产品能力。"
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
      "tech_core": "核心思路：这篇工作提出了一种新的技术方案，重点提升行动能力相关任务中的效果、效率或稳定性。",
      "value": "归类到行动能力。这类能力更接近可执行系统，适合落到 Agent、自动化流程和工具调用产品中。",
      "pm_suggestion": "优先关注它是否能直接提升 agent、工具调用或自动化执行的效果。"
    }
  ],
  "opportunities": {
    "strategies": [
      {
        "icon": "👀",
        "title": "深研究工作流正在变得更长更结构化",
        "type": "special",
        "observation": "本周理解与记忆是最密集的主题之一，共出现 8 篇，代表论文包括 FIPO: Eliciting Deep Reasoning with Future-KL Influenced Policy Optimization, Out of Sight but Not Out of Mind: Hybrid Memory for Dynamic Video World Models。",
        "action": "市场还缺一类不像聊天框、更像真实研究系统的产品：能持续检索、比对、验证并在多轮中逐步收敛答案。",
        "relatedPapers": [
          1,
          5,
          6
        ]
      },
      {
        "icon": "💰",
        "title": "智能体执行层进入可产品化区间",
        "type": "cashcow",
        "observation": "本周行动能力是最密集的主题之一，共出现 5 篇，代表论文包括 GEMS: Agent-Native Multimodal Generation with Memory and Skills, Gen-Searcher: Reinforcing Agentic Search for Image Generation。",
        "action": "如果你正在做工作流智能体、AI 副驾或自动化系统，这已经不是远期概念，而是可以立刻落产品的能力层。",
        "relatedPapers": [
          10,
          11,
          13
        ]
      },
      {
        "icon": "🌊",
        "title": "多模态开始从演示能力走向主交互",
        "type": "blueocean",
        "observation": "本周多模态是最密集的主题之一，共出现 3 篇，代表论文包括 LongCat-Next: Lexicalizing Modalities as Discrete Tokens, VGGRPO: Towards World-Consistent Video Generation with 4D Latent Reward。",
        "action": "不要再把图像、视频和视觉推理当作附加功能。下一波真正好用的 AI 产品，会把多模态作为原生输入层。",
        "relatedPapers": [
          7,
          15,
          19
        ]
      },
      {
        "icon": "🌊",
        "title": "具身智能的产品面正在变宽",
        "type": "blueocean",
        "observation": "本周机器人/具身智能是最密集的主题之一，共出现 2 篇，代表论文包括 CARLA-Air: Fly Drones Inside a CARLA World -- A Unified Infrastructure for Air-Ground Embodied Intelligence, Lingshu-Cell: A generative cellular world model for transcriptome modeling toward virtual cells。",
        "action": "机器人仍然偏早期，但底层技术栈正在变得可复用。能把软件编排和物理执行连接起来的产品值得持续跟踪。",
        "relatedPapers": [
          2,
          9
        ]
      }
    ],
    "newProducts": [
      {
        "icon": "🆕",
        "title": "深研究工作空间",
        "description": "一个面向多源证据收集、结论核验和长篇结构化回答生成的产品，而不是一次性聊天回复。 本周在理解与记忆方向共出现 8 篇相关论文，说明这条技术栈正在加速成熟。",
        "scenes": [
          "分析师团队",
          "战略研究",
          "技术情报"
        ],
        "relatedPapers": [
          1,
          5,
          6,
          8
        ]
      },
      {
        "icon": "🆕",
        "title": "智能体工作流工作台",
        "description": "一个用来设计、追踪和部署智能体工作流的工作台，支持任务拆分、工具调用和多智能体编排。 本周在行动能力方向共出现 5 篇相关论文，说明这条技术栈正在加速成熟。",
        "scenes": [
          "运维自动化",
          "研究流程",
          "内部 AI 助手"
        ],
        "relatedPapers": [
          10,
          11,
          13,
          18
        ]
      },
      {
        "icon": "🆕",
        "title": "多模态研究台",
        "description": "一个能查看文档、截图、图表、视频和 UI 流程的多模态工作台，用来输出有依据的总结和后续动作。 本周在多模态方向共出现 3 篇相关论文，说明这条技术栈正在加速成熟。",
        "scenes": [
          "设计评审",
          "文档分析",
          "内容运营"
        ],
        "relatedPapers": [
          7,
          15,
          19
        ]
      },
      {
        "icon": "🆕",
        "title": "具身智能运维台",
        "description": "一个用于监控、适配和评估多种机器人形态行为的协调层，适合不断变化的硬件组合。 本周在机器人/具身智能方向共出现 2 篇相关论文，说明这条技术栈正在加速成熟。",
        "scenes": [
          "机器人实验室",
          "仓储自动化",
          "物理智能运维"
        ],
        "relatedPapers": [
          2,
          9
        ]
      }
    ]
  }
};
