import { useEffect, useState } from "react";
import { StaggerContainer, StaggerItem } from "@/components/FadeInView";

interface Award {
  year: number;
  title: string;
  organization: string;
}

const awards: Award[] = [
  {
    year: 2025,
    title: 'Second Prize in the 43rd "Challenge Cup"',
    organization: "Tsinghua University",
  },
  {
    year: 2024,
    title: "Doctoral Research Incentive Program (17 Awardees Worldwide)",
    organization: "Chinese Institute of Electronics (CIE) & Tencent",
  },
  {
    year: 2024,
    title: "Outstanding Poster Award",
    organization: "The 3rd National Conference on Large Language Model Generation (CIPS-LLMG 2024)",
  },
  {
    year: 2023,
    title: "Outstanding Master's Thesis Award",
    organization: "Chinese Institute of Electronics (CIE)",
  },
  {
    year: 2022,
    title: "National Scholarship for Graduate Students",
    organization: "Ministry of Education of China",
  },
];

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
  }, [isPrinting]);

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-2xl font-heading font-bold whitespace-nowrap print:text-black">
          Honors & Awards
        </h2>
        <div className="flex-1 schematic-divider" />
      </div>

      <StaggerContainer className="space-y-0">
        {awards.map((a, i) => (
          <StaggerItem key={i}>
            <div className="group flex items-start gap-6 py-4 border-b border-foreground/8 last:border-b-0 hover:bg-foreground/[0.02] transition-colors duration-200 print:break-inside-avoid print:py-2.5 print:hover:bg-transparent">
              {/* Year */}
              <span className="font-mono text-[11px] font-semibold text-foreground/35 tabular-nums flex-shrink-0 w-10 text-right mt-0.5 print:text-black/50">
                {a.year}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="font-heading font-semibold text-[15px] leading-snug print:text-black">
                  {a.title}
                </p>
                <p className="text-[13px] text-foreground/45 mt-0.5 leading-relaxed print:text-black/60">
                  {a.organization}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
};

export default HonorsSection;
