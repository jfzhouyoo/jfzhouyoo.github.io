import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useState, useEffect } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "publications", label: "Publications" },
  { id: "projects", label: "Projects" },
  { id: "honors", label: "Honors" },
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
      className={`print:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-foreground/10"
          : "bg-transparent"
      }`}
    >
      <nav className="relative mx-auto max-w-5xl flex items-center justify-between px-6 h-14">
        <a
          href="#about"
          onClick={(e) => { e.preventDefault(); scrollTo("about"); }}
          className="font-mono text-xs font-medium tracking-[0.2em] uppercase text-foreground"
        >
          YOUR NAME
        </a>
        <ul className="flex items-center gap-0">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => scrollTo(s.id)}
                className={`relative px-3 py-2 font-mono text-[11px] tracking-wider uppercase transition-all duration-300 ${
                  activeId === s.id
                    ? "text-foreground font-medium"
                    : "text-foreground/40 hover:text-foreground"
                }`}
              >
                {s.label}
                {activeId === s.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-foreground" />
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
