import { useFadeIn } from "@/hooks/useFadeIn";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const Section = ({ id, children, className }: SectionProps) => {
  const { ref, visible } = useFadeIn();

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "scroll-mt-20 py-20 transition-all duration-700 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
