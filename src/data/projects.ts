import rawContent from "../content/projects.md?raw";
import projectLlm      from "@/assets/project-llm-eval.jpg";
import projectFair     from "@/assets/project-fairnlp.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  /** Resolved image URL (handled by the component layer) */
  image?: string;
  url?: string;
  github?: string;
  year?: number;
  status?: "active" | "completed";
}

const imageMap: Record<string, string> = {
  "llm-eval": projectLlm,
  fairnlp:    projectFair,
  portfolio:  projectPortfolio,
};

function parse(raw: string): Project[] {
  return raw
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter((b) => /^title:/m.test(b) && !b.startsWith("#"))
    .map((block) => {
      const data: Record<string, string> = {};
      for (const line of block.split("\n")) {
        if (line.startsWith("#")) continue;
        const idx = line.indexOf(":");
        if (idx > 0) {
          const k = line.slice(0, idx).trim();
          const v = line.slice(idx + 1).trim();
          if (k && !/\s/.test(k)) data[k] = v;
        }
      }
      return {
        title:       data.title       ?? "",
        description: data.description ?? "",
        tags:        data.tags ? data.tags.split(",").map((t) => t.trim()).filter(Boolean) : [],
        image:       data.image ? imageMap[data.image] : undefined,
        url:         data.url    || undefined,
        github:      data.github || undefined,
        year:        data.year   ? parseInt(data.year, 10) : undefined,
        status:      (data.status as "active" | "completed") || undefined,
      };
    })
    .filter((p) => p.title);
}

export const projects = parse(rawContent);
