import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
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

interface FadeInViewProps {
  children: ReactNode;
  className?: string;
  /** Use stagger mode for lists of children */
  stagger?: boolean;
}

/** Single item fade-in-up */
export const FadeInView = ({ children, className }: FadeInViewProps) => (
  <motion.div
    variants={itemVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    className={className}
  >
    {children}
  </motion.div>
);

/** Container that staggers its direct children */
export const StaggerContainer = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.05 }}
    className={className}
  >
    {children}
  </motion.div>
);

/** Individual stagger item — must be a child of StaggerContainer */
export const StaggerItem = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div variants={itemVariants} className={className}>
    {children}
  </motion.div>
);

export default FadeInView;
