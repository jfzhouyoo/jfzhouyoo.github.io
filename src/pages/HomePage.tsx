import NavBar from "@/components/NavBar";
import Section from "@/components/Section";
import HeroSection from "@/components/sections/HeroSection";
import PublicationsSection from "@/components/sections/PublicationsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import HonorsSection from "@/components/sections/HonorsSection";
import ContactSection from "@/components/sections/ContactSection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />

      <div className="mx-auto max-w-5xl px-6">
        <Section id="about" className="pt-24 pb-2">
          <HeroSection />
        </Section>

        <Section id="publications" className="py-4">
          <PublicationsSection />
        </Section>

        <Section id="projects" className="py-4">
          <ProjectsSection />
        </Section>

        <Section id="honors" className="py-4">
          <HonorsSection />
        </Section>

        <Section id="contact" className="pt-4 pb-16">
          <ContactSection />
        </Section>
      </div>

      <footer className="border-t border-border/60 py-8 text-center">
        <p className="text-xs text-muted-foreground tracking-wide">
          © {new Date().getFullYear()} Your Name · Built with React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
