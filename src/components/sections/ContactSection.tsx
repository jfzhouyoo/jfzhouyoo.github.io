import { Mail, Github, GraduationCap, MapPin } from "lucide-react";

const contactItems = [
  { icon: Mail, label: "your.email@university.edu", href: "mailto:your.email@university.edu" },
  { icon: Github, label: "github.com/yourusername", href: "https://github.com/yourusername" },
  { icon: GraduationCap, label: "Google Scholar", href: "https://scholar.google.com/" },
  { icon: MapPin, label: "Room 123, CS Building, University Name", href: undefined },
];

const ContactSection = () => (
  <div>
    <div className="flex items-center gap-4 mb-10">
      <h2 className="text-2xl font-heading font-bold whitespace-nowrap">Contact</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
    </div>

    <div className="rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-card)] p-8 md:p-10 max-w-xl">
      <p className="text-foreground/85 leading-relaxed mb-8 text-[15px]">
        I'm always happy to discuss research, collaboration opportunities, or just chat about NLP and AI. Feel free to reach out!
      </p>
      <div className="space-y-4">
        {contactItems.map(({ icon: Icon, label, href }) => {
          const content = (
            <div className="flex items-center gap-4 text-sm group/item">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/8 text-primary group-hover/item:bg-primary/15 transition-colors duration-300">
                <Icon size={16} />
              </span>
              <span className={href ? "text-foreground group-hover/item:text-primary transition-colors duration-300" : "text-foreground"}>
                {label}
              </span>
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

export default ContactSection;
