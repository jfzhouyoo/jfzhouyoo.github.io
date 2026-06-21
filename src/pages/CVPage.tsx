import { FileDown, ArrowLeft } from "lucide-react";

const cvData = {
  name: "Jinfeng Zhou",
  title: "Ph.D. Candidate",
  department: "Department of Computer Science and Technology",
  university: "Tsinghua University",
  email: "zjf23@mails.tsinghua.edu.cn",
  github: "https://github.com/jfzhouyoo",
  scholar: "https://scholar.google.com/",
  researchInterests:
    "Social intelligence evaluation, emotional AI, conversational systems, and large language model alignment and evaluation.",
  education: [
    {
      degree: "Ph.D. in Computer Science and Technology",
      institution: "Tsinghua University",
      period: "2023 – Present",
      detail: "Advisor: Prof. Minlie Huang · CoAI Group",
    },
    {
      degree: "M.S. in Computer Science",
      institution: "Tianjin University",
      period: "2020 – 2023",
      detail: "Outstanding Master's Thesis Award",
    },
    {
      degree: "B.S. in Computer Science",
      institution: "Tianjin University",
      period: "2016 – 2020",
      detail: "",
    },
  ],
  publications: [
    {
      authors: "Jinfeng Zhou, Yuxuan Chen, Yihan Shi, et al.",
      title: "SocialEval: Evaluating Social Intelligence of Large Language Models.",
      venue: "ACL 2025",
      url: "https://aclanthology.org/2025.acl-long.1496/",
    },
    {
      authors: "Jinfeng Zhou, Yuxuan Chen, Jianing Yin, et al.",
      title: "Crisp: Cognitive Restructuring of Negative Thoughts through Multi-turn Supportive Dialogues.",
      venue: "EMNLP 2025",
      url: "https://aclanthology.org/2025.emnlp-main.1652/",
    },
    {
      authors: "Bosi Wen, Pei Ke, Yufei Sun, Cunxiang Wang, Xiaotao Gu, Jinfeng Zhou, et al.",
      title: "HPSS: Heuristic Prompting Strategy Search for LLM Evaluators.",
      venue: "ACL Findings 2025",
      url: "https://aclanthology.org/2025.findings-acl.1282/",
    },
    {
      authors: "Jinfeng Zhou, Yongkang Huang, Bosi Wen, et al.",
      title: "CharacterBench: Benchmarking Character Customization of Large Language Models.",
      venue: "AAAI 2025",
      url: "https://ojs.aaai.org/index.php/AAAI/article/view/34806",
    },
    {
      authors: "Jinfeng Zhou, Zheyu Chen, Shuai Wang, et al.",
      title: "Think Socially via Cognitive Reasoning.",
      venue: "arXiv 2025",
      url: "https://arxiv.org/abs/2509.22546",
    },
    {
      authors: "Sahand Sabour, Siyang Liu, Zheyuan Zhang, June Liu, Jinfeng Zhou, et al.",
      title: "EmoBench: Evaluating the Emotional Intelligence of Large Language Models.",
      venue: "ACL 2024",
      url: "https://aclanthology.org/2024.acl-long.326/",
    },
    {
      authors: "Zhuang Chen, Jincenzi Wu, Jinfeng Zhou, et al.",
      title: "ToMBench: Benchmarking Theory of Mind in Large Language Models.",
      venue: "ACL 2024",
      url: "https://aclanthology.org/2024.acl-long.847/",
    },
    {
      authors: "Jinfeng Zhou, Zhuang Chen, Dazhen Wan, et al.",
      title: "CharacterGLM: Customizing Social Characters with Large Language Models.",
      venue: "EMNLP 2024",
      url: "https://aclanthology.org/2024.emnlp-industry.107/",
    },
    {
      authors: "Zhuang Chen, Jiawen Deng, Jinfeng Zhou, et al.",
      title: "Depression Detection in Clinical Interviews with LLM-Empowered Structural Element Graph.",
      venue: "NAACL 2024",
      url: "https://aclanthology.org/2024.naacl-long.452/",
    },
    {
      authors: "Jinfeng Zhou, Zhuang Chen, Bo Wang, Minlie Huang.",
      title: "Facilitating Multi-turn Emotional Support Conversation with Positive Emotion Elicitation: A Reinforcement Learning Approach.",
      venue: "ACL 2023",
      url: "https://aclanthology.org/2023.acl-long.96/",
    },
    {
      authors: "Jinfeng Zhou, Chujie Zheng, Bo Wang, Zheng Zhang, Minlie Huang.",
      title: "CASE: Aligning Coarse-to-Fine Cognition and Affection for Empathetic Response Generation.",
      venue: "ACL 2023",
      url: "https://aclanthology.org/2023.acl-long.457/",
    },
    {
      authors: "Jinfeng Zhou, Bo Wang, Zhitong Yang, et al.",
      title: "CR-GIS: Improving Conversational Recommendation via Goal-aware Interest Sequence Modeling.",
      venue: "COLING 2022",
      url: "https://aclanthology.org/2022.coling-1.32/",
    },
    {
      authors: "Zhitong Yang, Bo Wang, Jinfeng Zhou, et al.",
      title: "TopKG: Target-oriented Dialog via Global Planning on Knowledge Graph.",
      venue: "COLING 2022",
      url: "https://aclanthology.org/2022.coling-1.62/",
    },
    {
      authors: "Chujie Zheng, Jinfeng Zhou, Yinhe Zheng, et al.",
      title: "CDConv: A Benchmark for Contradiction Detection in Chinese Conversations.",
      venue: "EMNLP 2022",
      url: "https://aclanthology.org/2022.emnlp-main.2/",
    },
    {
      authors: "Jinfeng Zhou, Bo Wang, Minlie Huang, et al.",
      title: "Aligning Recommendation and Conversation via Dual Imitation.",
      venue: "EMNLP 2022",
      url: "https://aclanthology.org/2022.emnlp-main.36/",
    },
    {
      authors: "Jinfeng Zhou, Bo Wang, Ruifang He, Yuexian Hou.",
      title: "CRFR: Improving Conversational Recommender Systems via Flexible Fragments Reasoning on Knowledge Graphs.",
      venue: "EMNLP 2021",
      url: "https://aclanthology.org/2021.emnlp-main.355/",
    },
  ],
  awards: [
    {
      year: 2025,
      title: 'Second Prize in the 43rd "Challenge Cup"',
      org: "Tsinghua University",
    },
    {
      year: 2024,
      title: "Doctoral Research Incentive Program (17 Awardees Worldwide)",
      org: "Chinese Institute of Electronics (CIE) & Tencent",
    },
    {
      year: 2024,
      title: "Outstanding Poster Award",
      org: "The 3rd National Conference on Large Language Model Generation (CIPS-LLMG 2024)",
    },
    {
      year: 2023,
      title: "Outstanding Master's Thesis Award",
      org: "Chinese Institute of Electronics (CIE)",
    },
    {
      year: 2022,
      title: "National Scholarship for Graduate Students",
      org: "Ministry of Education of China",
    },
  ],
};

const Divider = () => (
  <div className="border-t border-black/15 my-5" />
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-[11px] font-bold tracking-[0.18em] uppercase text-black/50 mb-3">
    {children}
  </h2>
);

const CVPage = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f0] print:bg-white">
      {/* Control bar — hidden when printing */}
      <div className="print:hidden sticky top-0 z-10 bg-white border-b border-black/10 px-6 py-3 flex items-center justify-between">
        <a
          href="#/"
          className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wider uppercase text-black/40 hover:text-black transition-colors duration-200"
        >
          <ArrowLeft size={12} strokeWidth={1.5} />
          Back
        </a>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-black text-white font-mono text-[11px] font-medium tracking-wider uppercase hover:bg-black/80 transition-colors duration-200"
        >
          <FileDown size={12} strokeWidth={1.5} />
          Print / Save as PDF
        </button>
      </div>

      {/* CV body */}
      <div className="mx-auto max-w-[780px] px-10 py-10 print:p-0 print:max-w-none">
        <div className="bg-white print:bg-transparent shadow-sm print:shadow-none p-12 print:p-0">

          {/* ── Header ── */}
          <div className="flex items-start justify-between gap-8 pb-6 border-b-2 border-black">
            <div>
              <h1 className="text-[2.2rem] font-bold tracking-tight leading-none text-black">
                {cvData.name}
              </h1>
              <p className="mt-2 text-[14px] text-black/60">
                {cvData.title} · {cvData.department}
              </p>
              <p className="text-[14px] text-black/60">{cvData.university}</p>
            </div>
            <div className="text-right text-[12px] text-black/55 space-y-0.5 flex-shrink-0">
              <p>
                <a href={`mailto:${cvData.email}`} className="hover:underline">
                  {cvData.email}
                </a>
              </p>
              <p>
                <a href={cvData.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  github.com/jfzhouyoo
                </a>
              </p>
              <p>
                <a href={cvData.scholar} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Google Scholar
                </a>
              </p>
            </div>
          </div>

          {/* ── Research Interests ── */}
          <div className="mt-6">
            <SectionTitle>Research Interests</SectionTitle>
            <p className="text-[13.5px] text-black/80 leading-relaxed">
              {cvData.researchInterests}
            </p>
          </div>

          <Divider />

          {/* ── Education ── */}
          <div>
            <SectionTitle>Education</SectionTitle>
            <div className="space-y-3.5">
              {cvData.education.map((edu, i) => (
                <div key={i} className="flex items-start gap-6">
                  <span className="font-mono text-[11px] text-black/40 tabular-nums flex-shrink-0 w-28 text-right mt-0.5">
                    {edu.period}
                  </span>
                  <div>
                    <p className="text-[13.5px] font-semibold text-black leading-snug">
                      {edu.degree}
                    </p>
                    <p className="text-[12.5px] text-black/60">{edu.institution}</p>
                    {edu.detail && (
                      <p className="text-[12px] text-black/45 italic">{edu.detail}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Divider />

          {/* ── Publications ── */}
          <div>
            <SectionTitle>Publications</SectionTitle>
            <ol className="space-y-3">
              {cvData.publications.map((pub, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="font-mono text-[11px] text-black/35 tabular-nums flex-shrink-0 w-5 text-right mt-0.5">
                    {i + 1}.
                  </span>
                  <div className="text-[12.5px] leading-relaxed text-black/75">
                    <span>{pub.authors} </span>
                    <span className="font-semibold text-black">
                      &ldquo;{pub.title}&rdquo;
                    </span>{" "}
                    <span className="italic text-black/55">{pub.venue}.</span>{" "}
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black/40 hover:text-black underline underline-offset-2 text-[11px] print:hidden"
                    >
                      [link]
                    </a>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <Divider />

          {/* ── Honors & Awards ── */}
          <div>
            <SectionTitle>Honors & Awards</SectionTitle>
            <div className="space-y-2.5">
              {cvData.awards.map((a, i) => (
                <div key={i} className="flex items-start gap-6">
                  <span className="font-mono text-[11px] text-black/40 tabular-nums flex-shrink-0 w-10 text-right mt-0.5">
                    {a.year}
                  </span>
                  <div>
                    <p className="text-[13.5px] font-semibold text-black leading-snug">
                      {a.title}
                    </p>
                    <p className="text-[12px] text-black/50">{a.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CVPage;
