import { useState } from "react";
import { ExternalLink, ChevronDown, BookOpen, Code, FileText } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/FadeInView";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  venueShort: string;
  year: number;
  abstract: string;
  links: { label: string; url: string }[];
}

const publications: Publication[] = [
  {
    title: "Towards Robust Evaluation of Language Model Alignment",
    authors: "Your Name, Collaborator A, Collaborator B, Advisor Name",
    venue: "Association for Computational Linguistics",
    venueShort: "ACL",
    year: 2026,
    abstract:
      "We present a comprehensive framework for evaluating large language model alignment across multiple dimensions including safety, helpfulness, and truthfulness. Our approach introduces novel metrics that capture subtle misalignment patterns missed by existing benchmarks, and demonstrates significant improvements in evaluation reliability across diverse model families.",
    links: [
      { label: "Paper", url: "#" },
      { label: "Code", url: "#" },
      { label: "arXiv", url: "#" },
    ],
  },
  {
    title: "Fairness-Aware Text Classification with Debiased Representations",
    authors: "Your Name, Collaborator C, Advisor Name",
    venue: "Empirical Methods in Natural Language Processing",
    venueShort: "EMNLP",
    year: 2024,
    abstract:
      "This paper proposes a novel debiasing technique for text classification models that mitigates demographic biases while preserving task performance. We introduce a contrastive learning objective that disentangles protected attributes from semantic content in the representation space.",
    links: [
      { label: "Paper", url: "#" },
      { label: "Code", url: "#" },
    ],
  },
  {
    title: "A Survey of Interpretability Methods for Neural NLP Models",
    authors: "Your Name, Advisor Name",
    venue: "Journal of Artificial Intelligence Research",
    venueShort: "JAIR",
    year: 2023,
    abstract:
      "We provide a comprehensive survey of interpretability and explainability methods for neural NLP models. We categorize existing approaches into probing, attention analysis, and feature attribution methods, and evaluate their faithfulness across different model architectures.",
    links: [{ label: "Paper", url: "#" }],
  },
];

/** Bold "Your Name" in author strings */
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
  if (label.toLowerCase().includes("code")) return <Code size={10} />;
  if (label.toLowerCase().includes("arxiv")) return <FileText size={10} />;
  return <ExternalLink size={10} />;
};

const PublicationsSection = () => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <div>
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-2xl font-heading font-bold whitespace-nowrap">Publications</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
      </div>

      <StaggerContainer className="space-y-1">
        {publications.map((pub, i) => {
          const isExpanded = expandedIdx === i;
          return (
            <StaggerItem
              key={i}
            >
            <div className="group relative rounded-xl px-6 py-5 -mx-2 hover:bg-card hover:shadow-[var(--shadow-card)] transition-all duration-300">
            >
              {/* Venue badge + year */}
              <div className="absolute top-5 right-5 flex items-center gap-2">
                <span className="text-[10px] font-bold tracking-wider text-accent/80 bg-accent/8 px-2 py-0.5 rounded-full uppercase">
                  {pub.venueShort}
                </span>
                <span className="text-[11px] font-semibold text-muted-foreground/50 tabular-nums">
                  {pub.year}
                </span>
              </div>

              <p className="font-heading font-semibold text-[15px] leading-snug pr-28 group-hover:text-primary transition-colors duration-300">
                {pub.title}
              </p>
              <p className="text-sm text-muted-foreground mt-1.5">
                {highlightAuthor(pub.authors)}
              </p>
              <p className="text-sm text-muted-foreground/70 italic">{pub.venue}</p>

              {/* Resource links + abstract toggle */}
              <div className="flex items-center gap-2 mt-3">
                {pub.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.url}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary/80 hover:text-accent px-2.5 py-1 rounded-md bg-primary/5 hover:bg-accent/10 hover:-translate-y-px transition-all duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {linkIcon(l.label)}
                    {l.label}
                  </a>
                ))}
                <button
                  onClick={() => setExpandedIdx(isExpanded ? null : i)}
                  className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-accent px-2.5 py-1 rounded-md hover:bg-accent/8 transition-all duration-200 ml-auto"
                  aria-expanded={isExpanded}
                >
                  <BookOpen size={11} />
                  Abstract
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              {/* Expandable abstract */}
              <div
                className={`overflow-hidden transition-all duration-400 ease-out ${
                  isExpanded ? "max-h-48 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
                }`}
              >
                <p className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-accent/30 py-1">
                  {pub.abstract}
                </p>
              </div>
              </div>
            </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </div>
  );
};

export default PublicationsSection;
