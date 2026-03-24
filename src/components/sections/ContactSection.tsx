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
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-heading font-bold whitespace-nowrap print:text-black">Contact</h2>
        <div className="flex-1 schematic-divider" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-8 max-w-2xl">
        {/* Office */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={13} strokeWidth={1.2} className="text-foreground/40" />
            <h3 className="font-mono text-[10px] font-medium tracking-[0.2em] uppercase text-foreground/40">Office</h3>
          </div>
          <p className="text-foreground/70 text-[15px] leading-relaxed">
            Room 123, CS Building
            <br />
            University Name
          </p>
        </div>

        {/* Email */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Mail size={13} strokeWidth={1.2} className="text-foreground/40" />
            <h3 className="font-mono text-[10px] font-medium tracking-[0.2em] uppercase text-foreground/40">Email</h3>
          </div>
          <div className="flex items-center gap-2 group">
            <a
              href="mailto:your.email@university.edu"
              className="font-mono text-sm text-foreground border-b border-foreground/20 hover:border-foreground neon-hover transition-all duration-200"
            >
              your.email@university.edu
            </a>
            <button
              onClick={() => handleCopy("your.email@university.edu")}
              className="opacity-0 group-hover:opacity-100 p-1 text-foreground/30 hover:text-foreground transition-all duration-200"
              aria-label="Copy email"
              title="Copy to clipboard"
            >
              {copied ? <Check size={12} strokeWidth={1.5} /> : <Copy size={12} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
