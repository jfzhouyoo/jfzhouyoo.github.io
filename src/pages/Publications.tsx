import AcademicLayout from "@/layouts/AcademicLayout";
import { ExternalLink } from "lucide-react";

interface Publication {
  title: string;
  authors: string;
  venue: string;
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

const Publications = () => {
  return (
    <AcademicLayout>
      <h1 className="text-2xl mb-6">Publications</h1>

      <ol className="space-y-6">
        {publications.map((pub, i) => (
          <li key={i} className="border-l-2 border-border pl-4">
            <p className="font-semibold font-heading text-base leading-snug">
              {pub.title}
            </p>
            <p className="text-sm text-muted-foreground mt-1">{pub.authors}</p>
            <p className="text-sm italic text-muted-foreground">{pub.venue}, {pub.year}</p>
            <div className="flex gap-3 mt-2">
              {pub.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label} <ExternalLink size={11} />
                </a>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </AcademicLayout>
  );
};

export default Publications;
