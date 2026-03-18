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

const HonorsSection = () => (
  <div>
    <div className="flex items-center gap-4 mb-5">
      <h2 className="text-2xl font-heading font-bold whitespace-nowrap">Honors & Awards</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
    </div>

    <StaggerContainer className="space-y-0">
      {awards.map((a, i) => (
        <StaggerItem key={i}>
          <div className="flex items-baseline gap-6 py-3 px-2 rounded-lg hover:bg-card transition-colors duration-200">
            <span className="text-sm font-semibold text-muted-foreground/50 tabular-nums w-12 flex-shrink-0">
              {a.year}
            </span>
            <div>
              <p className="font-heading font-semibold text-[15px] leading-snug">{a.title}</p>
              <p className="text-sm text-muted-foreground mt-0.5">{a.organization}</p>
            </div>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  </div>
);

export default HonorsSection;
