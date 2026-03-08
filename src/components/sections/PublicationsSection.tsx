import { ExternalLink } from "lucide-react";

const publications = [
  {
    title: "Towards Robust Evaluation of Language Model Alignment",
    authors: "Your Name, Collaborator A, Collaborator B, Advisor Name",
    venue: "ACL 2026",
    year: 2026,
    links: [
      { label: "Paper", url: "#" },
      { label: "Code", url: "#" },
      { label: "arXiv", url: "#" },
    ],
  },
  {
    title: "Fairness-Aware Text Classification with Debiased Representations",
    authors: "Your Name, Collaborator C, Advisor Name",
    venue: "EMNLP 2024",
    year: 2024,
    links: [
      { label: "Paper", url: "#" },
      { label: "Code", url: "#" },
    ],
  },
  {
    title: "A Survey of Interpretability Methods for Neural NLP Models",
    authors: "Your Name, Advisor Name",
    venue: "JAIR, Vol. 72",
    year: 2023,
    links: [{ label: "Paper", url: "#" }],
  },
];

const PublicationsSection = () => (
  <div>
    <div className="flex items-center gap-4 mb-10">
      <h2 className="text-2xl font-heading font-bold whitespace-nowrap">Publications</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
    </div>

    <ol className="space-y-1">
      {publications.map((pub, i) => (
        <li
          key={i}
          className="group relative rounded-xl px-6 py-5 -mx-2 hover:bg-card hover:shadow-[var(--shadow-card)] transition-all duration-300"
        >
          {/* Year badge */}
          <span className="absolute top-5 right-5 text-[11px] font-semibold text-muted-foreground/60 font-body tabular-nums tracking-wider">
            {pub.year}
          </span>

          <p className="font-heading font-semibold text-[15px] leading-snug pr-16 group-hover:text-primary transition-colors duration-300">
            {pub.title}
          </p>
          <p className="text-sm text-muted-foreground mt-1.5">{pub.authors}</p>
          <p className="text-sm text-muted-foreground/80 italic">{pub.venue}</p>
          <div className="flex gap-3 mt-3">
            {pub.links.map((l) => (
              <a
                key={l.label}
                href={l.url}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary/80 hover:text-accent px-2.5 py-1 rounded-md bg-primary/5 hover:bg-accent/10 transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {l.label}
                <ExternalLink size={10} />
              </a>
            ))}
          </div>
        </li>
      ))}
    </ol>
  </div>
);

export default PublicationsSection;
