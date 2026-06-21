import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { awards } from "@/data/awards";

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, damping: 25, stiffness: 120, mass: 0.8 },
  },
};

const HonorsSection = () => {
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
  }, [isPrinting]);

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-2xl font-heading font-bold whitespace-nowrap print:text-black">
          Honors & Awards
        </h2>
        <div className="flex-1 schematic-divider" />
      </div>

      <div className="space-y-0">
        {awards.map((a, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: i * 0.06 }}
          >
            <div className="group flex items-start gap-6 py-4 border-b border-foreground/8 last:border-b-0 hover:bg-foreground/[0.02] transition-colors duration-200 print:break-inside-avoid print:py-2.5 print:hover:bg-transparent">
              <span className="font-mono text-[11px] font-semibold text-foreground/35 tabular-nums flex-shrink-0 w-10 text-right mt-0.5 print:text-black/50">
                {a.year}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-heading font-semibold text-[15px] leading-snug print:text-black">
                  {a.title}
                </p>
                <p className="text-[13px] text-foreground/45 mt-0.5 leading-relaxed print:text-black/60">
                  {a.organization}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HonorsSection;
