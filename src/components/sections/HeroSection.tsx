import profileImg from "@/assets/profile-placeholder.png";
import { FileDown, Mail, Github, GraduationCap, MapPin } from "lucide-react";

const socialLinks = [
  { icon: Mail, href: "mailto:your.email@university.edu", label: "Email" },
  { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: GraduationCap, href: "https://scholar.google.com/", label: "Google Scholar" },
];

const HeroSection = () => (
  <div className="flex flex-col md:flex-row items-center gap-8 pb-2 print:pb-4">
    {/* Avatar */}
    <div className="flex-shrink-0">
      <div className="w-40 h-40 rounded-xl bg-white p-2 shadow-md border border-border/40">
        <img
          src={profileImg}
          alt="Profile photo"
          className="w-full h-full rounded-lg object-cover"
        />
      </div>
    </div>

    <div className="flex-1 flex flex-col">
      {/* Name & affiliation */}
      <div>
        <h1 className="text-4xl md:text-[2.75rem] font-heading font-bold leading-tight tracking-tight print:text-black">
          Your Name
        </h1>
        <p className="text-muted-foreground mt-1.5 flex items-center gap-2 text-sm print:text-black">
          <MapPin size={14} className="text-foreground/60" />
          Ph.D. Candidate · Department of Computer Science · University Name
        </p>
      </div>

      {/* Bio */}
      <p className="text-foreground/85 leading-relaxed max-w-2xl text-[15px] mt-4 print:text-black">
        My research focuses on <strong className="text-foreground font-semibold">machine learning</strong>,{" "}
        <strong className="text-foreground font-semibold">natural language processing</strong>, and{" "}
        <strong className="text-foreground font-semibold">computational social science</strong>.
        I am advised by{" "}
        <a href="#" className="font-semibold border-b border-foreground/30 hover:border-foreground text-foreground transition-colors">
          Prof. Advisor Name
        </a>.
      </p>

      {/* Integrated Action Row */}
      <div className="flex items-center gap-4 mt-5">
        <a
          href="/files/cv.pdf"
          download
          className="print:hidden inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
        >
          <FileDown size={15} />
          Download CV
        </a>
        <div className="flex items-center gap-1 print:hidden">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="p-2 rounded-lg border-0 text-foreground/60 hover:text-foreground hover:bg-muted transition-all duration-200"
              aria-label={label}
            >
              <Icon size={17} strokeWidth={1.8} />
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
