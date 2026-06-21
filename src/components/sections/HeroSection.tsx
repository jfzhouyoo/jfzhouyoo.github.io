import profileImg from "@/assets/profile-placeholder.png";
import { FileDown, Mail, Github, GraduationCap, MapPin } from "lucide-react";

const socialLinks = [
  { icon: Mail, href: "mailto:your.email@university.edu", label: "Email", color: "text-[#ea4335]" },
  { icon: Github, href: "https://github.com/yourusername", label: "GitHub", color: "text-[#24292e]" },
  { icon: GraduationCap, href: "https://scholar.google.com/", label: "Google Scholar", color: "text-[#4285f4]" },
];

const HeroSection = () => (
  <div className="flex flex-col md:flex-row items-center gap-10 pb-2 print:pb-4">
    {/* Avatar — schematic frame */}
    <div className="flex-shrink-0">
      <div className="relative w-40 h-40 bg-background p-1.5 node-card">
        <img
          src={profileImg}
          alt="Profile photo"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    <div className="flex-1 flex flex-col">
      {/* Name & affiliation */}
      <div>
        <h1 className="text-4xl md:text-[2.75rem] font-heading font-bold leading-tight tracking-tight print:text-black">
          Your Name
        </h1>
        <p className="text-foreground/40 mt-1.5 flex items-center gap-2 font-mono text-xs tracking-wide print:text-black">
          <MapPin size={12} strokeWidth={1.5} />
          Ph.D. Candidate · Dept. of Computer Science · University Name
        </p>
      </div>

      {/* Bio */}
      <p className="text-foreground/70 leading-relaxed max-w-2xl text-[15px] mt-4 print:text-black">
        My research focuses on <strong className="text-foreground font-semibold">machine learning</strong>,{" "}
        <strong className="text-foreground font-semibold">natural language processing</strong>, and{" "}
        <strong className="text-foreground font-semibold">computational social science</strong>.
        I am advised by{" "}
        <a href="#" className="font-semibold border-b border-foreground text-foreground neon-hover">
          Prof. Advisor Name
        </a>.
      </p>

      {/* Action Row */}
      <div className="flex items-center gap-4 mt-6">
        <a
          href="#/cv"
          target="_blank"
          rel="noopener noreferrer"
          className="print:hidden inline-flex items-center gap-2 px-5 py-2 border border-foreground bg-foreground text-background font-mono text-xs font-medium tracking-wider uppercase neon-hover hover:bg-background hover:text-foreground transition-all duration-300"
        >
          <FileDown size={13} strokeWidth={1.5} />
          Download CV
        </a>
        <div className="flex items-center gap-0 print:hidden">
        {socialLinks.map(({ icon: Icon, href, label, color }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className={`p-2.5 ${color} hover:opacity-70 transition-all duration-300`}
              aria-label={label}
            >
              <Icon size={16} strokeWidth={1.2} />
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
