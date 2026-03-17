import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 120,
      mass: 0.8,
    },
  },
};

const Section = ({ id, children, className }: SectionProps) => {
  return (
    <motion.section
      id={id}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={cn("scroll-mt-20 py-6", className)}
    >
      {children}
    </motion.section>
  );
};

export default Section;
