import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useState, useEffect } from "react";

const sections = [
  { id: "about", label: "About Me" },
  { id: "publications", label: "Publications" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const NavBar = () => {
  const activeId = useScrollSpy(sections.map((s) => s.id));
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-border/50 shadow-[var(--shadow-soft)]"
          : "bg-transparent"
      }`}
    >
      <nav className="relative mx-auto max-w-5xl flex items-center justify-between px-6 h-16">
        <a
          href="#about"
          onClick={(e) => { e.preventDefault(); scrollTo("about"); }}
          className="font-heading text-lg font-bold text-foreground tracking-tight hover:no-underline hover:text-foreground"
        >
          Your Name
        </a>
        <ul className="flex items-center gap-0.5">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => scrollTo(s.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeId === s.id
                    ? "text-primary bg-primary/8"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.label}
                {activeId === s.id && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-primary transition-all duration-300" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
