import { useState, useEffect } from "react";
import { ExternalLink, ChevronDown, Code, FileText } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/FadeInView";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  venueShort: string;
  year: number;
  links: { label: string; url: string }[];
}

const publications: Publication[] = [
  {
    "title": "SocialEval: Evaluating Social Intelligence of Large Language Models",
    "authors": "Jinfeng Zhou, Yuxuan Chen, Yihan Shi, Xuanming Zhang, Leqi Lei, Yi Feng, Zexuan Xiong, Miao Yan, Xunzhi Wang, Yaru Cao, Jianing Yin, Shuai Wang, Quanyu Dai, Zhenhua Dong, Hongning Wang, Minlie Huang",
    "venue": "Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)",
    "year": 2025,
    "links": [
      { "label": "Paper", "url": "https://aclanthology.org/2025.acl-long.1496/" },
      { "label": "Code", "url": "https://github.com/thu-coai/SocialEval" },
      { "label": "arXiv", "url": "https://arxiv.org/abs/2506.00900" }
    ]
  },
  {
    "title": "Crisp: Cognitive Restructuring of Negative Thoughts through Multi-turn Supportive Dialogues",
    "authors": "Jinfeng Zhou, Yuxuan Chen, Jianing Yin, Yongkang Huang, Yihan Shi, Xikun Zhang, Libiao Peng, Rongsheng Zhang, Tangjie Lv, Zhipeng Hu, Hongning Wang, Minlie Huang",
    "venue": "Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing",
    "year": 2025,
    "links": [
      { "label": "Paper", "url": "https://aclanthology.org/2025.emnlp-main.1652/" },
      { "label": "Code", "url": "https://github.com/thu-coai/Crisp" },
      { "label": "arXiv", "url": "https://arxiv.org/abs/2504.17238" }
    ]
  },
  {
    "title": "HPSS: Heuristic Prompting Strategy Search for LLM Evaluators",
    "authors": "Bosi Wen, Pei Ke, Yufei Sun, Cunxiang Wang, Xiaotao Gu, Jinfeng Zhou, Jie Tang, Hongning Wang, Minlie Huang",
    "venue": "Findings of the Association for Computational Linguistics: ACL 2025",
    "year": 2025,
    "links": [
      { "label": "Paper", "url": "https://aclanthology.org/2025.findings-acl.1282/" },
      { "label": "Code", "url": "https://github.com/thu-coai/HPSS" }
    ]
  },
  {
    "title": "CharacterBench: Benchmarking Character Customization of Large Language Models",
    "authors": "Jinfeng Zhou, Yongkang Huang, Bosi Wen, Guanqun Bi, Yuxuan Chen, Pei Ke, Zhuang Chen, Xiyao Xiao, Libiao Peng, Kuntian Tang, Rongsheng Zhang, Le Zhang, Tangjie Lv, Zhipeng Hu, Hongning Wang, Minlie Huang",
    "venue": "The 39th Annual AAAI Conference on Artificial Intelligence (AAAI 2025)",
    "year": 2025,
    "links": [
      { "label": "Paper", "url": "https://ojs.aaai.org/index.php/AAAI/article/view/34806" },
      { "label": "Code", "url": "https://github.com/thu-coai/CharacterBench" },
      { "label": "arXiv", "url": "https://arxiv.org/abs/2412.11912" }
    ]
  },
  {
    "title": "Think Socially via Cognitive Reasoning",
    "authors": "Jinfeng Zhou, Zheyu Chen, Shuai Wang, Quanyu Dai, Zhenhua Dong, Hongning Wang, Minlie Huang",
    "venue": "arXiv preprint",
    "year": 2025,
    "links": [
      { "label": "Paper", "url": "https://arxiv.org/abs/2509.22546" },
      { "label": "Code", "url": "https://github.com/thu-coai/CogFlow" }
    ]
  },
  {
    "title": "EmoBench: Evaluating the Emotional Intelligence of Large Language Models",
    "authors": "Sahand Sabour, Siyang Liu, Zheyuan Zhang, June Liu, Jinfeng Zhou, Alvionna Sunaryo, Tatia Lee, Rada Mihalcea, Minlie Huang",
    "venue": "Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)",
    "year": 2024,
    "links": [
      { "label": "Paper", "url": "https://aclanthology.org/2024.acl-long.326/" },
      { "label": "Code", "url": "https://github.com/Sahandfer/EmoBench" },
      { "label": "arXiv", "url": "https://arxiv.org/abs/2402.12071" }
    ]
  },
  {
    "title": "ToMBench: Benchmarking Theory of Mind in Large Language Models",
    "authors": "Zhuang Chen, Jincenzi Wu, Jinfeng Zhou, Bosi Wen, Guanqun Bi, Gongyao Jiang, Yaru Cao, Mengting Hu, Yunghwei Lai, Zexuan Xiong, Minlie Huang",
    "venue": "Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)",
    "year": 2024,
    "links": [
      { "label": "Paper", "url": "https://aclanthology.org/2024.acl-long.847/" },
      { "label": "Code", "url": "https://github.com/zhchen18/ToMBench" }
    ]
  },
  {
    "title": "CharacterGLM: Customizing Social Characters with Large Language Models",
    "authors": "Jinfeng Zhou, Zhuang Chen, Dazhen Wan, Bosi Wen, Yi Song, Jifan Yu, Yongkang Huang, Pei Ke, Guanqun Bi, Libiao Peng, JiaMing Yang, Xiyao Xiao, Sahand Sabour, Xiaohan Zhang, Wenjing Hou, Yijia Zhang, Yuxiao Dong, Hongning Wang, Jie Tang, Minlie Huang",
    "venue": "Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing: Industry Track",
    "year": 2024,
    "links": [
      { "label": "Paper", "url": "https://aclanthology.org/2024.emnlp-industry.107/" },
      { "label": "Code", "url": "https://github.com/thu-coai/CharacterGLM-6B" },
      { "label": "arXiv", "url": "https://arxiv.org/abs/2311.16832" }
    ]
  },
  {
    "title": "Depression Detection in Clinical Interviews with LLM-Empowered Structural Element Graph",
    "authors": "Zhuang Chen, Jiawen Deng, Jinfeng Zhou, Jincenzi Wu, Tieyun Qian, Minlie Huang",
    "venue": "Proceedings of the 2024 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies (Volume 1: Long Papers)",
    "year": 2024,
    "links": [
      { "label": "Paper", "url": "https://aclanthology.org/2024.naacl-long.452/" }
    ]
  },
  {
    "title": "Facilitating Multi-turn Emotional Support Conversation with Positive Emotion Elicitation: A Reinforcement Learning Approach",
    "authors": "Jinfeng Zhou, Zhuang Chen, Bo Wang, Minlie Huang",
    "venue": "Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)",
    "year": 2023,
    "links": [
      { "label": "Paper", "url": "https://aclanthology.org/2023.acl-long.96/" },
      { "label": "Code", "url": "https://github.com/jfzhouyoo/Supporter" }
    ]
  },
  {
    "title": "CASE: Aligning Coarse-to-Fine Cognition and Affection for Empathetic Response Generation",
    "authors": "Jinfeng Zhou, Chujie Zheng, Bo Wang, Zheng Zhang, Minlie Huang",
    "venue": "Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)",
    "year": 2023,
    "links": [
      { "label": "Paper", "url": "https://aclanthology.org/2023.acl-long.457/" },
      { "label": "Code", "url": "https://github.com/jfzhouyoo/CASE" }
    ]
  },
  {
    "title": "CR-GIS: Improving Conversational Recommendation via Goal-aware Interest Sequence Modeling",
    "authors": "Jinfeng Zhou, Bo Wang, Zhitong Yang, Dongming Zhao, Kun Huang, Ruifang He, Yuexian Hou",
    "venue": "Proceedings of the 29th International Conference on Computational Linguistics",
    "year": 2022,
    "links": [
      { "label": "Paper", "url": "https://aclanthology.org/2022.coling-1.32/" }
    ]
  },
  {
    "title": "TopKG: Target-oriented Dialog via Global Planning on Knowledge Graph",
    "authors": "Zhitong Yang, Bo Wang, Jinfeng Zhou, Yue Tan, Dongming Zhao, Kun Huang, Ruifang He, Yuexian Hou",
    "venue": "Proceedings of the 29th International Conference on Computational Linguistics",
    "year": 2022,
    "links": [
      { "label": "Paper", "url": "https://aclanthology.org/2022.coling-1.62/" }
    ]
  },
  {
    "title": "CDConv: A Benchmark for Contradiction Detection in Chinese Conversations",
    "authors": "Chujie Zheng, Jinfeng Zhou, Yinhe Zheng, Libiao Peng, Zhen Guo, Wenquan Wu, Zheng-Yu Niu, Hua Wu, Minlie Huang",
    "venue": "Proceedings of the 2022 Conference on Empirical Methods in Natural Language Processing",
    "year": 2022,
    "links": [
      { "label": "Paper", "url": "https://aclanthology.org/2022.emnlp-main.2/" },
      { "label": "Code", "url": "https://github.com/thu-coai/CDConv" }
    ]
  },
  {
    "title": "Aligning Recommendation and Conversation via Dual Imitation",
    "authors": "Jinfeng Zhou, Bo Wang, Minlie Huang, Dongming Zhao, Kun Huang, Ruifang He, Yuexian Hou",
    "venue": "Proceedings of the 2022 Conference on Empirical Methods in Natural Language Processing",
    "year": 2022,
    "links": [
      { "label": "Paper", "url": "https://aclanthology.org/2022.emnlp-main.36/" }
    ]
  },
  {
    "title": "CRFR: Improving Conversational Recommender Systems via Flexible Fragments Reasoning on Knowledge Graphs",
    "authors": "Jinfeng Zhou, Bo Wang, Ruifang He, Yuexian Hou",
    "venue": "Proceedings of the 2021 Conference on Empirical Methods in Natural Language Processing",
    "year": 2021,
    "links": [
      { "label": "Paper", "url": "https://aclanthology.org/2021.emnlp-main.355/" },
      { "label": "Code", "url": "https://github.com/jfzhouyoo/CRFR" }
    ]
  }
];

const highlightAuthor = (authors: string, name = "Your Name") => {
  const parts = authors.split(name);
  if (parts.length === 1) return <>{authors}</>;
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && <strong className="text-foreground font-semibold">{name}</strong>}
          {part}
        </span>
      ))}
    </>
  );
};

const linkIcon = (label: string) => {
  if (label.toLowerCase().includes("code")) return <Code size={10} strokeWidth={1.5} />;
  if (label.toLowerCase().includes("arxiv")) return <FileText size={10} strokeWidth={1.5} />;
  return <ExternalLink size={10} strokeWidth={1.5} />;
};

const PublicationsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);

  useEffect(() => {
    const onBefore = () => setIsPrinting(true);
    const onAfter = () => setIsPrinting(false);
    window.addEventListener("beforeprint", onBefore);
    window.addEventListener("afterprint", onAfter);
    return () => {
      window.removeEventListener("beforeprint", onBefore);
      window.removeEventListener("afterprint", onAfter);
    };
  }, []);

  const visiblePubs = isPrinting ? publications : publications.slice(0, showAll ? publications.length : 10);

  return (
    <div>
      {/* Schematic section header */}
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-2xl font-heading font-bold whitespace-nowrap print:text-black">Publications</h2>
        <div className="flex-1 schematic-divider" />
      </div>

      <StaggerContainer className="space-y-0">
        {visiblePubs.map((pub, i) => (
          <StaggerItem key={i}>
            <div className="group relative border-b border-foreground/8 py-5 hover:bg-foreground/[0.02] transition-all duration-300 print:break-inside-avoid print:py-3">
              <div className="absolute top-5 right-0 flex items-center gap-3 print:top-3">
                <span className="font-mono text-[10px] font-medium tracking-widest text-foreground/40 uppercase print:text-black">
                  {pub.venueShort}
                </span>
                <span className="font-mono text-[11px] text-foreground/25 tabular-nums print:text-black">
                  {pub.year}
                </span>
              </div>

              <p className="font-heading font-semibold text-[15px] leading-snug pr-32 group-hover:text-foreground transition-colors duration-300 print:text-black">
                {pub.title}
              </p>
              <p className="font-mono text-xs text-foreground/40 mt-1.5 print:text-black">
                {highlightAuthor(pub.authors)}
              </p>
              <p className="font-mono text-xs text-foreground/30 italic print:text-black/70">{pub.venue}</p>

              <div className="flex items-center gap-2 mt-3 print:hidden">
                {pub.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.url}
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] font-medium tracking-wider uppercase text-foreground/50 hover:text-foreground border border-foreground/15 hover:border-foreground px-2.5 py-1 neon-hover transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {linkIcon(l.label)}
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {publications.length > 10 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="print:hidden mt-4 mx-auto flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase text-foreground/40 hover:text-foreground transition-colors duration-200"
        >
          {showAll ? "Show Less" : "Show More"}
          <ChevronDown
            size={12}
            strokeWidth={1.5}
            className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
          />
        </button>
      )}
    </div>
  );
};

export default PublicationsSection;
