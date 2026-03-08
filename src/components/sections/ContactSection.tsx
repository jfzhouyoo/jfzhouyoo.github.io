import { useState } from "react";
import { Mail, MapPin, Copy, Check } from "lucide-react";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-2xl font-heading font-bold mb-3">Contact Me</h2>
        <p className="text-muted-foreground text-[15px] max-w-md mx-auto">
          I'm always happy to discuss research, collaboration opportunities, or just chat about NLP and AI.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-8 max-w-2xl mx-auto">
        {/* Office */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={15} className="text-accent" />
            <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-foreground/70">Office</h3>
          </div>
          <p className="text-foreground/85 text-[15px] leading-relaxed">
            Room 123, CS Building
            <br />
            University Name
          </p>
        </div>

        {/* Email */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Mail size={15} className="text-accent" />
            <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-foreground/70">Email</h3>
          </div>
          <div className="flex items-center gap-2 group">
            <a
              href="mailto:your.email@university.edu"
              className="text-[15px] text-accent hover:text-primary transition-colors duration-200"
            >
              your.email@university.edu
            </a>
            <button
              onClick={() => handleCopy("your.email@university.edu")}
              className="opacity-0 group-hover:opacity-100 p-1 rounded text-muted-foreground hover:text-accent transition-all duration-200"
              aria-label="Copy email"
              title="Copy to clipboard"
            >
              {copied ? <Check size={13} className="text-primary" /> : <Copy size={13} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
