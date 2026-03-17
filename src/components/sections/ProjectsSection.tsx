import projectLlm from "@/assets/project-llm-eval.jpg";
import projectFair from "@/assets/project-fairnlp.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";
import { ArrowUpRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/FadeInView";

const projects = [
  {
    title: "LLM-Eval Toolkit",
    description: "Open-source framework for evaluating large language models across safety, helpfulness, and factuality.",
    tags: ["Python", "PyTorch", "LLMs"],
    image: projectLlm,
    url: "#",
  },
  {
    title: "FairNLP",
    description: "Library for measuring and mitigating demographic biases in text classification pipelines.",
    tags: ["Python", "NLP", "Fairness"],
    image: projectFair,
    url: "#",
  },
  {
    title: "Academic Portfolio",
    description: "Clean, minimalist academic homepage template built with React and Tailwind CSS.",
    tags: ["React", "TypeScript", "Tailwind"],
    image: projectPortfolio,
    url: "#",
  },
];

const ProjectsSection = () => (
  <div>
    <div className="flex items-center gap-4 mb-10">
      <h2 className="text-2xl font-heading font-bold whitespace-nowrap">Projects</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
    </div>

    <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <StaggerItem key={p.title}>
        <a
          key={p.title}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-xl overflow-hidden bg-card border border-border/60 card-hover"
        >
          {/* Image with overlay */}
          <div className="aspect-[4/3] overflow-hidden relative">
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary-foreground bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                View <ArrowUpRight size={12} />
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="font-heading font-bold text-sm group-hover:text-primary transition-colors duration-300">
              {p.title}
            </h3>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed line-clamp-2">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-secondary/70 text-secondary-foreground/80 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </a>
        </StaggerItem>
      ))}
    </StaggerContainer>
  </div>
);

export default ProjectsSection;
