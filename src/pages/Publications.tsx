import AcademicLayout from "@/layouts/AcademicLayout";
import { ExternalLink } from "lucide-react";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  links: { label: string; url: string }[];
}

const publications: Publication[] = [
  {
    title: "Towards Robust Evaluation of Language Model Alignment",
    authors: "Your Name, Collaborator A, Collaborator B, Advisor Name",
    venue: "Proceedings of the 64th Annual Meeting of the Association for Computational Linguistics (ACL)",
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
    venue: "Proceedings of EMNLP 2024",
    year: 2024,
    links: [
      { label: "Paper", url: "#" },
      { label: "Code", url: "#" },
    ],
  },
  {
    title: "A Survey of Interpretability Methods for Neural NLP Models",
    authors: "Your Name, Advisor Name",
    venue: "Journal of Artificial Intelligence Research (JAIR), Vol. 72",
    year: 2023,
    links: [
      { label: "Paper", url: "#" },
    ],
  },
];

const Publications = () => {
  return (
    <AcademicLayout>
      <h1 className="text-2xl mb-6">Publications</h1>

      <ol className="space-y-6">
        {publications.map((pub, i) => (
          <li key={i} className="border-l-2 border-border pl-4">
            <p className="font-semibold font-heading text-base leading-snug">
              {pub.title}
            </p>
            <p className="text-sm text-muted-foreground mt-1">{pub.authors}</p>
            <p className="text-sm italic text-muted-foreground">{pub.venue}, {pub.year}</p>
            <div className="flex gap-3 mt-2">
              {pub.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label} <ExternalLink size={11} />
                </a>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </AcademicLayout>
  );
};

export default Publications;
