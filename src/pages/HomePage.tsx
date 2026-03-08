import NavBar from "@/components/NavBar";
import Section from "@/components/Section";
import HeroSection from "@/components/sections/HeroSection";
import PublicationsSection from "@/components/sections/PublicationsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />

      <div className="mx-auto max-w-5xl px-6">
        <Section id="about" className="pt-28 pb-12">
          <HeroSection />
        </Section>

        <Section id="publications">
          <PublicationsSection />
        </Section>

        <Section id="projects">
          <ProjectsSection />
        </Section>

        <Section id="contact" className="pb-24">
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
