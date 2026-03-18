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
    title: "Towards Robust Evaluation of Language Model Alignment",
    authors: "Your Name, Collaborator A, Collaborator B, Advisor Name",
    venue: "Association for Computational Linguistics",
    venueShort: "ACL",
    year: 2026,
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
    links: [{ label: "Paper", url: "#" }],
  },
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
  if (label.toLowerCase().includes("code")) return <Code size={10} />;
  if (label.toLowerCase().includes("arxiv")) return <FileText size={10} />;
  return <ExternalLink size={10} />;
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
      <div className="flex items-center gap-4 mb-5">
        <h2 className="text-2xl font-heading font-bold whitespace-nowrap print:text-black">Publications</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent print:from-black/20" />
      </div>

      <StaggerContainer className="space-y-1">
        {visiblePubs.map((pub, i) => (
          <StaggerItem key={i}>
            <div className="group relative rounded-xl px-6 py-5 -mx-2 hover:bg-card hover:shadow-[var(--shadow-card)] transition-all duration-300 print:break-inside-avoid print:px-0 print:py-3 print:hover:bg-transparent print:hover:shadow-none">
              <div className="absolute top-5 right-5 flex items-center gap-2 print:top-3 print:right-0">
                <span className="text-[10px] font-bold tracking-wider text-muted-foreground bg-secondary px-2 py-0.5 rounded-full uppercase print:text-black">
                  {pub.venueShort}
                </span>
                <span className="text-[11px] font-semibold text-muted-foreground/50 tabular-nums print:text-black">
                  {pub.year}
                </span>
              </div>

              <p className="font-heading font-semibold text-[15px] leading-snug pr-28 group-hover:text-foreground transition-colors duration-300 print:text-black">
                {pub.title}
              </p>
              <p className="text-sm text-muted-foreground mt-1.5 print:text-black">
                {highlightAuthor(pub.authors)}
              </p>
              <p className="text-sm text-muted-foreground/70 italic print:text-black/70">{pub.venue}</p>

              <div className="flex items-center gap-2 mt-3 print:hidden">
                {pub.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.url}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/70 hover:text-foreground px-2.5 py-1 rounded-md bg-secondary hover:bg-muted hover:-translate-y-px transition-all duration-200"
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
          className="print:hidden mt-4 mx-auto flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          {showAll ? "Show Less" : "Show More"}
          <ChevronDown
            size={14}
            className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
          />
        </button>
      )}
    </div>
  );
};

export default PublicationsSection;
