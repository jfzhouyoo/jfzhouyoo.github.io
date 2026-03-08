import NavBar from "@/components/NavBar";
import Section from "@/components/Section";
import profileImg from "@/assets/profile-placeholder.png";
import projectLlm from "@/assets/project-llm-eval.jpg";
import projectFair from "@/assets/project-fairnlp.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";
import { FileDown, ExternalLink, Github, Mail, GraduationCap, MapPin, ArrowUpRight } from "lucide-react";

/* ── Data ── */

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

/* ── Page ── */

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />

      <div className="mx-auto max-w-5xl px-6">
        {/* ── Hero / About ── */}
        <Section id="about" className="pt-32">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <img
              src={profileImg}
              alt="Profile photo"
              className="w-36 h-36 rounded-2xl object-cover border-2 border-border shadow-md flex-shrink-0"
            />
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-heading font-bold leading-tight">
                Your Name
              </h1>
              <p className="text-muted-foreground mt-2 flex items-center gap-1.5 text-sm">
                <MapPin size={14} /> Ph.D. Candidate · Department of Computer Science · University Name
              </p>

              <p className="mt-5 text-foreground/90 leading-relaxed max-w-2xl">
                My research focuses on <strong>machine learning</strong>, <strong>natural language processing</strong>, and <strong>computational social science</strong>. I am advised by{" "}
                <a href="#" className="font-medium">Prof. Advisor Name</a>.
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-6">
                <a
                  href="/files/cv.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium shadow-sm hover:opacity-90 transition-opacity"
                >
                  <FileDown size={15} />
                  CV
                </a>
                <a href="mailto:your.email@university.edu" className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors" aria-label="Email">
                  <Mail size={16} />
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors" aria-label="GitHub">
                  <Github size={16} />
                </a>
                <a href="https://scholar.google.com/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors" aria-label="Google Scholar">
                  <GraduationCap size={16} />
                </a>
              </div>

              <div className="mt-8">
                <h2 className="text-lg font-heading font-bold mb-3">Research Interests</h2>
                <div className="flex flex-wrap gap-2">
                  {["Machine Learning", "Natural Language Processing", "Computational Social Science", "Fairness & Interpretability"].map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ── Publications ── */}
        <Section id="publications">
          <h2 className="text-2xl font-heading font-bold mb-8">Publications</h2>
          <ol className="space-y-6">
            {publications.map((pub, i) => (
              <li key={i} className="border-l-2 border-primary/30 pl-5 hover:border-primary transition-colors">
                <p className="font-heading font-semibold text-base leading-snug">{pub.title}</p>
                <p className="text-sm text-muted-foreground mt-1">{pub.authors}</p>
                <p className="text-sm italic text-muted-foreground">{pub.venue}, {pub.year}</p>
                <div className="flex gap-3 mt-2">
                  {pub.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.url}
                      className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {l.label} <ExternalLink size={10} />
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* ── Projects ── */}
        <Section id="projects">
          <h2 className="text-2xl font-heading font-bold mb-8">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-sm flex items-center gap-1">
                    {p.title}
                    <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Section>

        {/* ── Contact ── */}
        <Section id="contact" className="pb-24">
          <h2 className="text-2xl font-heading font-bold mb-6">Contact</h2>
          <div className="rounded-xl border border-border bg-card p-8 max-w-lg">
            <p className="text-foreground/90 leading-relaxed mb-6">
              I'm always happy to discuss research, collaboration opportunities, or just chat about NLP and AI. Feel free to reach out!
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <a href="mailto:your.email@university.edu" className="text-foreground hover:text-primary transition-colors">
                  your.email@university.edu
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Github size={16} className="text-primary" />
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                  github.com/yourusername
                </a>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap size={16} className="text-primary" />
                <a href="https://scholar.google.com/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                  Google Scholar
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-primary" />
                <span className="text-foreground">Room 123, CS Building, University Name</span>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Your Name. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
};

export default HomePage;
