import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/FadeInView";

interface Award {
  year: number;
  title: string;
  organization: string;
}

const awards: Award[] = [
  {
    year: 2025,
    title: "Outstanding Research Award",
    organization: "Association for Computational Linguistics (ACL)",
  },
  {
    year: 2024,
    title: "Best Paper Award",
    organization: "Conference on Empirical Methods in NLP (EMNLP)",
  },
  {
    year: 2023,
    title: "Graduate Research Fellowship",
    organization: "National Science Foundation (NSF)",
  },
  {
    year: 2022,
    title: "Dean's List Scholar",
    organization: "University Name, College of Engineering",
  },
];

const HonorsSection = () => {
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

  const visibleAwards = isPrinting ? awards : awards.slice(0, showAll ? awards.length : 10);

  return (
    <div>
      <div className="flex items-center gap-4 mb-5">
        <h2 className="text-2xl font-heading font-bold whitespace-nowrap print:text-black">Honors & Awards</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent print:from-black/20" />
      </div>

      <StaggerContainer className="space-y-0">
        {visibleAwards.map((a, i) => (
          <StaggerItem key={i}>
            <div className="flex items-baseline gap-6 py-3 px-2 rounded-lg hover:bg-card transition-colors duration-200 print:break-inside-avoid print:hover:bg-transparent print:py-2">
              <span className="text-sm font-semibold text-muted-foreground/50 tabular-nums w-12 flex-shrink-0 print:text-black">
                {a.year}
              </span>
              <div>
                <p className="font-heading font-semibold text-[15px] leading-snug print:text-black">{a.title}</p>
                <p className="text-sm text-muted-foreground mt-0.5 print:text-black/70">{a.organization}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {awards.length > 10 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="print:hidden mt-4 mx-auto flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200"
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

export default HonorsSection;
