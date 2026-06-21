import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, Code, FileText } from "lucide-react";
import { publications, AUTHOR_NAME, type Publication } from "@/data/publications";

const venueBadgeStyle = (venueShort: string) => {
  const v = venueShort.toLowerCase();
  if (v.includes("arxiv") || v.includes("preprint"))
    return "border border-dashed border-foreground/25 text-black/60";
  if (v.includes("findings"))
    return "border border-foreground/25 text-black/70 bg-foreground/[0.03]";
  return "border border-foreground/35 text-black bg-foreground/[0.04]";
};

const linkIcon = (label: string) => {
  if (label.toLowerCase().includes("code")) return <Code size={11} strokeWidth={1.5} />;
  if (label.toLowerCase().includes("arxiv")) return <FileText size={11} strokeWidth={1.5} />;
  return <ExternalLink size={11} strokeWidth={1.5} />;
};

const highlightAuthor = (pub: Publication) => {
  const { authors, coFirst, corresponding } = pub;
  const parts = authors.split(AUTHOR_NAME);
  if (parts.length === 1) return <>{authors}</>;
  const markers = [coFirst && "†", corresponding && "*"].filter(Boolean).join("");
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && (
            <>
              <strong className="text-foreground font-semibold underline decoration-foreground/25 underline-offset-2">
                {AUTHOR_NAME}
              </strong>
              {markers && (
                <sup className="font-mono text-[8px] font-medium ml-px">{markers}</sup>
              )}
            </>
          )}
          {part}
        </span>
      ))}
    </>
  );
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, damping: 25, stiffness: 120, mass: 0.8 },
  },
};

const INITIAL_COUNT = 8;

const PubEntry = ({
  pub,
  index,
  total,
}: {
  pub: Publication;
  index: number;
  total: number;
}) => (
  <div
    className={`group relative py-5 hover:bg-foreground/[0.015] transition-all duration-300 print:break-inside-avoid print:py-3 ${
      index < total - 1 ? "border-b border-foreground/8" : ""
    }`}
  >
    <div className="flex-1 min-w-0">
      <div className="flex items-start gap-3">
        <span className="font-mono text-[10px] text-foreground/20 flex-shrink-0 tabular-nums mt-[3px] w-5 text-right print:hidden">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <p className="font-heading font-semibold text-[15px] leading-snug flex-1 group-hover:text-foreground transition-colors duration-300 print:text-black">
              {pub.title}
            </p>
            {/* Venue badge — desktop */}
            <div className="hidden sm:flex items-center gap-2 flex-shrink-0 mt-0.5 print:hidden">
              <span
                className={`font-mono text-[9px] font-medium tracking-widest uppercase px-1.5 py-0.5 whitespace-nowrap ${venueBadgeStyle(pub.venueShort)}`}
              >
                {pub.venueShort}
              </span>
            </div>
          </div>

          {/* Authors */}
          <p className="font-mono text-[11px] text-foreground/45 mt-1.5 leading-relaxed print:text-black">
            {highlightAuthor(pub)}
          </p>

          {/* Venue full name */}
          <p className="font-mono text-[11px] text-foreground/30 italic mt-0.5 print:text-black/60">
            {pub.venue}
          </p>

          {/* Print-only: compact venue + year */}
          <p className="hidden print:block font-mono text-[10px] text-black/40 mt-0.5">
            {pub.venueShort} · {pub.year}
          </p>

          {/* Mobile venue badge */}
          <div className="sm:hidden flex items-center gap-2 mt-1.5 print:hidden">
            <span
              className={`font-mono text-[9px] font-medium tracking-widest uppercase px-1.5 py-0.5 ${venueBadgeStyle(pub.venueShort)}`}
            >
              {pub.venueShort}
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-1.5 mt-3 print:hidden">
            {pub.links.map((l) => (
              <a
                key={l.label}
                href={l.url}
                className="inline-flex items-center gap-1.5 font-mono text-[10px] font-medium tracking-wider uppercase text-foreground/45 hover:text-foreground border border-foreground/15 hover:border-foreground/50 px-2.5 py-1 hover:bg-foreground/[0.03] transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {linkIcon(l.label)}
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PublicationsSection = () => {
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

  const initialPubs = isPrinting ? publications : publications.slice(0, INITIAL_COUNT);
  const extraPubs = isPrinting ? [] : publications.slice(INITIAL_COUNT);

  const hasMarkers = publications.some((p) => p.coFirst || p.corresponding);
  const hasCoFirst = publications.some((p) => p.coFirst);
  const hasCorresponding = publications.some((p) => p.corresponding);

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-2xl font-heading font-bold whitespace-nowrap print:text-black">
          Publications
        </h2>
        <div className="flex-1 schematic-divider" />
        <span className="print:hidden font-mono text-[10px] text-foreground/30 tracking-[0.15em] uppercase flex-shrink-0">
          {publications.length} papers
        </span>
      </div>

      <div className="space-y-0">
        {/* Initial items with stagger animation */}
        {initialPubs.map((pub, i) => (
          <motion.div
            key={pub.title}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            transition={{ delay: i * 0.06 }}
          >
            <PubEntry pub={pub} index={i} total={publications.length} />
          </motion.div>
        ))}

        {/* Extra items revealed by Show More */}
        <AnimatePresence>
          {showAll &&
            extraPubs.map((pub, i) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 120,
                  mass: 0.8,
                  delay: i * 0.05,
                }}
              >
                <PubEntry
                  pub={pub}
                  index={INITIAL_COUNT + i}
                  total={publications.length}
                />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {/* Author marker legend */}
      {hasMarkers && (
        <p className="mt-3 font-mono text-[10px] text-foreground/35 print:text-black/50">
          {hasCoFirst && "† Equal contribution"}
          {hasCoFirst && hasCorresponding && " · "}
          {hasCorresponding && "* Corresponding author"}
        </p>
      )}

      {publications.length > INITIAL_COUNT && !isPrinting && (
        <div className="print:hidden flex justify-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase text-foreground/40 hover:text-foreground border border-foreground/15 hover:border-foreground/35 px-5 py-2 transition-all duration-200 hover:bg-foreground/[0.02]"
          >
            {showAll
              ? "Show Less"
              : `Show More (${publications.length - INITIAL_COUNT})`}
            <ChevronDown
              size={12}
              strokeWidth={1.5}
              className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default PublicationsSection;
