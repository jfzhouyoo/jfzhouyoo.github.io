import profileImg from "@/assets/profile-placeholder.png";
import { FileDown, Mail, Github, GraduationCap, MapPin } from "lucide-react";

const interests = [
  "Machine Learning",
  "Natural Language Processing",
  "Computational Social Science",
  "Fairness & Interpretability",
];

const socialLinks = [
  { icon: Mail, href: "mailto:your.email@university.edu", label: "Email" },
  { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: GraduationCap, href: "https://scholar.google.com/", label: "Google Scholar" },
];

const HeroSection = () => (
  <div className="flex flex-col md:flex-row gap-12 items-start">
    {/* Profile image */}
    <div className="relative flex-shrink-0 group">
      <div className="absolute -inset-2.5 rounded-2xl bg-gradient-to-br from-primary/12 via-accent/8 to-primary/6 opacity-60 group-hover:opacity-100 blur-md transition-all duration-700" />
      <img
        src={profileImg}
        alt="Profile photo"
        className="relative w-40 h-40 rounded-2xl object-cover border border-border shadow-[var(--shadow-card)]"
      />
    </div>

    <div className="flex-1 space-y-6">
      <div>
        <h1 className="text-4xl md:text-[2.75rem] font-heading font-bold leading-tight tracking-tight">
          Your Name
        </h1>
        <p className="text-muted-foreground mt-2.5 flex items-center gap-2 text-sm">
          <MapPin size={14} className="text-accent" />
          Ph.D. Candidate · Department of Computer Science · University Name
        </p>
      </div>

      <p className="text-foreground/85 leading-relaxed max-w-2xl text-[15px]">
        My research focuses on <strong className="text-foreground font-semibold">machine learning</strong>,{" "}
        <strong className="text-foreground font-semibold">natural language processing</strong>, and{" "}
        <strong className="text-foreground font-semibold">computational social science</strong>.
        I am advised by{" "}
        <a href="#" className="font-semibold border-b border-accent/30 hover:border-accent text-accent hover:text-accent transition-colors">
          Prof. Advisor Name
        </a>.
      </p>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-3">
        <a
          href="/files/cv.pdf"
          download
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
        >
          <FileDown size={15} />
          Download CV
        </a>
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-accent hover:border-accent/40 hover:bg-accent/5 hover:-translate-y-0.5 transition-all duration-300"
            aria-label={label}
          >
            <Icon size={17} strokeWidth={1.8} />
          </a>
        ))}
      </div>

      {/* Research interests */}
      <div className="pt-2">
        <h2 className="text-base font-heading font-bold mb-3 text-foreground/90">Research Interests</h2>
        <div className="flex flex-wrap gap-2">
          {interests.map((t) => (
            <span
              key={t}
              className="text-xs px-3.5 py-1.5 rounded-full bg-secondary text-secondary-foreground font-medium border border-border hover:border-accent/40 hover:bg-accent/8 hover:text-accent hover:-translate-y-px transition-all duration-300 cursor-default"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
