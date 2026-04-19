// AI Paper Radar - Weekly Analysis
const PAPER_DATA = {
  "week": "2026-W16",
  "dateRange": "2026-04-12 to 2026-04-18",
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
        "RAG",
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
        "MCP",
        "code"
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
        "OCR"
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
        "efficient"
      ]
    },
    "safety": {
      "name": "可靠性与安全",
      "icon": "🛡",
      "keywords": [
        "hallucination",
        "alignment",
        "safety",
        "robustness",
        "evaluation",
        "guardrail"
      ]
    },
    "robotics": {
      "name": "机器人/具身智能",
      "icon": "🦾",
      "keywords": [
        "robot",
        "VLA",
        "embodied",
        "world model",
        "simulation"
      ]
    }
  },
  "papers": [
    {
      "id": 1,
      "title": "WildDet3D: Scaling Promptable 3D Detection in the Wild",
      "url": "https://huggingface.co/papers/2604.08626",
      "likes": 238,
      "date": "2026-04-19",
      "published_date": "Apr 9",
      "abstract": "Understanding objects in 3D from a single image is a cornerstone ofspatial intelligence. A key step toward this goal ismonocular 3D object detection--recovering the extent, location, and orientation of objects from an input RGB image. To be practical in the open world, such a detector must generalize beyond closed-set categories, support diverse prompt modalities, and leverage geometric cues when available. Progress is hampered by two bottlenecks: existing methods are designed for a single prompt type and lack a mechanism to incorporate additional geometric cues, and current 3D datasets cover only narrow categories in controlled environments, limitingopen-world transfer. In this work we address both gaps. First, we introduce WildDet3D, a unifiedgeometry-aware architecturethat natively accepts text, point, andbox promptsand can incorporate auxiliarydepth signalsat inference time. Second, we present WildDet3D-Data, the largest open3D detection datasetto date, constructed by generating candidate 3D boxes from existing 2D annotations and retaining only human-verified ones, yielding over 1M images across 13.5K categories in diverse real-world scenes. WildDet3D establishes a new state-of-the-art across multiple benchmarks and settings. In the open-world setting, it achieves 22.6/24.8 AP3D on our newly introduced WildDet3D-Bench with text andbox prompts. On Omni3D, it reaches 34.2/36.4 AP3D with text andbox prompts, respectively. In zero-shot evaluation, it achieves 40.3/48.9 ODS on Argoverse 2 and ScanNet. Notably, incorporating depth cues at inference time yields substantial additional gains (+20.7 AP on average across settings).",
      "github_url": "https://github.com/allenai/WildDet3D",
      "org_tag": "Ai2",
      "dimension": "robotics",
      "tech_core": "它把单张图片里的 3D 检测做成“可提示、可补几何线索”的通用接口：文字能点名目标，框和点能精确指路，深度信息还能临时加外挂提准度。",
      "value": "适合自动驾驶巡检、仓储盘点和 AR 场景理解，解决过去 3D 检测只能认封闭类目、换个目标或换种提示方式就失灵的问题。",
      "pm_suggestion": "如果你在做空间感知产品，把 3D 检测接口升级成“文本+框+点+深度”的混合提示输入；单一交互方式不够撑住开放世界场景。"
    },
    {
      "id": 2,
      "title": "Seedance 2.0: Advancing Video Generation for World Complexity",
      "url": "https://huggingface.co/papers/2604.14148",
      "likes": 136,
      "date": "2026-04-19",
      "published_date": "Apr 15",
      "abstract": "Seedance 2.0 is a new nativemulti-modal audio-video generationmodel, officially released in China in early February 2026. Compared with its predecessors, Seedance 1.0 and 1.5 Pro, Seedance 2.0 adopts a unified, highly efficient, and large-scale architecture for multi-modal audio-videojoint generation. This allows it to support four input modalities: text, image, audio, and video, by integrating one of the most comprehensive suites of multi-modalcontent referenceandediting capabilitiesavailable in the industry to date. It delivers substantial, well-rounded improvements across all key sub-dimensions of video and audio generation. In both expert evaluations and public user tests, the model has demonstrated performance on par with the leading levels in the field. Seedance 2.0 supports direct generation of audio-video content with durations ranging from 4 to 15 seconds, with native output resolutions of 480p and 720p. For multi-modal inputs as reference, its current open platform supports up to 3 video clips, 9 images, and 3 audio clips. In addition, we provide Seedance 2.0 Fast version, an accelerated variant of Seedance 2.0 designed to boostgeneration speedforlow-latency scenarios. Seedance 2.0 has delivered significant improvements to its foundational generation capabilities and multi-modal generation performance, bringing an enhanced creative experience for end users.",
      "github_url": null,
      "org_tag": "ByteDance Seed",
      "dimension": "multimodal",
      "tech_core": "它把文生视频、图生视频、音频驱动和视频编辑揉进同一套原生音视频生成架构里，目标不是单点效果，而是把创作链路一次打通。",
      "value": "适合广告素材、短视频工业化生产和互动内容创作，解决团队要在多个模型之间来回倒素材、改一处就全链返工的低效问题。",
      "pm_suggestion": "如果你做内容生产工具，立刻把“参考图+参考视频+音频+文本”做成一条统一生成管线；用户要的是整条工作流，不是四个分裂按钮。"
    },
    {
      "id": 3,
      "title": "The Past Is Not Past: Memory-Enhanced Dynamic Reward Shaping",
      "url": "https://huggingface.co/papers/2604.11297",
      "likes": 135,
      "date": "2026-04-19",
      "published_date": "Apr 13",
      "abstract": "Despite the success ofreinforcement learningforlarge language models, a common failure mode is reducedsampling diversity, where the policy repeatedly generates similar erroneous behaviors. Classicalentropy regularizationencourages randomness under the current policy, but does not explicitly discourage recurrent failure patterns across rollouts. We propose MEDS, aMemory-Enhanced Dynamic reward Shapingframework that incorporateshistorical behavioral signalsinto reward design. By storing and leveragingintermediate model representations, we capture features of past rollouts and usedensity-based clusteringto identify frequently recurringerror patterns. Rollouts assigned to more prevalent error clusters are penalized more heavily, encouraging broader exploration while reducing repeated mistakes. Across five datasets and three base models, MEDS consistently improves average performance over existing baselines, achieving gains of up to 4.13 pass@1 points and 4.37 pass@128 points. Additional analyses using both LLM-based annotations and quantitative diversity metrics show that MEDS increasesbehavioral diversityduring sampling.",
      "github_url": "https://github.com/Linxi000/MEDS",
      "org_tag": null,
      "dimension": "understanding",
      "tech_core": "它给 RL 训练加了一层“错误记忆”：模型每次犯过的典型错法都会被聚类记账，下次再走回老路就罚得更重。",
      "value": "适合数学、代码和策略搜索类推理训练，解决模型表面在采样很多答案，实际却反复撞进同一类错误局部最优的问题。",
      "pm_suggestion": "如果你在训推理模型，立刻把“重复错误惩罚”接进奖励设计；只鼓励探索不记录旧错，训练会一直原地打转。"
    },
    {
      "id": 4,
      "title": "ClawGUI: A Unified Framework for Training, Evaluating, and Deploying GUI Agents",
      "url": "https://huggingface.co/papers/2604.11784",
      "likes": 134,
      "date": "2026-04-19",
      "published_date": "Apr 13",
      "abstract": "GUI agentsdrive applications through their visual interfaces instead of programmatic APIs, interacting with arbitrary software via taps, swipes, and keystrokes, reaching a long tail of applications that CLI-based agents cannot. Yet progress in this area is bottlenecked less by modeling capacity than by the absence of a coherent full-stack infrastructure: online RL training suffers fromenvironment instabilityandclosed pipelines,evaluation protocolsdrift silently across works, and trained agents rarely reach real users on real devices. We present ClawGUI, an open-source framework addressing these three gaps within a single harness. ClawGUI-RL provides the first open-source GUI agent RL infrastructure with validated support for both parallel virtual environments and real physical devices, integrating GiGPO with a Process Reward Model for dense step-level supervision. ClawGUI-Eval enforces a fully standardized evaluation pipeline across 6 benchmarks and 11+ models, achieving 95.8\\% reproduction against official baselines. ClawGUI-Agent brings trained agents to Android, HarmonyOS, and iOS through 12+ chat platforms withhybrid CLI-GUI controland persistent personalized memory. Trained end to end within this pipeline, ClawGUI-2B achieves 17.1\\%Success Rateon MobileWorld GUI-Only, outperforming the same-scale MAI-UI-2B baseline by 6.0\\%.",
      "github_url": "https://github.com/ZJU-REAL/ClawGUI",
      "org_tag": "Zhejiang University",
      "dimension": "action",
      "tech_core": "它把 GUI Agent 最缺的三件事一次补齐：能训、能统一测、还能真的发到手机上跑，相当于把实验室玩具拉成可交付基础设施。",
      "value": "适合移动端助手、跨 App 自动化和企业移动办公 Agent，解决 GUI Agent 过去训练环境不稳、评测口径乱、训练完也没法上线的问题。",
      "pm_suggestion": "如果你押注手机 Agent，先投全栈基础设施，不要急着卷模型尺寸；没有统一训练评测部署链路，团队会被工程噪音拖死。"
    },
    {
      "id": 5,
      "title": "QuanBench+: A Unified Multi-Framework Benchmark for LLM-Based Quantum Code Generation",
      "url": "https://huggingface.co/papers/2604.08570",
      "likes": 121,
      "date": "2026-04-19",
      "published_date": "Mar 25",
      "abstract": "Large Language Models(LLMs) are increasingly used for code generation, yetquantum code generationis still evaluated mostly within single frameworks, making it difficult to separate quantum reasoning from framework familiarity. We introduce QuanBench+, a unified benchmark spanningQiskit,PennyLane, andCirq, with 42 aligned tasks covering quantum algorithms, gate decomposition, and state preparation.\n  We evaluate models with executablefunctional tests, reportPass@1andPass@5, and useKL-divergence-based acceptance for probabilistic outputs. We additionally studyPass@1afterfeedback-based repair, where a model may revise code after a runtime error or wrong answer. Across frameworks, the strongest one-shot scores reach 59.5% inQiskit, 54.8% inCirq, and 42.9% inPennyLane; withfeedback-based repair, the best scores rise to 83.3%, 76.2%, and 66.7%, respectively. These results show clear progress, but also that reliable multi-frameworkquantum code generationremains unsolved and still depends strongly on framework-specific knowledge.",
      "github_url": "https://github.com/JawadKotaichh/quanbench-plus",
      "org_tag": "American University of Beirut",
      "dimension": "action",
      "tech_core": "它把量子代码生成从“会不会背某个框架 API”拆开来测，逼模型在 Qiskit、PennyLane、Cirq 三套体系里都得真会写、真能跑。",
      "value": "适合科研编程 Copilot 和垂直开发助手，解决模型在单框架 benchmark 上看着会做题，换个生态就立刻露馅的问题。",
      "pm_suggestion": "如果你做专业代码助手，别再用单框架成绩包装通用能力；跨框架可执行测试必须进验收门槛。"
    },
    {
      "id": 6,
      "title": "GameWorld: Towards Standardized and Verifiable Evaluation of Multimodal Game Agents",
      "url": "https://huggingface.co/papers/2604.07429",
      "likes": 109,
      "date": "2026-04-19",
      "published_date": "Apr 8",
      "abstract": "Towards an embodied generalist for real-world interaction,Multimodal Large Language Model(MLLM) agents still suffer from challenging latency, sparse feedback, and irreversible mistakes.Video gamesoffer an ideal testbed with rich visual observations and closed-loop interaction, demanding fine-grained perception, long-horizon planning, and precise control. However, systematically evaluating these capabilities is currently hindered by heterogeneousaction interfacesand heuristic verification. To this end, we introduce GameWorld, a benchmark designed for standardized and verifiable evaluation of MLLMs as generalist game agents inbrowser environments. Twogame agent interfacesare studied: (i)computer-use agentsthat directly emit keyboard and mouse controls, and (ii) generalist multimodal agents that act in asemantic action spacevia deterministicSemantic Action Parsing. GameWorld contains 34 diverse games and 170 tasks, each paired withstate-verifiable metricsfor outcome-based evaluation. The results across 18 model-interface pairs suggest that even the best performing agent is far from achieving human capabilities onvideo games. Extensive experiments of repeated full-benchmark reruns demonstrate the robustness of the benchmark, while further studies on real-time interaction, context-memory sensitivity, and action validity expose more challenges ahead for game agents. Together, by offering a standardized, verifiable, and reproducible evaluation framework, GameWorld lays a robust foundation for advancing research on multimodal game agents and beyond. The project page is at https://gameworld-bench.github.io.",
      "github_url": "https://github.com/gameworld-project/gameworld",
      "org_tag": "National University of Singapore",
      "dimension": "action",
      "tech_core": "它把游戏当成可控又高反馈的真实交互世界，用统一动作接口和可验证结果，把多模态 Agent 的看、想、控放到同一套尺子上量。",
      "value": "适合浏览器 Agent、游戏 AI 和通用 computer-use 系统，解决过去交互任务 benchmark 接口碎片化、结果验证靠人工猜的老毛病。",
      "pm_suggestion": "如果你在做 computer-use Agent，立刻补一套可验证交互评测环境；没有稳定赛场，模型迭代速度会被幻觉式进步拖垮。"
    },
    {
      "id": 7,
      "title": "RationalRewards: Reasoning Rewards Scale Visual Generation Both Training and Test Time",
      "url": "https://huggingface.co/papers/2604.11626",
      "likes": 99,
      "date": "2026-04-19",
      "published_date": "Apr 13",
      "abstract": "Mostreward modelsforvisual generationreduce rich human judgments to a single unexplained score, discarding the reasoning that underlies preference. We show that teachingreward modelsto produce explicit, multi-dimensional critiques before scoring transforms them from passive evaluators into active optimization tools, improving generators in two complementary ways: at training time, structured rationales provide interpretable, fine-grained rewards forreinforcement learning; at test time, aGenerate-Critique-Refine loopturns critiques into targeted prompt revisions that improve outputs without any parameter updates. To train such a reward model without costly rationale annotations, we introducePreference-Anchored Rationalization(PARROT), a principled framework that recovers high-quality rationales from readily available preference data through anchored generation, consistency filtering, and distillation. The resulting model, RationalRewards (8B), achieves state-of-the-artpreference predictionamong open-sourcereward models, competitive with Gemini-2.5-Pro, while using 10-20x less training data than comparable baselines. As an RL reward, it consistently improves text-to-image and image-editing generators beyond scalar alternatives. Most strikingly, its test-time critique-and-refine loop matches or exceedsRL-based fine-tuningon several benchmarks, suggesting thatstructured reasoningcan unlock latent capabilities in existing generators that suboptimal prompts fail to elicit.",
      "github_url": "https://github.com/TIGER-AI-Lab/RationalRewards",
      "org_tag": null,
      "dimension": "multimodal",
      "tech_core": "它让图像奖励模型先讲清楚“为什么这张图好或不好”，再给分，从黑箱裁判升级成会给修改意见的设计总监。",
      "value": "适合图像生成、图片编辑和创意辅助平台，解决 reward model 只会打一分、不能指导模型和用户往哪改的问题。",
      "pm_suggestion": "如果你的生成产品还只给用户一个“重试”按钮，马上上线“生成-批改-改写提示词”闭环；这比单纯堆模型版本更能拉高成片率。"
    },
    {
      "id": 8,
      "title": "KnowRL: Boosting LLM Reasoning via Reinforcement Learning with Minimal-Sufficient Knowledge Guidance",
      "url": "https://huggingface.co/papers/2604.12627",
      "likes": 96,
      "date": "2026-04-19",
      "published_date": "Apr 14",
      "abstract": "RLVR improvesreasoningin largelanguage models, but its effectiveness is often limited by severereward sparsityon hard problems. Recenthint-based RLmethods mitigate sparsity by injecting partial solutions or abstract templates, yet they typically scale guidance by adding more tokens, which introduce redundancy, inconsistency, and extra training overhead. We propose KnowRL (Knowledge-GuidedReinforcement Learning), an RL training framework that treats hint design as aminimal-sufficient guidanceproblem. During RL training, KnowRL decomposes guidance intoatomic knowledge points(KPs) and usesConstrained Subset Search(CSS) to construct compact, interaction-aware subsets for training. We further identify apruning interaction paradox-- removing one KP may help while removing multiple such KPs can hurt -- and explicitly optimize for robustsubset curationunder this dependency structure. We train KnowRL-Nemotron-1.5B from OpenMath-Nemotron-1.5B. Across eightreasoningbenchmarks at the 1.5B scale, KnowRL-Nemotron-1.5B consistently outperforms strong RL and hinting baselines. Without KP hints at inference, KnowRL-Nemotron-1.5B reaches 70.08 average accuracy, already surpassing Nemotron-1.5B by +9.63 points; with selected KPs, performance improves to 74.16, establishing a new state of the art at this scale. The model, curated training data, and code are publicly available at https://github.com/Hasuer/KnowRL.",
      "github_url": "https://github.com/Hasuer/KnowRL",
      "org_tag": "Tianjin University",
      "dimension": "understanding",
      "tech_core": "它不再给推理模型塞一大坨提示，而是像教练挑战术板那样，只挑最少但关键的知识点组合去扶正训练。",
      "value": "适合数学推理、专业考试和复杂知识问答训练，解决 hint 越给越多、训练开销暴涨、模型反而被噪声知识带偏的问题。",
      "pm_suggestion": "如果你在做带提示的 RL 训练，马上把知识提示改成“最小充分集”筛选；提示越短越准，才有规模化训练价值。"
    },
    {
      "id": 9,
      "title": "FORGE:Fine-grained Multimodal Evaluation for Manufacturing Scenarios",
      "url": "https://huggingface.co/papers/2604.07413",
      "likes": 93,
      "date": "2026-04-19",
      "published_date": "Apr 8",
      "abstract": "The manufacturing sector is increasingly adoptingMultimodal Large Language Models(MLLMs) to transition from simple perception to autonomous execution, yet current evaluations fail to reflect the rigorous demands of real-world manufacturing environments. Progress is hindered by data scarcity and a lack offine-grained domain semanticsin existing datasets. To bridge this gap, we introduce FORGE. Wefirst construct a high-quality multimodal dataset that combines real-world 2D images and 3D point clouds, annotated withfine-grained domain semantics(e.g., exact model numbers). We then evaluate 18 state-of-the-art MLLMs across three manufacturing tasks, namelyworkpiece verification,structural surface inspection, andassembly verification, revealing significant performance gaps. Counter to conventional understanding, the bottleneck analysis shows thatvisual groundingis not the primary limiting factor. Instead, insufficientdomain-specific knowledgeis the key bottleneck, setting a clear direction for future research. Beyond evaluation, we show that our structured annotations can serve as an actionable training resource:supervised fine-tuningof a compact3B-parameter modelon our data yields up to 90.8% relative improvement in accuracy on held-out manufacturing scenarios, providing preliminary evidence for a practical pathway toward domain-adapted manufacturing MLLMs. The code and datasets are available at https://ai4manufacturing.github.io/forge-web.",
      "github_url": "https://github.com/AI4Manufacturing/FORGE",
      "org_tag": "University of Waterloo",
      "dimension": "multimodal",
      "tech_core": "它把制造业多模态评测拉到零件型号、表面缺陷、装配细节这种工业语义颗粒度，不再停留在“看见了一个螺丝”这种通用视觉层。",
      "value": "适合质检、装配核验和工业现场助手，解决通用 MLLM 在制造业里看得见却说不准、少行业知识就没法下结论的问题。",
      "pm_suggestion": "如果你想进制造业，别拿通用视觉模型直接卖；先做行业语义数据和小模型微调，不然试点一上产线就会翻车。"
    },
    {
      "id": 10,
      "title": "HY-World 2.0: A Multi-Modal World Model for Reconstructing, Generating, and Simulating 3D Worlds",
      "url": "https://huggingface.co/papers/2604.14268",
      "likes": 80,
      "date": "2026-04-19",
      "published_date": "Apr 15",
      "abstract": "We introduce HY-World 2.0, amulti-modal world modelframework that advances our prior project HY-World 1.0. HY-World 2.0 accommodates diverse input modalities, including text prompts, single-view images, multi-view images, and videos, and produces3D world representations. With text or single-view image inputs, the model performs world generation, synthesizing high-fidelity, navigable3D Gaussian Splatting(3DGS) scenes. This is achieved through a four-stage method: a) Panorama Generation withHY-Pano 2.0, b) Trajectory Planning withWorldNav, c) World Expansion withWorldStereo 2.0, and d) World Composition withWorldMirror 2.0. Specifically, we introduce key innovations to enhance panorama fidelity, enable 3D scene understanding and planning, and upgrade WorldStereo, ourkeyframe-based view generationmodel with consistent memory. We also upgrade WorldMirror, afeed-forward modelfor universal 3D prediction, by refining model architecture and learning strategy, enabling world reconstruction from multi-view images or videos. Also, we introduce WorldLens, a high-performance 3DGSrendering platformfeaturing a flexible engine-agnostic architecture, automatic IBL lighting, efficient collision detection, and training-rendering co-design, enablinginteractive explorationof 3D worlds with character support. Extensive experiments demonstrate that HY-World 2.0 achieves state-of-the-art performance on several benchmarks among open-source approaches, delivering results comparable to the closed-source model Marble. We release all model weights, code, and technical details to facilitate reproducibility and support further research on 3D world models.",
      "github_url": "https://github.com/Tencent-Hunyuan/HY-World-2.0",
      "org_tag": "🤗prithivMLmods/HY-World-2.0-Demo",
      "dimension": "robotics",
      "tech_core": "它想做的是一台 3D 世界生成与重建流水线：给文字、图片或视频，就能拼出可漫游、可交互、可继续扩展的 3D 世界。",
      "value": "适合数字孪生、游戏预演、虚拟展厅和机器人仿真，解决过去 3D 世界生成只能做静态 demo、难以继续导航和交互的断层问题。",
      "pm_suggestion": "如果你在做 3D 平台，别只展示漂亮截图，立刻把“生成后可漫游可碰撞可扩展”做成卖点；没有交互层，世界模型很难变成产品。"
    },
    {
      "id": 11,
      "title": "Rethinking On-Policy Distillation of Large Language Models: Phenomenology, Mechanism, and Recipe",
      "url": "https://huggingface.co/papers/2604.13016",
      "likes": 77,
      "date": "2026-04-19",
      "published_date": "Apr 14",
      "abstract": "On-policy distillation(OPD) has become a core technique in the post-training oflarge language models, yet its training dynamics remain poorly understood. This paper provides a systematic investigation of OPD dynamics and mechanisms. We first identify that two conditions govern whether OPD succeeds or fails: (i) the student and teacher should share compatible thinking patterns; and (ii) even with consistent thinking patterns and higher scores, the teacher must offer genuinely new capabilities beyond what the student has seen during training. We validate these findings throughweak-to-strong reverse distillation, showing that same-family 1.5B and 7B teachers are distributionally indistinguishable from the student's perspective. Probing into thetoken-level mechanism, we show that successful OPD is characterized by progressive alignment onhigh-probability tokensat student-visited states, a small shared token set that concentrates most of the probability mass (97%-99%). We further propose two practical strategies to recover failing OPD: off-policy cold start and teacher-aligned prompt selection. Finally, we show that OPD's apparent free lunch of densetoken-level rewardcomes at a cost, raising the question of whether OPD can scale tolong-horizon distillation.",
      "github_url": "https://github.com/thunlp/OPD",
      "org_tag": "Tsinghua NLP Group",
      "dimension": "efficiency",
      "tech_core": "这篇论文把蒸馏失败的根因说透了：老师和学生思维风格不兼容，或者老师根本没带来新能力时，蒸馏再久也只是白忙。",
      "value": "适合模型压缩和小模型升级，解决团队把大模型经验硬塞给小模型，却发现训练成本很高、收益却很低的问题。",
      "pm_suggestion": "如果你在做蒸馏，先筛选“同思维族谱且真有新增能力”的教师模型；老师选错，训练预算就是纯消耗。"
    },
    {
      "id": 12,
      "title": "Attention Sink in Transformers: A Survey on Utilization, Interpretation, and Mitigation",
      "url": "https://huggingface.co/papers/2604.10098",
      "likes": 74,
      "date": "2026-04-19",
      "published_date": "Apr 11",
      "abstract": "As the foundational architecture of modern machine learning,Transformershave driven remarkable progress across diverse AI domains. Despite their transformative impact, a persistent challenge across variousTransformersisAttention Sink(AS), in which a disproportionate amount of attention is focused on a small subset of specific yet uninformative tokens. AS complicatesinterpretability, significantly affecting the training andinference dynamics, and exacerbates issues such ashallucinations. In recent years, substantial research has been dedicated to understanding and harnessing AS. However, a comprehensive survey that systematically consolidates AS-related research and offers guidance for future advancements remains lacking. To address this gap, we present the first survey on AS, structured around three key dimensions that define the current research landscape: Fundamental Utilization,Mechanistic Interpretation, andStrategic Mitigation. Our work provides a pivotal contribution by clarifying key concepts and guiding researchers through the evolution and trends of the field. We envision this survey as a definitive resource, empowering researchers and practitioners to effectively manage AS within the current Transformer paradigm, while simultaneously inspiring innovative advancements for the next generation ofTransformers. The paper list of this work is available at https://github.com/ZunhaiSu/Awesome-Attention-Sink.",
      "github_url": "https://github.com/ZunhaiSu/Awesome-Attention-Sink",
      "org_tag": "LongCat",
      "dimension": "safety",
      "tech_core": "它总结了 Transformer 里一种顽固坏习惯：注意力老盯着少数没营养的 token，不仅浪费算力，还会把理解和生成一起带偏。",
      "value": "适合长上下文、检索增强和高可靠生成系统，解决模型明明给了足够信息，却总被模板 token 或噪声位置吸走注意力的问题。",
      "pm_suggestion": "如果你的长文档产品经常答非所问，优先排查 attention sink，而不是继续加上下文长度；焦点歪了，喂再多内容也没用。"
    },
    {
      "id": 13,
      "title": "OmniShow: Unifying Multimodal Conditions for Human-Object Interaction Video Generation",
      "url": "https://huggingface.co/papers/2604.11804",
      "likes": 69,
      "date": "2026-04-19",
      "published_date": "Apr 13",
      "abstract": "In this work, we studyHuman-Object Interaction Video Generation(HOIVG), which aims to synthesize high-quality human-object interaction videos conditioned on text, reference images, audio, and pose. This task holds significant practical value for automating content creation in real-world applications, such as e-commerce demonstrations, short video production, and interactive entertainment. However, existing approaches fail to accommodate all these requisite conditions. We present OmniShow, anend-to-end frameworktailored for this practical yet challenging task, capable of harmonizingmultimodal conditionsand delivering industry-grade performance. To overcome the trade-off between controllability and quality, we introduceUnified Channel-wise Conditioningfor efficient image and pose injection, andGated Local-Context Attentionto ensure precise audio-visual synchronization. To effectively address data scarcity, we develop aDecoupled-Then-Joint Trainingstrategy that leverages a multi-stage training process withmodel mergingto efficiently harness heterogeneous sub-task datasets. Furthermore, to fill the evaluation gap in this field, we establishHOIVG-Bench, a dedicated and comprehensive benchmark for HOIVG. Extensive experiments demonstrate that OmniShow achieves overall state-of-the-art performance across various multimodal conditioning settings, setting a solid standard for the emerging HOIVG task.",
      "github_url": "https://github.com/Correr-Zhou/OmniShow",
      "org_tag": "ByteDance",
      "dimension": "multimodal",
      "tech_core": "它把人、物、姿态、音频和参考图这些条件揉进同一套交互视频生成框架里，重点是让“人怎么拿、怎么碰、怎么动”都能被控住。",
      "value": "适合电商演示、虚拟主播和短视频内容工厂，解决人货互动视频过去很难同时兼顾动作合理、音画同步和商品可控展示的问题。",
      "pm_suggestion": "如果你做商品视频或数字人，优先押注“可控人货互动”而不是纯风格炫技；品牌客户付费买的是可控转化素材。"
    },
    {
      "id": 14,
      "title": "EXAONE 4.5 Technical Report",
      "url": "https://huggingface.co/papers/2604.08644",
      "likes": 62,
      "date": "2026-04-19",
      "published_date": "Apr 9",
      "abstract": "This technical report introduces EXAONE 4.5, the first open-weightvision language modelreleased by LG AI Research. EXAONE 4.5 is architected by integrating a dedicatedvisual encoderinto the existing EXAONE 4.0 framework, enabling nativemultimodal pretrainingover both visual and textual modalities. The model is trained on large-scale data with careful curation, particularly emphasizingdocument-centric corporathat align with LG's strategic application domains. This targeted data design enables substantial performance gains indocument understandingand related tasks, while also delivering broad improvements across general language capabilities. EXAONE 4.5 extendscontext lengthup to 256K tokens, facilitatinglong-context reasoningand enterprise-scale use cases. Comparative evaluations demonstrate that EXAONE 4.5 achieves competitive performance ingeneral benchmarkswhile outperforming state-of-the-art models of similar scale indocument understandingandKorean contextual reasoning. As part of LG's ongoing effort toward practical industrial deployment, EXAONE 4.5 is designed to be continuously extended with additional domains and application scenarios to advance AI for a better life.",
      "github_url": "https://github.com/LG-AI-EXAONE/EXAONE-4.5",
      "org_tag": null,
      "dimension": "understanding",
      "tech_core": "它把视觉编码器和长上下文一起塞进企业向模型里，核心不是追综合榜，而是把文档理解、韩语推理和长材料处理这些企业刚需做扎实。",
      "value": "适合企业知识助手、合同审阅和文档工作流自动化，解决通用模型能聊但不擅长长文档、多页面材料和区域语言业务语境的问题。",
      "pm_suggestion": "如果你服务企业办公场景，把文档理解和长上下文放到 roadmap 前排；这类能力比通用聊天人格更接近采购预算。"
    },
    {
      "id": 15,
      "title": "SpatialEvo: Self-Evolving Spatial Intelligence via Deterministic Geometric Environments",
      "url": "https://huggingface.co/papers/2604.14144",
      "likes": 61,
      "date": "2026-04-19",
      "published_date": "Apr 15",
      "abstract": "Spatial reasoning over three-dimensional scenes is a core capability for embodied intelligence, yet continuous model improvement remains bottlenecked by the cost of geometric annotation. Theself-evolving paradigmoffers a promising path, but its reliance on model consensus to constructpseudo-labelscauses training to reinforce rather than correct the model's own geometric errors. We identify a property unique to3D spatial reasoningthat circumvents this limitation: ground truth is a deterministic consequence of the underlying geometry, computable exactly frompoint cloudsandcamera poseswithout any model involvement. Building on this insight, we present SpatialEvo, a self-evolving framework for3D spatial reasoning, centered on theDeterministic Geometric Environment(DGE). TheDGEformalizes 16 spatial reasoning task categories under explicit geometric validation rules and converts unannotated 3D scenes into zero-noiseinteractive oracles, replacing model consensus with objective physical feedback. A singleshared-parameter policyco-evolves across questioner and solver roles underDGEconstraints: the questioner generates physically valid spatial questions grounded in scene observations, while the solver derives precise answers againstDGE-verified ground truth. Atask-adaptive schedulerendogenously concentrates training on the model's weakest categories, producing adynamic curriculumwithout manual design. Experiments across nine benchmarks demonstrate that SpatialEvo achieves the highest average score at both 3B and 7B scales, with consistent gains on spatial reasoning benchmarks and no degradation on general visual understanding.",
      "github_url": "https://github.com/ZJU-REAL/SpatialEvo",
      "org_tag": null,
      "dimension": "robotics",
      "tech_core": "它抓住 3D 空间任务一个天然优势：很多答案可以直接由几何规则算出来，所以能用“物理真值”而不是模型互相投票来持续自训练。",
      "value": "适合空间推理、AR 导航和具身感知模型训练，解决伪标签自训练容易把旧错越学越牢的系统性问题。",
      "pm_suggestion": "如果你做空间智能，把可计算几何反馈做成训练引擎；能从环境直接验真的任务，别再依赖模型自我催眠式打标签。"
    },
    {
      "id": 16,
      "title": "OccuBench: Evaluating AI Agents on Real-World Professional Tasks via Language World Models",
      "url": "https://huggingface.co/papers/2604.10866",
      "likes": 58,
      "date": "2026-04-19",
      "published_date": "Apr 13",
      "abstract": "AI agents are expected to perform professional work across hundreds of occupational domains (from emergency department triage to nuclear reactor safety monitoring to customs import processing), yet existing benchmarks can only evaluate agents in the few domains where public environments exist. We introduce OccuBench, a benchmark covering 100 real-world professional task scenarios across 10 industry categories and 65 specialized domains, enabled byLanguage World Models(LWMs) that simulate domain-specific environments through LLM-driven tool response generation. Ourmulti-agent synthesis pipelineautomatically produces evaluation instances with guaranteed solvability, calibrated difficulty, and document-grounded diversity. OccuBench evaluates agents along two complementary dimensions:task completionacross professional domains andenvironmental robustnessunder controlledfault injection(explicit errors, implicit data degradation, andmixed faults). We evaluate 15 frontier models across 8 model families and find that: (1) no single model dominates all industries, as each has a distinct occupational capability profile; (2)implicit faults(truncated data, missing fields) are harder than bothexplicit errors(timeouts, 500s) andmixed faults, because they lack overt error signals and require the agent to independently detect data degradation; (3) larger models, newer generations, and higherreasoning effortconsistently improve performance. GPT-5.2 improves by 27.5 points from minimal to maximumreasoning effort; and (4) strong agents are not necessarily strong environment simulators.Simulator qualityis critical for LWM-based evaluation reliability. OccuBench provides the first systematic cross-industry evaluation of AI agents on professional occupational tasks.",
      "github_url": "https://github.com/GregxmHu/OccuBench",
      "org_tag": "Qwen",
      "dimension": "safety",
      "tech_core": "它用语言世界模型伪装出大量专业岗位环境，让 Agent 在跨行业真实任务里暴露长板短板，尤其能测出那些“不报错但数据已坏掉”的暗坑。",
      "value": "适合专业 Copilot、行业 Agent 和企业采购评测，解决过去只能在少数公开环境里测 Agent，根本看不出职业场景适配度的问题。",
      "pm_suggestion": "如果你准备卖行业 Agent，先做岗位画像和隐性故障测试；跨行业平均分没意义，客户只关心它能不能顶住自己的脏场景。"
    },
    {
      "id": 17,
      "title": "Strips as Tokens: Artist Mesh Generation with Native UV Segmentation",
      "url": "https://huggingface.co/papers/2604.09132",
      "likes": 50,
      "date": "2026-04-19",
      "published_date": "Apr 10",
      "abstract": "Recent advancements inautoregressive transformershave demonstrated remarkable potential for generating artist-quality meshes. However, thetoken ordering strategiesemployed by existing methods typically fail to meet professional artist standards, where coordinate-based sorting yields inefficiently long sequences, and patch-based heuristics disrupt the continuous edge flow and structural regularity essential for high-quality modeling. To address these limitations, we propose Strips as Tokens (SATO), a novel framework with a token ordering strategy inspired bytriangle strips. By constructing the sequence as a connected chain of faces that explicitly encodesUV boundaries, our method naturally preserves the organized edge flow and semantic layout characteristic of artist-created meshes. A key advantage of this formulation is its unified representation, enabling the same token sequence to be decoded into either a triangle or quadrilateral mesh. This flexibility facilitates joint training on both data types: large-scale triangle data provides fundamental structural priors, while high-quality quad data enhances the geometric regularity of the outputs. Extensive experiments demonstrate that SATO consistently outperforms prior methods in terms ofgeometric quality,structural coherence, andUV segmentation.",
      "github_url": "https://github.com/Xrvitd/SATO",
      "org_tag": "DEEMOS Technology",
      "dimension": "multimodal",
      "tech_core": "它重新定义了 3D 网格生成的 token 顺序，不再机械按坐标排，而是按更接近艺术家建模习惯的面条带顺序去生成。",
      "value": "适合游戏资产生产、3D 创作工具和数字内容管线，解决自动生成网格虽然能看，但拓扑乱、UV 差、进不了专业制作流程的问题。",
      "pm_suggestion": "如果你做 3D 生成，停止只卷外观截图，优先把 mesh 可编辑性和 UV 质量做成核心指标；能进 DCC 流程才有商业价值。"
    },
    {
      "id": 18,
      "title": "Matrix-Game 3.0: Real-Time and Streaming Interactive World Model with Long-Horizon Memory",
      "url": "https://huggingface.co/papers/2604.08995",
      "likes": 46,
      "date": "2026-04-19",
      "published_date": "Apr 10",
      "abstract": "With the advancement of interactive video generation,diffusion modelshave increasingly demonstrated their potential asworld models. However, existing approaches still struggle to simultaneously achieve memory-enabledlong-term temporal consistencyand high-resolutionreal-time generation, limiting their applicability in real-world scenarios. To address this, we present Matrix-Game 3.0, a memory-augmented interactive world model designed for 720p real-time longform video generation. Building upon Matrix-Game 2.0, we introduce systematic improvements across data, model, and inference. First, we develop an upgraded industrial-scale infinite data engine that integrates Unreal Engine-based synthetic data, large-scale automated collection from AAA games, and real-world video augmentation to produce high-qualityVideo-Pose-Action-Promptquadruplet data at scale. Second, we propose a training framework for long-horizon consistency: by modelingprediction residualsand re-injecting imperfect generated frames during training, the base model learns self-correction; meanwhile,camera-aware memory retrievaland injection enable the base model to achieve long horizon spatiotemporal consistency. Third, we design a multi-segmentautoregressive distillationstrategy based onDistribution Matching Distillation(DMD), combined withmodel quantizationandVAE decoder pruning, to achieve efficient real-time inference. Experimental results show that Matrix-Game 3.0 achieves up to 40 FPSreal-time generationat 720p resolution with a 5B model, while maintaining stable memory consistency over minute-long sequences. Scaling up to a 2x14B model further improves generation quality, dynamics, and generalization. Our approach provides a practical pathway toward industrial-scale deployableworld models.",
      "github_url": null,
      "org_tag": null,
      "dimension": "robotics",
      "tech_core": "它把世界模型往工业可部署方向拽了一大步：一边保留长时间记忆一致性，一边靠蒸馏、量化和剪枝把 720p 实时交互跑起来。",
      "value": "适合互动 NPC、游戏生成、仿真训练和实时数字世界产品，解决世界模型过去不是画质差就是太慢，根本进不了在线系统。",
      "pm_suggestion": "如果你做实时交互世界，立刻把“记忆一致性 + 推理延迟”当双 KPI 管；只能看不能实时响应的世界模型，留不住用户。"
    },
    {
      "id": 19,
      "title": "Uni-ViGU: Towards Unified Video Generation and Understanding via A Diffusion-Based Video Generator",
      "url": "https://huggingface.co/papers/2604.08121",
      "likes": 42,
      "date": "2026-04-19",
      "published_date": "Apr 9",
      "abstract": "Unifiedmultimodal modelsintegrating visual understanding and generation face a fundamental challenge: visual generation incurs substantially higher computational costs than understanding, particularly for video. This imbalance motivates us to invert the conventional paradigm: rather than extending understanding-centric MLLMs to support generation, we propose Uni-ViGU, a framework that unifiesvideo generationand understanding by extending a video generator as the foundation. We introduce aunified flow methodthat performscontinuous flow matchingfor video anddiscrete flow matchingfor text within a single process, enabling coherent multimodal generation. We further propose amodality-driven MoE-based framework that augmentsTransformer blockswith lightweight layers for text generation while preserving generative priors. To repurpose generation knowledge for understanding, we design abidirectional trainingmechanism with two stages:Knowledge Recallreconstructs input prompts to leverage learned text-video correspondences, whileCapability Refinementfine-tunes on detailed captions to establish discriminative shared representations. Experiments demonstrate that Uni-ViGU achieves competitive performance on bothvideo generationand understanding, validating generation-centric architectures as a scalable path toward unified multimodal intelligence. Project Page and Code: https://fr0zencrane.github.io/uni-vigu-page/.",
      "github_url": "https://github.com/Fr0zenCrane/Uni-ViGU",
      "org_tag": null,
      "dimension": "multimodal",
      "tech_core": "它反过来走了一条新路：不再拿理解模型去补生成，而是直接以视频生成器为底座，再把理解能力长出来。",
      "value": "适合视频创作助手、可解释生成和视频问答一体化产品，解决生成模型和理解模型分家后，功能割裂、上下游能力无法共享的问题。",
      "pm_suggestion": "如果你在做视频 AI 平台，开始验证“生成底座统一理解”的路线；视频算力最贵，双模型并行烧钱的架构很难长期成立。"
    },
    {
      "id": 20,
      "title": "Audio-Omni: Extending Multi-modal Understanding to Versatile Audio Generation and Editing",
      "url": "https://huggingface.co/papers/2604.10708",
      "likes": 40,
      "date": "2026-04-19",
      "published_date": "Apr 12",
      "abstract": "Recent progress in multimodal models has spurred rapid advances inaudio understanding, generation, and editing. However, these capabilities are typically addressed by specialized models, leaving the development of a truly unified framework that can seamlessly integrate all three tasks underexplored. While some pioneering works have explored unifyingaudio understandingand generation, they often remain confined to specific domains. To address this, we introduce Audio-Omni, the first end-to-end framework to unify generation and editing across general sound, music, and speech domains, with integrated multi-modal understanding capabilities. Our architecture synergizes a frozenMultimodal Large Language Modelfor high-level reasoning with a trainableDiffusion Transformerfor high-fidelity synthesis. To overcome the critical data scarcity inaudio editing, we constructAudioEdit, a newlarge-scale datasetcomprising over one million meticulously curated editing pairs. Extensive experiments demonstrate that Audio-Omni achieves state-of-the-art performance across a suite of benchmarks, outperforming prior unified approaches while achieving performance on par with or superior to specialized expert models. Beyond its core capabilities, Audio-Omni exhibits remarkable inherited capabilities, including knowledge-augmented reasoning generation, in-context generation, and zero-shot cross-lingual control foraudio generation, highlighting a promising direction towarduniversal generative audio intelligence. The code, model, and dataset will be publicly released on https://zeyuet.github.io/Audio-Omni.",
      "github_url": "https://github.com/ZeyueT/Audio-Omni",
      "org_tag": "🎛️Zeyue7/Audio-Omni",
      "dimension": "multimodal",
      "tech_core": "它把声音理解、生成、编辑三条线合并成一个通用音频系统，还靠大规模编辑数据把“改音频”这件最难的活补齐了。",
      "value": "适合播客生产、音乐工具、语音内容运营和有声交互产品，解决过去做音频要在理解、生成、剪辑模型之间频繁切换的问题。",
      "pm_suggestion": "如果你做音频产品，别再把生成和编辑拆成两套引擎；统一工作流才配做创作者主工具，也才配单独收费。"
    }
  ],
  "opportunities": {
    "strategies": [
      {
        "icon": "💰",
        "title": "企业流程里的“真专业 Agent”开始有现金流",
        "type": "cashcow",
        "action": "别再泛讲万能助手了，把资源集中到有明确岗位边界的专业 Agent：GUI 操作、制造核验、专业工种流程、企业文档处理。这些场景已经出现完整训练-评测-部署链条，客户也愿意为稳定交付买单。",
        "relatedPapers": [4, 9, 14, 15, 16]
      },
      {
        "icon": "🏋️",
        "title": "世界模型进入“能上线才算数”的效率革命",
        "type": "efficiency",
        "action": "所有世界模型项目都要把实时性、记忆一致性和可交互渲染绑成一个工程目标；只会离线生成 demo 的团队该砍，能把 3D/视频世界跑成在线系统的团队该加预算。",
        "relatedPapers": [10, 15, 18]
      },
      {
        "icon": "🌊",
        "title": "多模态创作软件会从“生成器”升级成“带批改的工作台”",
        "type": "blueocean",
        "action": "下一代内容工具不该只会出图出视频，而要会理解参考素材、自动批改结果、继续编辑并保持跨模态一致。谁先把视频、图像、音频做成统一工作台，谁就能吃掉创作者主工作流。",
        "relatedPapers": [2, 7, 13, 19, 20]
      }
    ],
    "newProducts": [
      {
        "icon": "🆕",
        "title": "岗位级 Agent 验收台",
        "description": "把真实职业任务、隐性故障注入、轨迹审计和 GUI 回放做成一体化验收平台。企业在采购 Agent 前，先按岗位模板压测“能不能做、会不会闯祸、哪里会卡住”。",
        "scenes": ["客服与运营岗位自动化", "金融与政务流程审核", "企业 Agent 采购验收"],
        "relatedPapers": [4, 6, 16]
      },
      {
        "icon": "🆕",
        "title": "3D 世界工坊",
        "description": "输入一句话、几张图或一段视频，就生成可漫游、可碰撞、可继续扩建的 3D 世界，再直接接数字人、游戏交互或机器人仿真。它不是展示工具，而是世界资产生产线。",
        "scenes": ["游戏关卡预制", "品牌虚拟展厅", "机器人仿真训练"],
        "relatedPapers": [1, 10, 15, 18]
      },
      {
        "icon": "🆕",
        "title": "多模态创作总控台",
        "description": "把图像、视频、音频的生成、批改、编辑和参考素材管理放进同一个工作台。系统会先生成，再像创意总监一样指出问题、自动改提示词、继续局部返工。",
        "scenes": ["短视频广告制作", "电商素材工厂", "播客与音乐内容生产"],
        "relatedPapers": [2, 7, 13, 19, 20]
      },
      {
        "icon": "🆕",
        "title": "工业知识视觉质检员",
        "description": "面向工厂现场的行业多模态助手：看图、看点云、读工艺知识后直接给出零件核验、装配检查和缺陷定位结果，并把证据链同步到质检系统。",
        "scenes": ["产线质检", "来料验收", "装配复核"],
        "relatedPapers": [9, 14, 17]
      }
    ]
  }
};
