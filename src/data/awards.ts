import rawContent from "../content/honors.md?raw";

export interface Award {
  year: number;
  title: string;
  organization: string;
}

function parse(raw: string): Award[] {
  return raw
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter((b) => /^year:/m.test(b) && !b.startsWith("#"))
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
        year:         parseInt(data.year ?? "0", 10),
        title:        data.title        ?? "",
        organization: data.organization ?? "",
      };
    })
    .filter((a) => a.year > 0 && a.title);
}

export const awards = parse(rawContent);
