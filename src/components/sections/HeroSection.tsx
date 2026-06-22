import profileImg from "@/assets/jinfeng.jpg";
import { FileDown, Mail, Github, GraduationCap, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

const HeroSection = () => (
  <div className="flex flex-col md:flex-row items-center gap-10 pb-2 print:pb-4">
    {/* Avatar — schematic frame */}
    <div className="flex-shrink-0">
      <div className="w-56 bg-background p-1.5 node-card">
        <img
          src={profileImg}
          alt="Profile photo"
          className="w-full h-auto block"
        />
      </div>
    </div>

    <div className="flex-1 flex flex-col">
      {/* Name & affiliation */}
      <div>
        <h1 className="text-4xl md:text-[2.75rem] font-heading font-bold leading-tight tracking-tight print:text-black">
          {profile.name}
        </h1>
        <p className="text-foreground/40 mt-1.5 flex items-center gap-2 font-mono text-xs tracking-wide print:text-black">
          <MapPin size={12} strokeWidth={1.5} />
          {profile.title} · {profile.department} · {profile.university}
        </p>
      </div>

      {/* Bio */}
      <p className="text-foreground/70 leading-relaxed max-w-2xl text-[15px] mt-4 print:text-black">
        I am a third-year Ph.D. candidate at the{" "}
        <a
          href={profile.labUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold border-b border-foreground text-foreground neon-hover"
        >
          {profile.labName}
        </a>
        , {profile.department}, {profile.university}, advised by{" "}
        <a
          href={profile.advisorUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold border-b border-foreground text-foreground neon-hover"
        >
          Prof. {profile.advisorName}
        </a>
        . My research centers on{" "}
        <strong className="text-foreground font-semibold">large language models</strong>,{" "}
        <strong className="text-foreground font-semibold">AI agents</strong>, and the application of AI to{" "}
        <strong className="text-foreground font-semibold">mental health</strong> and{" "}
        <strong className="text-foreground font-semibold">education</strong>.
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
          <a
            href={`mailto:${profile.email}`}
            className="p-2.5 text-[#ea4335] hover:opacity-70 transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={16} strokeWidth={1.2} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-foreground/60 hover:opacity-70 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={16} strokeWidth={1.2} />
          </a>
          <a
            href={profile.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-[#4285f4] hover:opacity-70 transition-all duration-300"
            aria-label="Google Scholar"
          >
            <GraduationCap size={16} strokeWidth={1.2} />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
