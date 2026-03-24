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
