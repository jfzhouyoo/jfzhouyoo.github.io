import AcademicLayout from "@/layouts/AcademicLayout";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  links: { label: string; url: string; icon?: "github" | "external" }[];
}

const projects: Project[] = [
  {
    title: "LLM-Eval Toolkit",
    description:
      "An open-source framework for evaluating large language models across safety, helpfulness, and factuality dimensions. Supports custom benchmark suites and automated report generation.",
    tags: ["Python", "PyTorch", "LLMs"],
    links: [
      { label: "GitHub", url: "#", icon: "github" },
      { label: "Demo", url: "#", icon: "external" },
    ],
  },
  {
    title: "FairNLP",
    description:
      "A library for measuring and mitigating demographic biases in text classification pipelines. Includes pre-built debiasing modules and fairness metric calculators.",
    tags: ["Python", "NLP", "Fairness"],
    links: [
      { label: "GitHub", url: "#", icon: "github" },
      { label: "Paper", url: "#", icon: "external" },
    ],
  },
  {
    title: "Academic Portfolio Template",
    description:
      "A clean, minimalist academic homepage template built with React and Tailwind CSS. Features sections for publications, CV, and projects.",
    tags: ["React", "TypeScript", "Tailwind"],
    links: [
      { label: "GitHub", url: "#", icon: "github" },
    ],
  },
];

const Projects = () => {
  return (
    <AcademicLayout>
      <h1 className="text-2xl mb-6">Projects</h1>

      <div className="space-y-6">
        {projects.map((project, i) => (
          <div key={i} className="border border-border rounded p-5 bg-card">
            <h2 className="font-heading text-lg font-bold">{project.title}</h2>
            <p className="text-sm mt-2 text-foreground/85">{project.description}</p>
            <div className="flex gap-2 mt-3 flex-wrap">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3 mt-3">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon === "github" ? <Github size={12} /> : <ExternalLink size={11} />}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AcademicLayout>
  );
};

export default Projects;
