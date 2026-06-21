import { useEffect, useState } from "react";
import { StaggerContainer, StaggerItem } from "@/components/FadeInView";

interface Award {
  year: number;
  title: string;
  organization: string;
  level?: "national" | "institute" | "university";
}

const awards: Award[] = [
  {
    year: 2025,
    title: 'Second Prize in the 43rd "Challenge Cup"',
    organization: "Tsinghua University",
    level: "university",
  },
  {
    year: 2024,
    title: "Doctoral Research Incentive Program (17 Awardees Worldwide)",
    organization: "Chinese Institute of Electronics (CIE) & Tencent",
    level: "institute",
  },
  {
    year: 2024,
    title: "Outstanding Poster Award",
    organization: "The 3rd National Conference on Large Language Model Generation (CIPS-LLMG 2024)",
    level: "institute",
  },
  {
    year: 2023,
    title: "Outstanding Master's Thesis Award",
    organization: "Chinese Institute of Electronics (CIE)",
    level: "institute",
  },
  {
    year: 2022,
    title: "National Scholarship for Graduate Students",
    organization: "Ministry of Education of China",
    level: "national",
  },
];

const dotStyle = (level?: Award["level"]) => {
  switch (level) {
    case "national":
      return "bg-foreground border-foreground";
    case "institute":
      return "bg-foreground/40 border-foreground/50";
    default:
      return "bg-transparent border-foreground/30";
  }
};

const HonorsSection = () => {
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

  const visibleAwards = isPrinting ? awards : awards;

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-2xl font-heading font-bold whitespace-nowrap print:text-black">
          Honors & Awards
        </h2>
        <div className="flex-1 schematic-divider" />
      </div>

      <div className="relative pl-2">
        {/* Timeline vertical line */}
        <div className="print:hidden absolute left-[4.25rem] top-2 bottom-2 w-px bg-gradient-to-b from-foreground/20 via-foreground/10 to-transparent" />

        <StaggerContainer className="space-y-0">
          {visibleAwards.map((a, i) => (
            <StaggerItem key={i}>
              <div className="group relative flex items-start gap-5 py-4 hover:bg-foreground/[0.02] -ml-2 pl-2 pr-2 rounded-sm transition-colors duration-200 print:break-inside-avoid print:py-2.5">
                {/* Year */}
                <div className="flex-shrink-0 w-14 text-right mt-0.5">
                  <span className="font-mono text-[11px] font-semibold text-foreground/35 tabular-nums group-hover:text-foreground/55 transition-colors duration-200 print:text-black/50">
                    {a.year}
                  </span>
                </div>

                {/* Timeline dot */}
                <div className="relative flex-shrink-0 mt-[5px] print:hidden">
                  <div
                    className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 group-hover:scale-110 ${dotStyle(a.level)}`}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pt-0">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-heading font-semibold text-[15px] leading-snug print:text-black">
                      {a.title}
                    </p>
                    {a.level === "national" && (
                      <span className="print:hidden flex-shrink-0 font-mono text-[9px] tracking-widest uppercase border border-foreground/30 text-foreground/50 px-1.5 py-0.5 bg-foreground/[0.04] mt-0.5">
                        National
                      </span>
                    )}
                  </div>
                  <p className="text-[13px] text-foreground/40 mt-0.5 leading-relaxed print:text-black/55">
                    {a.organization}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
};

export default HonorsSection;
