import rawContent from "../content/publications.md?raw";

export interface Publication {
  title: string;
  authors: string;
  /** true → Jinfeng Zhou is a non-first co-first author, renders † */
  coFirst?: boolean;
  /** true → Jinfeng Zhou is corresponding author, renders * */
  corresponding?: boolean;
  venue: string;
  venueShort: string;
  year: number;
  links: { label: string; url: string }[];
}

export const AUTHOR_NAME = "Jinfeng Zhou";

/**
 * Parse the authors string.
 * Authors may be marked with a trailing * to indicate co-first authorship,
 * e.g. "Bo Zhang*, Jinfeng Zhou*, Yuxuan Chen".
 * Returns the cleaned author string (no *) and whether Jinfeng Zhou is a
 * non-first co-first author (coFirst: true only when JZ has * and is not #1).
 */
function parseAuthors(raw: string): { authors: string; coFirst?: boolean } {
  const parts = raw.split(",").map((a) => a.trim());
  let coFirst: true | undefined;
  const cleaned = parts.map((author, idx) => {
    const marked = author.endsWith("*");
    const name   = marked ? author.slice(0, -1).trim() : author;
    if (marked && name === AUTHOR_NAME && idx > 0) coFirst = true;
    return name;
  });
  return { authors: cleaned.join(", "), coFirst };
}

function parse(raw: string): Publication[] {
  // Split on one or more blank lines; each chunk is a potential entry
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
          // Only treat single-word (no-space) strings as keys
          if (k && !/\s/.test(k)) data[k] = v;
        }
      }

      const { authors, coFirst: coFirstFromAuthors } = parseAuthors(data.authors ?? "");
      const coFirstFromKey = data.coFirst === "true" ? true : undefined;

      const links: { label: string; url: string }[] = [];
      if (data.paper) links.push({ label: "Paper", url: data.paper });
      if (data.code)  links.push({ label: "Code",  url: data.code  });
      if (data.arxiv) links.push({ label: "arXiv", url: data.arxiv });

      return {
        title:         data.title         ?? "",
        authors,
        coFirst:       coFirstFromAuthors ?? coFirstFromKey,
        corresponding: data.corresponding === "true" ? true : undefined,
        venue:         data.venue         ?? "",
        venueShort:    data.venueShort    ?? "",
        year:          parseInt(data.year ?? "0", 10),
        links,
      };
    })
    .filter((p) => p.title && p.year > 0);
}

export const publications = parse(rawContent);
