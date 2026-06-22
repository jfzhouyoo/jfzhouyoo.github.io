import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, Github } from "lucide-react";
import { projects, type Project } from "@/data/projects";

const INITIAL_COUNT = 3;

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);

  useEffect(() => {
    const onBefore = () => setIsPrinting(true);
    const onAfter = () => setIsPrinting(false);
    window.addEventListener("beforeprint", onBefore);
    window.addEventListener("afterprint", onAfter);
    return () => {
      window.removeEventListener("beforeprint", onBefore);
      window.removeEventListener("afterprint", onAfter);
    };
  }, []);

  const initialProjects = isPrinting
    ? projects
    : projects.slice(0, INITIAL_COUNT);
  const extraProjects = isPrinting ? [] : projects.slice(INITIAL_COUNT);

  const renderCard = (p: Project, index: number) => {
    const img = p.image;
    const href = p.url && p.url !== "#" ? p.url : p.github;
    return (
      <div className="group block overflow-hidden node-card bg-background print:break-inside-avoid">
        {img && (
          href && href !== "#" ? (
            <a href={href} target="_blank" rel="noopener noreferrer" className="block aspect-[4/3] overflow-hidden relative print:aspect-[3/2]">
              <img
                src={img}
                alt={p.title}
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 print:hidden" />
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 print:hidden">
                <span className="inline-flex items-center gap-1 font-mono text-[10px] font-medium tracking-wider uppercase text-background bg-foreground px-3 py-1.5">
                  View <ArrowUpRight size={10} strokeWidth={1.5} />
                </span>
              </div>
            </a>
          ) : (
            <div className="aspect-[4/3] overflow-hidden relative print:aspect-[3/2]">
              <img
                src={img}
                alt={p.title}
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
              />
            </div>
          )
        )}

        <div className="p-4 print:p-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-heading font-bold text-sm print:text-black">
              {p.title}
            </h3>
            <div className="flex items-center gap-1.5 flex-shrink-0 print:hidden">
              {p.github && p.github !== "#" && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/30 hover:text-foreground transition-colors duration-200"
                  onClick={(e) => e.stopPropagation()}
                  title="GitHub"
                >
                  <Github size={14} strokeWidth={1.5} />
                </a>
              )}
              {p.url && p.url !== "#" && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/30 hover:text-foreground transition-colors duration-200"
                  onClick={(e) => e.stopPropagation()}
                  title="Project page"
                >
                  <ArrowUpRight size={14} strokeWidth={1.5} />
                </a>
              )}
            </div>
          </div>

          {p.year && (
            <p className="font-mono text-[9px] text-foreground/30 mt-0.5 tabular-nums print:text-black/40">
              {p.year}
              {p.status && (
                <span
                  className={`ml-2 uppercase tracking-wider ${
                    p.status === "active"
                      ? "text-foreground/50"
                      : "text-foreground/25"
                  }`}
                >
                  · {p.status}
                </span>
              )}
            </p>
          )}

          <p className="font-mono text-[10px] text-foreground/40 mt-2 leading-relaxed print:text-black/70">
            {p.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {p.tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[9px] tracking-wider uppercase px-2 py-0.5 border border-foreground/15 text-foreground/50 print:text-black print:border-black/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-heading font-bold whitespace-nowrap print:text-black">
          Projects
        </h2>
        <div className="flex-1 schematic-divider" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-4">
        {initialProjects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 120,
              mass: 0.8,
              delay: i * 0.08,
            }}
          >
            {renderCard(p, i)}
          </motion.div>
        ))}

        <AnimatePresence>
          {showAll &&
            extraProjects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 120,
                  mass: 0.8,
                  delay: i * 0.06,
                }}
              >
                {renderCard(p, INITIAL_COUNT + i)}
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {projects.length > INITIAL_COUNT && !isPrinting && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="print:hidden mt-6 mx-auto flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase text-foreground/40 hover:text-foreground transition-colors duration-200"
        >
          {showAll ? "Show Less" : `Show More (${projects.length - INITIAL_COUNT})`}
          <ChevronDown
            size={12}
            strokeWidth={1.5}
            className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
          />
        </button>
      )}
    </div>
  );
};

export default ProjectsSection;
