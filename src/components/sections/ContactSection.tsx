import { useState } from "react";
import { Mail, Github, GraduationCap, MapPin, Copy, Check } from "lucide-react";

const contactItems = [
  { icon: Mail, label: "your.email@university.edu", href: "mailto:your.email@university.edu", copyable: true },
  { icon: Github, label: "github.com/yourusername", href: "https://github.com/yourusername", copyable: false },
  { icon: GraduationCap, label: "Google Scholar", href: "https://scholar.google.com/", copyable: false },
  { icon: MapPin, label: "Room 123, CS Building, University Name", href: undefined, copyable: false },
];

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-2xl font-heading font-bold whitespace-nowrap">Contact</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
      </div>

      <div className="rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-card)] p-8 md:p-10 max-w-xl">
        <p className="text-foreground/85 leading-relaxed mb-8 text-[15px]">
          I'm always happy to discuss research, collaboration opportunities, or just chat about NLP and AI. Feel free to reach out!
        </p>
        <div className="space-y-3">
          {contactItems.map(({ icon: Icon, label, href, copyable }) => {
            const content = (
              <div className="flex items-center gap-4 text-sm group/item py-2 px-3 -mx-3 rounded-lg hover:bg-secondary/50 transition-all duration-200">
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent/8 text-accent group-hover/item:bg-accent/15 transition-colors duration-300 flex-shrink-0">
                  <Icon size={16} />
                </span>
                <span className={`flex-1 ${href ? "text-foreground group-hover/item:text-primary transition-colors duration-300" : "text-foreground"}`}>
                  {label}
                </span>
                {copyable && (
                  <button
                    onClick={(e) => handleCopy(label, e)}
                    className="opacity-0 group-hover/item:opacity-100 p-1.5 rounded-md text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-200"
                    aria-label="Copy email"
                    title="Copy to clipboard"
                  >
                    {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
                  </button>
                )}
              </div>
            );

            return href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="block hover:no-underline"
              >
                {content}
              </a>
            ) : (
              <div key={label}>{content}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
