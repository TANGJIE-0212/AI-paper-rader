const PAPER_DATA = {
  "week": "2026-W13",
  "dateRange": "2026-03-22 to 2026-03-28",
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
      "title": "MinerU-Diffusion: Rethinking Document OCR as Inverse Rendering via Diffusion Decoding",
      "url": "https://huggingface.co/papers/2603.22458",
      "likes": 130,
      "date": "2026-03-30",
      "published_date": "Mar 23",
      "abstract": "Optical character recognition (OCR) has evolved from line-level transcription to structured document parsing, requiring models to recoverlong-form sequencescontaining layout, tables, and formulas. Despite recent advances invision-language models, most existing systems rely onautoregressive decoding, which introduces sequential latency and amplifies error propagation in long documents. In this work, we revisit document OCR from aninverse rendering perspective, arguing that left-to-right causal generation is an artifact of serialization rather than an intrinsic property of the task. Motivated by this insight, we propose MinerU-Diffusion, a unifieddiffusion-based frameworkthat replaces autoregressive sequential decoding withparallel diffusion denoisingunder visual conditioning. MinerU-Diffusion employs ablock-wise diffusion decoderand anuncertainty-driven curriculum learningstrategy to enable stable training and efficient long-sequence inference. Extensive experiments demonstrate that MinerU-Diffusion consistently improves robustness while achieving up to 3.2x faster decoding compared to autoregressive baselines. Evaluations on the proposed Semantic Shuffle benchmark further confirm its reduced dependence on linguistic priors and stronger visual OCR capability.",
      "github_url": "https://github.com/opendatalab/MinerU-Diffusion",
      "org_tag": null,
      "dimension": "multimodal",
      "tech_core": "核心思路：这篇工作提出了一种新的模型方法，重点提升多模态相关任务中的效果、效率或稳定性。",
      "value": "归类到多模态。这类能力适合进入文档理解、视觉分析、视频理解和 UI 交互等真实场景。",
      "pm_suggestion": "重点看它是否能转化为图像、视频、OCR 或多模态交互产品能力。"
    },
    {
      "id": 2,
      "title": "Omni-WorldBench: Towards a Comprehensive Interaction-Centric Evaluation for World Models",
      "url": "https://huggingface.co/papers/2603.22212",
      "likes": 122,
      "date": "2026-03-30",
      "published_date": "Mar 23",
      "abstract": "Video--basedworld modelshave emerged along two dominant paradigms:video generationand3D reconstruction. However, existing evaluation benchmarks either focus narrowly onvisual fidelityand text--video alignment for generative models, or rely on static3D reconstructionmetrics that fundamentally neglect temporal dynamics. We argue that the future of world modeling lies in4D generation, which jointly models spatial structure andtemporal evolution. In this paradigm, the core capability isinteractive response: the ability to faithfully reflect how interaction actions drivestate transitionsacross space and time. Yet no existing benchmark systematically evaluates this critical dimension. To address this gap, we propose Omni--WorldBench, a comprehensive benchmark specifically designed to evaluate theinteractive responsecapabilities ofworld modelsin 4D settings. Omni--WorldBench comprises two key components: Omni--WorldSuite, a systematic prompt suite spanning diverse interaction levels and scene types; and Omni--Metrics, anagent-based evaluationframework that quantifies world modeling capabilities by measuring thecausal impactof interaction actions on both final outcomes and intermediate state evolution trajectories. We conduct extensive evaluations of 18 representativeworld modelsacross multiple paradigms. Our analysis reveals critical limitations of currentworld modelsininteractive response, providing actionable insights for future research. Omni-WorldBench will be publicly released to foster progress in interactive 4D world modeling.",
      "github_url": "https://github.com/AMAP-ML/Omni-WorldBench",
      "org_tag": "alibaba-inc",
      "dimension": "safety",
      "tech_core": "核心思路：这篇工作提出了一套面向可靠性与安全的评测基准，不再只看结果分数，而是更强调交互过程、状态变化或真实任务表现。",
      "value": "归类到可靠性与安全。这类能力更适合沉淀为评测、风控和可信层，直接影响用户对产品结果的信任。",
      "pm_suggestion": "把它当成评测和风控能力候选，优先用于可靠性建设。"
    },
    {
      "id": 3,
      "title": "Speed by Simplicity: A Single-Stream Architecture for Fast Audio-Video Generative Foundation Model",
      "url": "https://huggingface.co/papers/2603.21986",
      "likes": 118,
      "date": "2026-03-30",
      "published_date": "Mar 23",
      "abstract": "We present daVinci-MagiHuman, an open-sourceaudio-video generative foundation modelfor human-centric generation. daVinci-MagiHuman jointly generates synchronized video and audio using asingle-stream Transformerthat processes text, video, and audio within a unified token sequence viaself-attentiononly. This single-stream design avoids the complexity of multi-stream or cross-attention architectures while remaining easy to optimize with standard training and inference infrastructure. The model is particularly strong in human-centric scenarios, producing expressive facial performance, natural speech-expression coordination, realistic body motion, and precise audio-video synchronization. It supportsmultilingual spoken generationacross Chinese (Mandarin and Cantonese), English, Japanese, Korean, German, and French. For efficient inference, we combine the single-stream backbone withmodel distillation,latent-space super-resolution, and aTurbo VAE decoder, enabling generation of a 5-second 256p video in 2 seconds on a single H100 GPU. In automatic evaluation, daVinci-MagiHuman achieves the highestvisual qualityandtext alignmentamong leading open models, along with the lowest word error rate (14.60%) forspeech intelligibility. In pairwise human evaluation, it achieves win rates of 80.0% against Ovi 1.1 and 60.9% against LTX 2.3 over 2000 comparisons. We open-source the complete model stack, including the base model, the distilled model, the super-resolution model, and the inference codebase.",
      "github_url": "https://github.com/GAIR-NLP/daVinci-MagiHuman",
      "org_tag": "🎬SII-GAIR/daVinci-MagiHuman",
      "dimension": "multimodal",
      "tech_core": "核心思路：这篇工作提出了一种新的模型方法，重点提升多模态相关任务中的效果、效率或稳定性。",
      "value": "归类到多模态。这类能力适合进入文档理解、视觉分析、视频理解和 UI 交互等真实场景。",
      "pm_suggestion": "重点看它是否能转化为图像、视频、OCR 或多模态交互产品能力。"
    },
    {
      "id": 4,
      "title": "PixelSmile: Toward Fine-Grained Facial Expression Editing",
      "url": "https://huggingface.co/papers/2603.25728",
      "likes": 114,
      "date": "2026-03-30",
      "published_date": "Mar 26",
      "abstract": "Fine-grainedfacial expression editinghas long been limited by intrinsicsemantic overlap. To address this, we construct the Flex Facial Expression (FFE) dataset with continuous affective annotations and establishFFE-Benchto evaluate structural confusion, editing accuracy, linear controllability, and the trade-off between expression editing and identity preservation. We proposePixelSmile, adiffusion frameworkthat disentangles expression semantics via fully symmetricjoint training.PixelSmilecombines intensity supervision withcontrastive learningto produce stronger and more distinguishable expressions, achieving precise and stable linear expression control throughtextual latent interpolation. Extensive experiments demonstrate thatPixelSmileachieves superior disentanglement and robust identity preservation, confirming its effectiveness for continuous, controllable, and fine-grained expression editing, while naturally supporting smoothexpression blending.",
      "github_url": "https://github.com/Ammmob/PixelSmile",
      "org_tag": "Fudan University",
      "dimension": "multimodal",
      "tech_core": "核心思路：这篇工作提出了一种新的技术方案，重点提升多模态相关任务中的效果、效率或稳定性。",
      "value": "归类到多模态。这类能力适合进入文档理解、视觉分析、视频理解和 UI 交互等真实场景。",
      "pm_suggestion": "重点看它是否能转化为图像、视频、OCR 或多模态交互产品能力。"
    },
    {
      "id": 5,
      "title": "Intern-S1-Pro: Scientific Multimodal Foundation Model at Trillion Scale",
      "url": "https://huggingface.co/papers/2603.25040",
      "likes": 113,
      "date": "2026-03-30",
      "published_date": "Mar 26",
      "abstract": "We introduce Intern-S1-Pro, the first one-trillion-parameter scientificmultimodal foundation model. Scaling to this unprecedented size, the model delivers a comprehensive enhancement across both general and scientific domains. Beyond stronger reasoning and image-text understanding capabilities, its intelligence is augmented with advanced agent capabilities. Simultaneously, itsscientific expertisehas been vastly expanded to master over 100specialized tasksacross critical science fields, including chemistry, materials, life sciences, and earth sciences. Achieving this massive scale is made possible by the robust infrastructure support of XTuner and LMDeploy, which facilitates highly efficientReinforcement Learning(RL) training at the 1-trillion parameter level while ensuring strict precision consistency between training and inference. By seamlessly integrating these advancements, Intern-S1-Pro further fortifies the fusion of general andspecialized intelligence, working as a Specializable Generalist, demonstrating its position in the top tier of open-source models for general capabilities, while outperforming proprietary models in the depth of specialized scientific tasks.",
      "github_url": "https://github.com/InternLM/Intern-S1",
      "org_tag": null,
      "dimension": "understanding",
      "tech_core": "核心思路：这篇工作提出了一种新的模型方法，重点提升理解与记忆相关任务中的效果、效率或稳定性。",
      "value": "归类到理解与记忆。这类能力适合做深研究、复杂推理和长上下文决策，是高价值知识型产品的底层能力。",
      "pm_suggestion": "优先判断它是否能提升推理、记忆或长上下文能力，再决定是否值得纳入核心能力路线。"
    },
    {
      "id": 6,
      "title": "Astrolabe: Steering Forward-Process Reinforcement Learning for Distilled Autoregressive Video Models",
      "url": "https://huggingface.co/papers/2603.17051",
      "likes": 106,
      "date": "2026-03-30",
      "published_date": "Mar 17",
      "abstract": "Distilled autoregressive (AR) video models enable efficient streaming generation but frequently misalign with human visual preferences. Existingreinforcement learning(RL) frameworks are not naturally suited to these architectures, typically requiring either expensive re-distillationor solver-coupled reverse-process optimization that introduces considerable memory and computational overhead. We present Astrolabe, an efficient online RL framework tailored for distilled AR models. To overcome existing bottlenecks, we introduce aforward-process RLformulation based onnegative-aware fine-tuning. By contrasting positive and negative samples directly at inference endpoints, this approach establishes an implicit policy improvement direction without requiring reverse-process unrolling. To scale this alignment to long videos, we propose astreaming trainingscheme that generates sequences progressively via a rollingKV-cache, applying RL updates exclusively to local clip windows while conditioning on prior context to ensure long-range coherence. Finally, to mitigatereward hacking, we integrate amulti-reward objectivestabilized byuncertainty-aware selective regularizationanddynamic reference updates. Extensive experiments demonstrate that our method consistently enhances generation quality across multiple distilled AR video models, serving as a robust and scalable alignment solution.",
      "github_url": "https://github.com/franklinz233/Astrolabe",
      "org_tag": null,
      "dimension": "understanding",
      "tech_core": "核心思路：这篇工作提出了一种新的模型方法，重点提升理解与记忆相关任务中的效果、效率或稳定性。",
      "value": "归类到理解与记忆。这类能力适合做深研究、复杂推理和长上下文决策，是高价值知识型产品的底层能力。",
      "pm_suggestion": "优先判断它是否能提升推理、记忆或长上下文能力，再决定是否值得纳入核心能力路线。"
    },
    {
      "id": 7,
      "title": "HopChain: Multi-Hop Data Synthesis for Generalizable Vision-Language Reasoning",
      "url": "https://huggingface.co/papers/2603.17024",
      "likes": 106,
      "date": "2026-03-30",
      "published_date": "Mar 17",
      "abstract": "VLMs show strongmultimodal capabilities, but they still struggle with fine-grained vision-language reasoning. We find thatlong CoT reasoningexposes diverse failure modes, including perception, reasoning, knowledge, and hallucination errors, which can compound across intermediate steps. However, most existing vision-language data used forRLVRdoes not involve complex reasoning chains that rely onvisual evidencethroughout, leaving these weaknesses largely unexposed. We therefore propose HopChain, a scalable framework for synthesizing multi-hop vision-language reasoning data specifically forRLVRtraining of VLMs. Each synthesized multi-hop query forms a logically dependent chain of instance-grounded hops, where earlier hops establish the instances, sets, or conditions needed for later hops, while the final answer remains a specific, unambiguous number suitable forverifiable rewards. We add the multi-hop data synthesized by HopChain to the originalRLVRdata used to trainQwen3.5-35B-A3BandQwen3.5-397B-A17B, and compare againstRLVRon the originalRLVRdata alone across 24 benchmarks spanningSTEMandPuzzle,General VQA,Text RecognitionandDocument Understanding, andVideo Understanding. Although this multi-hop data is not synthesized to target any specific benchmark, adding it improves 20 out of 24 benchmarks on both models, indicating broad and generalizable gains. To demonstrate that full chained queries are important, we replace them with half-multi-hop or single-hop variants, reducing the 24-benchmark average accuracy by 5.3 and 7.0 points, respectively. Multi-hop training also strengthens long-CoT vision-language reasoning, with gains peaking at more than 50 accuracy points in the ultra-long-CoT regime. These experiments establish HopChain as an effective, scalable framework for synthesizing multi-hop data that improves generalizable vision-language reasoning.",
      "github_url": null,
      "org_tag": "Qwen",
      "dimension": "multimodal",
      "tech_core": "核心思路：这篇工作提出了一种新的技术方案，重点提升多模态相关任务中的效果、效率或稳定性。",
      "value": "归类到多模态。这类能力适合进入文档理解、视觉分析、视频理解和 UI 交互等真实场景。",
      "pm_suggestion": "重点看它是否能转化为图像、视频、OCR 或多模态交互产品能力。"
    },
    {
      "id": 8,
      "title": "OpenResearcher: A Fully Open Pipeline for Long-Horizon Deep Research Trajectory Synthesis",
      "url": "https://huggingface.co/papers/2603.20278",
      "likes": 90,
      "date": "2026-03-30",
      "published_date": "Mar 17",
      "abstract": "Trainingdeep research agentsrequireslong-horizon trajectoriesthat interleave search, evidence aggregation, and multi-step reasoning. However, existing data collection pipelines typically rely on proprietary web APIs, making large-scale trajectory synthesis costly, unstable, and difficult to reproduce. We present OpenResearcher, a reproducible pipeline that decouples one-time corpus bootstrapping from multi-turn trajectory synthesis and executes thesearch-and-browse loopentirely offline using three explicitbrowser primitives: search, open, and find, over a 15M-document corpus. UsingGPT-OSS-120Bas the teacher model, we synthesize over 97K trajectories, including a substantial long-horizon tail with 100+ tool calls.Supervised fine-tuninga30B-A3B backboneon these trajectories achieves 54.8\\% accuracy onBrowseComp-Plus, a +34.0 point improvement over the base model, while remaining competitive onBrowseComp,GAIA, andxbench-DeepSearch. Because the environment is offline and fully instrumented, it also enables controlled analysis, where our study reveals practical insights into deep research pipeline design, including data filtering strategies, agent configuration choices, and how retrieval success relates to final answer accuracy. We release the pipeline, synthesized trajectories, model checkpoints, and the offline search environment at https://github.com/TIGER-AI-Lab/OpenResearcher.",
      "github_url": "https://github.com/TIGER-AI-Lab/OpenResearcher",
      "org_tag": "TIGER-Lab",
      "dimension": "understanding",
      "tech_core": "核心思路：这篇工作把理解与记忆问题组织成可复用的流程框架，通过更明确的步骤、工具或阶段划分提升整体效果。",
      "value": "归类到理解与记忆。这类能力适合做深研究、复杂推理和长上下文决策，是高价值知识型产品的底层能力。",
      "pm_suggestion": "优先判断它是否能提升推理、记忆或长上下文能力，再决定是否值得纳入核心能力路线。"
    },
    {
      "id": 9,
      "title": "CUA-Suite: Massive Human-annotated Video Demonstrations for Computer-Use Agents",
      "url": "https://huggingface.co/papers/2603.24440",
      "likes": 87,
      "date": "2026-03-30",
      "published_date": "Mar 25",
      "abstract": "Computer-use agents(CUAs) hold great promise for automating complex desktop workflows, yet progress toward general-purpose agents is bottlenecked by the scarcity of continuous, high-quality human demonstration videos. Recent work emphasizes that continuous video, not sparse screenshots, is the critical missing ingredient for scaling these agents. However, the largest existing open dataset, ScaleCUA, contains only 2 million screenshots, equating to less than 20 hours of video. To address this bottleneck, we introduce CUA-Suite, a large-scale ecosystem ofexpert video demonstrationsand dense annotations for professional desktopcomputer-use agents. At its core is VideoCUA, which provides approximately 10,000 human-demonstrated tasks across 87 diverse applications with continuous 30 fps screen recordings, kinematic cursor traces, and multi-layerfed reasoning annotations, totaling approximately 55 hours and 6 million frames of expert video. Unlike sparse datasets that capture only final click coordinates, these continuous video streams preserve the full temporal dynamics of human interaction, forming a superset of information that can be losslessly transformed into the formats required by existing agent frameworks. CUA-Suite further provides two complementary resources: UI-Vision, a rigorous benchmark for evaluating grounding and planning capabilities in CUAs, and GroundCUA, a large-scale grounding dataset with 56K annotated screenshots and over 3.6 million UI element annotations. Preliminary evaluation reveals that current foundation action models struggle substantially with professional desktop applications (~60% task failure rate). Beyond evaluation, CUA-Suite's richmultimodal corpussupports emerging research directions including generalist screen parsing, continuous spatial control, video-based reward modeling, andvisual world models. All data and models are publicly released.",
      "github_url": "https://github.com/ServiceNow/GroundCUA/tree/main/VideoCUA",
      "org_tag": "ServiceNow",
      "dimension": "multimodal",
      "tech_core": "核心思路：这篇工作构建了面向多模态的大规模数据集或演示集，用更真实、更连续的样本去推动后续模型训练和评测。",
      "value": "归类到多模态。这类能力适合进入文档理解、视觉分析、视频理解和 UI 交互等真实场景。",
      "pm_suggestion": "重点看它是否能转化为图像、视频、OCR 或多模态交互产品能力。"
    },
    {
      "id": 10,
      "title": "WildWorld: A Large-Scale Dataset for Dynamic World Modeling with Actions and Explicit State toward Generative ARPG",
      "url": "https://huggingface.co/papers/2603.23497",
      "likes": 86,
      "date": "2026-03-30",
      "published_date": "Mar 24",
      "abstract": "Dynamical systems theoryandreinforcement learningview world evolution aslatent-state dynamicsdriven by actions, withvisual observationsproviding partial information about the state. Recentvideo world modelsattempt to learn thisaction-conditioned dynamicsfrom data. However, existing datasets rarely match the requirement: they typically lack diverse and semantically meaningfulaction spaces, and actions are directly tied tovisual observationsrather than mediated by underlying states. As a result, actions are often entangled with pixel-level changes, making it difficult for models to learn structured world dynamics and maintain consistent evolution over long horizons. In this paper, we propose WildWorld, a large-scale action-conditioned world modeling dataset with explicitstate annotations, automatically collected from aphotorealistic AAA action role-playing game(Monster Hunter: Wilds). WildWorld contains over 108 million frames and features more than 450 actions, including movement, attacks, and skill casting, together with synchronizedper-frame annotationsofcharacter skeletons,world states,camera poses, anddepth maps. We further derive WildBench to evaluate models throughAction FollowingandState Alignment. Extensive experiments reveal persistent challenges in modeling semantically rich actions and maintaininglong-horizon state consistency, highlighting the need forstate-aware video generation. The project page is https://shandaai.github.io/wildworld-project/.",
      "github_url": "https://github.com/ShandaAI/WildWorld",
      "org_tag": "Shanda AI Research Tokyo",
      "dimension": "multimodal",
      "tech_core": "核心思路：这篇工作构建了面向多模态的大规模数据集或演示集，用更真实、更连续的样本去推动后续模型训练和评测。",
      "value": "归类到多模态。这类能力适合进入文档理解、视觉分析、视频理解和 UI 交互等真实场景。",
      "pm_suggestion": "重点看它是否能转化为图像、视频、OCR 或多模态交互产品能力。"
    },
    {
      "id": 11,
      "title": "Look Where It Matters: High-Resolution Crops Retrieval for Efficient VLMs",
      "url": "https://huggingface.co/papers/2603.16932",
      "likes": 84,
      "date": "2026-03-30",
      "published_date": "Mar 14",
      "abstract": "Vision-language models(VLMs) typically process images at a native high-resolution, forcing a trade-off between accuracy and computational efficiency: high-resolution inputs capture fine details but incur significant computational costs, while low-resolution inputs advocate for efficiency, they potentially miss critical visual information, like small text. We present AwaRes, aspatial-on-demand frameworkthat resolves this accuracy-efficiency trade-off by operating on a low-resolution global view and usingtool-callingto retrieve only high-resolution segments needed for a given query. We construct supervised data automatically: a judge compares low- vs.\\ high-resolution answers to label whether cropping is needed, and anoracle grounding modellocalizes the evidence for the correct answer, which we map to adiscrete crop setto formmulti-turn tool-use trajectories. We train our framework withcold-start SFTfollowed bymulti-turn GRPOwith acomposite rewardthat combines semantic answer correctness with explicit crop-cost penalties. Project page: https://nimrodshabtay.github.io/AwaRes",
      "github_url": "https://github.com/NimrodShabtay/AwaRes",
      "org_tag": "IBM Research",
      "dimension": "multimodal",
      "tech_core": "核心思路：这篇工作提出了一种新的技术方案，重点提升多模态相关任务中的效果、效率或稳定性。",
      "value": "归类到多模态。这类能力适合进入文档理解、视觉分析、视频理解和 UI 交互等真实场景。",
      "pm_suggestion": "重点看它是否能转化为图像、视频、OCR 或多模态交互产品能力。"
    },
    {
      "id": 12,
      "title": "LongCat-Flash-Prover: Advancing Native Formal Reasoning via Agentic Tool-Integrated Reinforcement Learning",
      "url": "https://huggingface.co/papers/2603.21065",
      "likes": 75,
      "date": "2026-03-30",
      "published_date": "Mar 22",
      "abstract": "We introduce LongCat-Flash-Prover, a flagship 560-billion-parameter open-source Mixture-of- Experts (MoE) model that advancesNative Formal ReasoninginLean4throughagentic tool-integrated reasoning(TIR). We decompose thenative formal reasoningtask into three independent formal capabilities, i.e.,auto-formalization,sketching, andproving. To facilitate these capabilities, we propose aHybrid-Experts Iteration Frameworkto expand high-quality task trajectories, including generating a formal statement based on a given informal problem, producing a whole-proof directly from the statement, or a lemma-style sketch. During agentic RL, we present aHierarchical Importance Sampling Policy Optimization(HisPO) algorithm, which aims to stabilize the MoE model training on such long-horizon tasks. It employs agradient maskingstrategy that accounts for thepolicy stalenessand the inherent train-inference engine discrepancies at both sequence and token levels. Additionally, we also incorporatetheorem consistencyandlegality detectionmechanisms to eliminatereward hackingissues. Extensive evaluations show that our LongCat-Flash-Prover sets a new state-of-the-art for open-weights models in bothauto-formalizationand theoremproving. Demonstrating remarkable sample efficiency, it achieves a 97.1% pass rate on MiniF2F-Test using only 72 inference budget per problem. On more challenging benchmarks, it solves 70.8% of ProverBench and 41.5% of PutnamBench with no more than 220 attempts per problem, significantly outperforming existing open-weights baselines.",
      "github_url": "https://github.com/meituan-longcat/LongCat-Flash-Prover",
      "org_tag": "LongCat",
      "dimension": "understanding",
      "tech_core": "核心思路：这篇工作提出了一种新的模型方法，重点提升理解与记忆相关任务中的效果、效率或稳定性。",
      "value": "归类到理解与记忆。这类能力适合做深研究、复杂推理和长上下文决策，是高价值知识型产品的底层能力。",
      "pm_suggestion": "优先判断它是否能提升推理、记忆或长上下文能力，再决定是否值得纳入核心能力路线。"
    },
    {
      "id": 13,
      "title": "SpecEyes: Accelerating Agentic Multimodal LLMs via Speculative Perception and Planning",
      "url": "https://huggingface.co/papers/2603.23483",
      "likes": 58,
      "date": "2026-03-30",
      "published_date": "Mar 24",
      "abstract": "Agentic multimodal large language models(MLLMs) (e.g., OpenAI o3 and Gemini Agentic Vision) achieve remarkable reasoning capabilities throughiterative visual tool invocation. However, the cascaded perception, reasoning, and tool-calling loops introduce significant sequential overhead. This overhead, termedagentic depth, incurs prohibitive latency and seriously limits system-level concurrency. To this end, we propose SpecEyes, an agentic-levelspeculative accelerationframework that breaks this sequential bottleneck. Our key insight is that a lightweight, tool-free MLLM can serve as a speculative planner to predict the execution trajectory, enabling early termination of expensive tool chains without sacrificing accuracy. To regulate thisspeculative planning, we introduce acognitive gatingmechanism based onanswer separability, which quantifies the model's confidence for self-verification without requiring oracle labels. Furthermore, we design aheterogeneous parallel funnelthat exploits thestateless concurrencyof the small model to mask thestateful serial executionof the large model, maximizing system throughput. Extensive experiments onV* Bench,HR-Bench, andPOPEdemonstrate that SpecEyes achieves 1.1-3.35x speedup over the agentic baseline while preserving or even improving accuracy (up to +6.7%), thereby boosting serving throughput under concurrent workloads.",
      "github_url": "https://github.com/MAC-AutoML/SpecEyes",
      "org_tag": null,
      "dimension": "multimodal",
      "tech_core": "核心思路：这篇工作提出了一种新的技术方案，重点提升多模态相关任务中的效果、效率或稳定性。",
      "value": "归类到多模态。这类能力适合进入文档理解、视觉分析、视频理解和 UI 交互等真实场景。",
      "pm_suggestion": "重点看它是否能转化为图像、视频、OCR 或多模态交互产品能力。"
    },
    {
      "id": 14,
      "title": "Calibri: Enhancing Diffusion Transformers via Parameter-Efficient Calibration",
      "url": "https://huggingface.co/papers/2603.24800",
      "likes": 57,
      "date": "2026-03-30",
      "published_date": "Mar 25",
      "abstract": "In this paper, we uncover the hidden potential ofDiffusion Transformers(DiTs) to significantly enhance generative tasks. Through an in-depth analysis of thedenoising process, we demonstrate that introducing a singlelearned scaling parametercan significantly improve the performance ofDiT blocks. Building on this insight, we propose Calibri, aparameter-efficient approachthat optimally calibrates DiT components to elevategenerative quality. Calibri frames DiT calibration as ablack-box reward optimizationproblem, which is efficiently solved using anevolutionary algorithmand modifies just ~100 parameters. Experimental results reveal that despite its lightweight design, Calibri consistently improves performance across various text-to-image models. Notably, Calibri also reduces the inference steps required for image generation, all while maintaining high-quality outputs.",
      "github_url": "https://github.com/v-gen-ai/Calibri",
      "org_tag": "Visual Generative AI group",
      "dimension": "understanding",
      "tech_core": "核心思路：这篇工作提出了一种新的模型方法，重点提升理解与记忆相关任务中的效果、效率或稳定性。",
      "value": "归类到理解与记忆。这类能力适合做深研究、复杂推理和长上下文决策，是高价值知识型产品的底层能力。",
      "pm_suggestion": "优先判断它是否能提升推理、记忆或长上下文能力，再决定是否值得纳入核心能力路线。"
    },
    {
      "id": 15,
      "title": "From Static Templates to Dynamic Runtime Graphs: A Survey of Workflow Optimization for LLM Agents",
      "url": "https://huggingface.co/papers/2603.22386",
      "likes": 53,
      "date": "2026-03-30",
      "published_date": "Mar 23",
      "abstract": "Large language model (LLM)-based systems are becoming increasingly popular for solving tasks by constructingexecutable workflowsthat interleave LLM calls, information retrieval, tool use, code execution, memory updates, and verification. This survey reviews recent methods for designing and optimizing such workflows, which we treat asagentic computation graphs(ACGs). We organize the literature based on whenworkflow structureis determined, where structure refers to which components or agents are present, how they depend on each other, and how information flows between them. This lens distinguishesstatic methods, which fix a reusable workflow scaffold before deployment, fromdynamic methods, which select, generate, or revise the workflow for a particular run before or during execution. We further organize prior work along three dimensions: when structure is determined, what part of the workflow is optimized, and which evaluation signals guide optimization (e.g.,task metrics,verifier signals, preferences, ortrace-derived feedback). We also distinguish reusable workflow templates, run-specific realized graphs, and execution traces, separating reusable design choices from the structures actually deployed in a given run and from realized runtime behavior. Finally, we outline a structure-aware evaluation perspective that complements downstreamtask metricswith graph-level properties,execution cost,robustness, andstructural variationacross inputs. Our goal is to provide a clear vocabulary, a unified framework for positioning new methods, a more comparable view of existing body of literature, and a more reproducible evaluation standard for future work inworkflow optimizations for LLM agents.",
      "github_url": "https://github.com/IBM/awesome-agentic-workflow-optimization",
      "org_tag": "IBM",
      "dimension": "action",
      "tech_core": "核心思路：这篇工作系统梳理了行动能力方向的方法脉络，把问题拆成更清晰的模块、结构和评估维度。",
      "value": "归类到行动能力。这类能力更接近可执行系统，适合落到 Agent、自动化流程和工具调用产品中。",
      "pm_suggestion": "优先关注它是否能直接提升 agent、工具调用或自动化执行的效果。"
    },
    {
      "id": 16,
      "title": "VideoDetective: Clue Hunting via both Extrinsic Query and Intrinsic Relevance for Long Video Understanding",
      "url": "https://huggingface.co/papers/2603.22285",
      "likes": 50,
      "date": "2026-03-30",
      "published_date": "Mar 23",
      "abstract": "Longvideo understandingremains challenging formultimodal large language models(MLLMs) due to limitedcontext windows, which necessitate identifying sparsequery-relevant video segments. However, existing methods predominantly localize clues based solely on the query, overlooking the video's intrinsic structure and varying relevance across segments. To address this, we propose VideoDetective, a framework that integrates query-to-segment relevance and inter-segment affinity for effective clue hunting in long-video question answering. Specifically, we divide a video into various segments and represent them as avisual-temporal affinity graphbuilt fromvisual similarityandtemporal proximity. We then perform aHypothesis-Verification-Refinement loopto estimate relevance scores of observed segments to the query and propagate them to unseen segments, yielding a global relevance distribution that guides the localization of the most critical segments for final answering with sparse observation. Experiments show our method consistently achieves substantial gains across a wide range of mainstream MLLMs on representative benchmarks, with accuracy improvements of up to 7.5% onVideoMME-long. Our code is available at https://videodetective.github.io/",
      "github_url": "https://github.com/yangruoliu/VideoDetective",
      "org_tag": "Nanjing University",
      "dimension": "multimodal",
      "tech_core": "核心思路：这篇工作提出了一种新的技术方案，重点提升多模态相关任务中的效果、效率或稳定性。",
      "value": "归类到多模态。这类能力适合进入文档理解、视觉分析、视频理解和 UI 交互等真实场景。",
      "pm_suggestion": "重点看它是否能转化为图像、视频、OCR 或多模态交互产品能力。"
    },
    {
      "id": 17,
      "title": "TerraScope: Pixel-Grounded Visual Reasoning for Earth Observation",
      "url": "https://huggingface.co/papers/2603.19039",
      "likes": 50,
      "date": "2026-03-30",
      "published_date": "Mar 19",
      "abstract": "Vision-language models(VLMs) have shown promise in earth observation (EO), yet they struggle with tasks that require grounding complex spatial reasoning in precise pixel-level visual representations. To address this problem, we introduce TerraScope, a unified VLM that delivers pixel-groundedgeospatial reasoningwith two key capabilities: (1)modality-flexible reasoning: it handles single-modality inputs (optical or SAR) and adaptively fuses different modalities into the reasoning process when both are available; (2)multi-temporal reasoning: it integrates temporal sequences for change analysis across multiple time points. In addition, we curate Terra-CoT, a large-scale dataset containing 1 million samples with pixel-level masks embedded in reasoning chains across multiple sources. We also proposeTerraScope-Bench, the first benchmark for pixel-groundedgeospatial reasoningwith six sub-tasks that evaluates both answer accuracy and mask quality to ensure authenticpixel-grounded reasoning. Experiments show that TerraScope significantly outperforms existing VLMs on pixel-groundedgeospatial reasoningwhile providing interpretable visual evidence.",
      "github_url": "https://github.com/shuyansy/Earth-Observation-VLMs",
      "org_tag": null,
      "dimension": "multimodal",
      "tech_core": "核心思路：这篇工作提出了一种新的技术方案，重点提升多模态相关任务中的效果、效率或稳定性。",
      "value": "归类到多模态。这类能力适合进入文档理解、视觉分析、视频理解和 UI 交互等真实场景。",
      "pm_suggestion": "重点看它是否能转化为图像、视频、OCR 或多模态交互产品能力。"
    },
    {
      "id": 18,
      "title": "RealRestorer: Towards Generalizable Real-World Image Restoration with Large-Scale Image Editing Models",
      "url": "https://huggingface.co/papers/2603.25502",
      "likes": 49,
      "date": "2026-03-30",
      "published_date": "Mar 26",
      "abstract": "Image restorationunderreal-world degradationsis critical for downstream tasks such as autonomous driving and object detection. However, existing restoration models are often limited by the scale and distribution of their training data, resulting in poor generalization to real-world scenarios. Recently, large-scale image editing models have shown strong generalization ability in restoration tasks, especially forclosed-source modelslike Nano Banana Pro, which can restore images while preserving consistency. Nevertheless, achieving such performance with those large universal models requires substantial data and computational costs. To address this issue, we construct alarge-scale datasetcovering nine common real-world degradation types and train a state-of-the-artopen-source modelto narrow the gap with closed-source alternatives. Furthermore, we introduceRealIR-Bench, which contains 464 real-world degraded images and tailored evaluation metrics focusing ondegradation removalandconsistency preservation. Extensive experiments demonstrate our model ranks first among open-source methods, achieving state-of-the-art performance.",
      "github_url": "https://github.com/yfyang007/RealRestorer",
      "org_tag": "dericky286/RealRestorer-Demo",
      "dimension": "multimodal",
      "tech_core": "核心思路：这篇工作提出了一种新的模型方法，重点提升多模态相关任务中的效果、效率或稳定性。",
      "value": "归类到多模态。这类能力适合进入文档理解、视觉分析、视频理解和 UI 交互等真实场景。",
      "pm_suggestion": "重点看它是否能转化为图像、视频、OCR 或多模态交互产品能力。"
    },
    {
      "id": 19,
      "title": "DA-Flow: Degradation-Aware Optical Flow Estimation with Diffusion Models",
      "url": "https://huggingface.co/papers/2603.23499",
      "likes": 48,
      "date": "2026-03-30",
      "published_date": "Mar 24",
      "abstract": "Optical flowmodels trained on high-quality data often degrade severely when confronted with real-world corruptions such as blur, noise, and compression artifacts. To overcome this limitation, we formulate Degradation-AwareOptical Flow, a new task targeting accurate dense correspondence estimation from real-world corrupted videos. Our key insight is that the intermediate representations ofimage restorationdiffusion modelsare inherentlycorruption-awarebut lack temporal awareness. To address this limitation, we lift the model to attend across adjacent frames via fullspatio-temporal attention, and empirically demonstrate that the resulting features exhibitzero-shot correspondencecapabilities. Based on this finding, we present DA-Flow, ahybrid architecturethat fuses these diffusion features with convolutional features within aniterative refinementframework. DA-Flow substantially outperforms existingoptical flowmethods under severe degradation across multiple benchmarks.",
      "github_url": "https://github.com/cvlab-kaist/DA-Flow",
      "org_tag": "KAIST AI",
      "dimension": "multimodal",
      "tech_core": "核心思路：这篇工作提出了一种新的模型方法，重点提升多模态相关任务中的效果、效率或稳定性。",
      "value": "归类到多模态。这类能力适合进入文档理解、视觉分析、视频理解和 UI 交互等真实场景。",
      "pm_suggestion": "重点看它是否能转化为图像、视频、OCR 或多模态交互产品能力。"
    },
    {
      "id": 20,
      "title": "Voxtral TTS",
      "url": "https://huggingface.co/papers/2603.25551",
      "likes": 46,
      "date": "2026-03-30",
      "published_date": "Mar 26",
      "abstract": "We introduce Voxtral TTS, an expressive multilingualtext-to-speechmodel that generates natural speech from as little as 3 seconds of reference audio. Voxtral TTS adopts a hybrid architecture that combinesauto-regressive generationofsemantic speech tokenswithflow-matchingforacoustic tokens. These tokens are encoded and decoded with Voxtral Codec, aspeech tokenizertrained from scratch with a hybridVQ-FSQ quantization scheme. In human evaluations conducted by native speakers, Voxtral TTS is preferred for multilingualvoice cloningdue to its naturalness and expressivity, achieving a 68.4\\% win rate over ElevenLabs Flash v2.5. We release the model weights under a CC BY-NC license.",
      "github_url": null,
      "org_tag": "Mistral AI_",
      "dimension": "action",
      "tech_core": "核心思路：这篇工作提出了一种新的模型方法，重点提升行动能力相关任务中的效果、效率或稳定性。",
      "value": "归类到行动能力。这类能力更接近可执行系统，适合落到 Agent、自动化流程和工具调用产品中。",
      "pm_suggestion": "优先关注它是否能直接提升 agent、工具调用或自动化执行的效果。"
    }
  ],
  "opportunities": {
    "strategies": [
      {
        "icon": "🌊",
        "title": "多模态开始从演示能力走向主交互",
        "type": "blueocean",
        "observation": "本周多模态是最密集的主题之一，共出现 12 篇，代表论文包括 MinerU-Diffusion: Rethinking Document OCR as Inverse Rendering via Diffusion Decoding, Speed by Simplicity: A Single-Stream Architecture for Fast Audio-Video Generative Foundation Model。",
        "action": "不要再把图像、视频和视觉推理当作附加功能。下一波真正好用的 AI 产品，会把多模态作为原生输入层。",
        "relatedPapers": [
          1,
          3,
          4
        ]
      },
      {
        "icon": "👀",
        "title": "深研究工作流正在变得更长更结构化",
        "type": "special",
        "observation": "本周理解与记忆是最密集的主题之一，共出现 5 篇，代表论文包括 Intern-S1-Pro: Scientific Multimodal Foundation Model at Trillion Scale, Astrolabe: Steering Forward-Process Reinforcement Learning for Distilled Autoregressive Video Models。",
        "action": "市场还缺一类不像聊天框、更像真实研究系统的产品：能持续检索、比对、验证并在多轮中逐步收敛答案。",
        "relatedPapers": [
          5,
          6,
          8
        ]
      },
      {
        "icon": "💰",
        "title": "智能体执行层进入可产品化区间",
        "type": "cashcow",
        "observation": "本周行动能力是最密集的主题之一，共出现 2 篇，代表论文包括 From Static Templates to Dynamic Runtime Graphs: A Survey of Workflow Optimization for LLM Agents, Voxtral TTS。",
        "action": "如果你正在做工作流智能体、AI 副驾或自动化系统，这已经不是远期概念，而是可以立刻落产品的能力层。",
        "relatedPapers": [
          15,
          20
        ]
      },
      {
        "icon": "👀",
        "title": "评测质量正在变成产品差异点",
        "type": "special",
        "observation": "本周可靠性与安全是最密集的主题之一，共出现 1 篇，代表论文包括 Omni-WorldBench: Towards a Comprehensive Interaction-Centric Evaluation for World Models。",
        "action": "评测基准、护栏和可信层不再只是基础设施议题，它们越来越决定用户是否相信产品输出。",
        "relatedPapers": [
          2
        ]
      }
    ],
    "newProducts": [
      {
        "icon": "🆕",
        "title": "多模态研究台",
        "description": "一个能查看文档、截图、图表、视频和 UI 流程的多模态工作台，用来输出有依据的总结和后续动作。 本周在多模态方向共出现 12 篇相关论文，说明这条技术栈正在加速成熟。",
        "scenes": [
          "设计评审",
          "文档分析",
          "内容运营"
        ],
        "relatedPapers": [
          1,
          3,
          4,
          7
        ]
      },
      {
        "icon": "🆕",
        "title": "深研究工作空间",
        "description": "一个面向多源证据收集、结论核验和长篇结构化回答生成的产品，而不是一次性聊天回复。 本周在理解与记忆方向共出现 5 篇相关论文，说明这条技术栈正在加速成熟。",
        "scenes": [
          "分析师团队",
          "战略研究",
          "技术情报"
        ],
        "relatedPapers": [
          5,
          6,
          8,
          12
        ]
      },
      {
        "icon": "🆕",
        "title": "智能体工作流工作台",
        "description": "一个用来设计、追踪和部署智能体工作流的工作台，支持任务拆分、工具调用和多智能体编排。 本周在行动能力方向共出现 2 篇相关论文，说明这条技术栈正在加速成熟。",
        "scenes": [
          "运维自动化",
          "研究流程",
          "内部 AI 助手"
        ],
        "relatedPapers": [
          15,
          20
        ]
      },
      {
        "icon": "🆕",
        "title": "AI 可信层",
        "description": "一层在结果触达用户或下游系统前做审计、打风险分和暴露薄弱推理环节的可靠性能力。 本周在可靠性与安全方向共出现 1 篇相关论文，说明这条技术栈正在加速成熟。",
        "scenes": [
          "企业 AI",
          "客户支持",
          "合规敏感流程"
        ],
        "relatedPapers": [
          2
        ]
      }
    ]
  }
};
