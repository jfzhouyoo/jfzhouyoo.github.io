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
  <div className="flex flex-col md:flex-row gap-10 items-start">
    {/* Avatar */}
    <div className="flex-shrink-0">
      <div className="w-40 h-40 rounded-xl bg-card p-1.5 shadow-sm">
        <img
          src={profileImg}
          alt="Profile photo"
          className="w-full h-full rounded-[0.625rem] object-cover"
        />
      </div>
    </div>

    <div className="flex-1 space-y-5">
      {/* Name & affiliation */}
      <div className="pt-1">
        <h1 className="text-4xl md:text-[2.75rem] font-heading font-bold leading-tight tracking-tight">
          Your Name
        </h1>
        <p className="text-muted-foreground mt-1 flex items-center gap-2 text-sm">
          <MapPin size={14} className="text-accent" />
          Ph.D. Candidate · Department of Computer Science · University Name
        </p>
      </div>

      {/* Bio */}
      <p className="text-foreground/85 leading-relaxed max-w-2xl text-[15px]">
        My research focuses on <strong className="text-foreground font-semibold">machine learning</strong>,{" "}
        <strong className="text-foreground font-semibold">natural language processing</strong>, and{" "}
        <strong className="text-foreground font-semibold">computational social science</strong>.
        I am advised by{" "}
        <a href="#" className="font-semibold border-b border-accent/30 hover:border-accent text-accent hover:text-accent transition-colors">
          Prof. Advisor Name
        </a>.
      </p>

      {/* Action row */}
      <div className="flex items-center gap-2 pt-1">
        <a
          href="/files/cv.pdf"
          download
          className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
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
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
            aria-label={label}
          >
            <Icon size={17} strokeWidth={1.8} />
          </a>
        ))}
      </div>

      {/* Research interests */}
      <div className="pt-4">
        <h2 className="text-base font-heading font-bold mb-2.5 text-foreground/90">Research Interests</h2>
        <div className="flex flex-wrap gap-1.5">
          {interests.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
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
