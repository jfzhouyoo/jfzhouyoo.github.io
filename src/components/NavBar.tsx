import { useScrollSpy } from "@/hooks/useScrollSpy";

const sections = [
  { id: "about", label: "About Me" },
  { id: "publications", label: "Publications" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const NavBar = () => {
  const activeId = useScrollSpy(sections.map((s) => s.id));

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40">
      <div className="absolute inset-0 bg-background/70 backdrop-blur-xl" />
      <nav className="relative mx-auto max-w-5xl flex items-center justify-between px-6 h-16">
        <a
          href="#about"
          onClick={(e) => { e.preventDefault(); scrollTo("about"); }}
          className="font-heading text-lg font-bold text-foreground tracking-tight hover:no-underline"
        >
          Your Name
        </a>
        <ul className="flex items-center gap-1">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => scrollTo(s.id)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  activeId === s.id
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                }`}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
