import profileImg from "@/assets/profile-placeholder.png";
import { FileDown, Mail, Github, GraduationCap, MapPin } from "lucide-react";

const interests = [
  "Machine Learning",
  "Natural Language Processing",
  "Computational Social Science",
  "Fairness & Interpretability",
];

const HeroSection = () => (
  <div className="flex flex-col md:flex-row gap-12 items-start">
    {/* Profile image with decorative accent */}
    <div className="relative flex-shrink-0 group">
      <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 blur-sm group-hover:blur-md transition-all duration-500" />
      <img
        src={profileImg}
        alt="Profile photo"
        className="relative w-40 h-40 rounded-2xl object-cover border border-border/60 shadow-[var(--shadow-card)]"
      />
    </div>

    <div className="flex-1 space-y-6">
      {/* Name & title */}
      <div>
        <h1 className="text-4xl md:text-[2.75rem] font-heading font-bold leading-tight tracking-tight">
          Your Name
        </h1>
        <p className="text-muted-foreground mt-2 flex items-center gap-2 text-sm">
          <MapPin size={14} className="text-accent" />
          Ph.D. Candidate · Department of Computer Science · University Name
        </p>
      </div>

      {/* Bio */}
      <p className="text-foreground/85 leading-relaxed max-w-2xl text-[15px]">
        My research focuses on <strong className="text-foreground font-semibold">machine learning</strong>,{" "}
        <strong className="text-foreground font-semibold">natural language processing</strong>, and{" "}
        <strong className="text-foreground font-semibold">computational social science</strong>.
        I am advised by <a href="#" className="font-semibold border-b border-primary/30 hover:border-primary transition-colors">Prof. Advisor Name</a>.
      </p>

      {/* Action buttons */}
      <div className="flex flex-wrap items-center gap-3">
        <a
          href="/files/cv.pdf"
          download
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] hover:scale-[1.02] transition-all duration-300"
        >
          <FileDown size={15} />
          Download CV
        </a>
        {[
          { icon: Mail, href: "mailto:your.email@university.edu", label: "Email" },
          { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
          { icon: GraduationCap, href: "https://scholar.google.com/", label: "Google Scholar" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            className="p-2.5 rounded-lg border border-border/70 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
            aria-label={label}
          >
            <Icon size={16} />
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
              className="text-xs px-3.5 py-1.5 rounded-full bg-secondary/80 text-secondary-foreground font-medium border border-border/40 hover:bg-primary/8 hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-default"
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
