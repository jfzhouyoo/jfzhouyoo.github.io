import rawContent from "../content/profile.md?raw";

export interface Education {
  degree: string;
  institution: string;
  period: string;
  detail: string;
}

export interface ProfileData {
  name: string;
  title: string;
  department: string;
  university: string;
  email: string;
  github: string;
  scholar: string;
  researchInterests: string;
  education: Education[];
}

function parseKV(text: string): Record<string, string> {
  const result: Record<string, string> = {};
  for (const line of text.split("\n")) {
    if (line.startsWith("#")) continue;
    const idx = line.indexOf(":");
    if (idx > 0) {
      const k = line.slice(0, idx).trim();
      const v = line.slice(idx + 1).trim();
      if (k && !/\s/.test(k)) result[k] = v;
    }
  }
  return result;
}

function parse(raw: string): ProfileData {
  // Split on ## section headings (keep the heading name in the following text)
  const parts = raw.split(/^## /m);
  const info = parseKV(parts[0]);

  let researchInterests = "";
  const education: Education[] = [];

  for (const part of parts.slice(1)) {
    const newline = part.indexOf("\n");
    const heading = part.slice(0, newline).trim().toLowerCase();
    const body    = part.slice(newline + 1).trim();

    if (heading.includes("research")) {
      // Free-form paragraph — strip comment lines
      researchInterests = body
        .split("\n")
        .filter((l) => !l.startsWith("#"))
        .join("\n")
        .trim();
    } else if (heading.includes("education")) {
      // One blank-line-separated block per degree entry
      body
        .split(/\n{2,}/)
        .map((b) => b.trim())
        .filter((b) => b && !b.startsWith("#"))
        .forEach((block) => {
          const kv = parseKV(block);
          if (kv.degree) {
            education.push({
              degree:      kv.degree      ?? "",
              institution: kv.institution ?? "",
              period:      kv.period      ?? "",
              detail:      kv.detail      ?? "",
            });
          }
        });
    }
  }

  return {
    name:              info.name              ?? "",
    title:             info.title             ?? "",
    department:        info.department        ?? "",
    university:        info.university        ?? "",
    email:             info.email             ?? "",
    github:            info.github            ?? "",
    scholar:           info.scholar           ?? "",
    researchInterests,
    education,
  };
}

export const profile = parse(rawContent);
