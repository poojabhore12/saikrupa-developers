import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import AboutPreview from "../components/AboutPreview";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import AwardsSection from "../components/AwardsSection";
import ClientsSection from "../components/ClientsSection";
import FAQSection from "../components/FAQSection";
import MapSection from "../components/MapSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <AboutPreview />
      <ServicesSection />
      <ProjectsSection />
      <AwardsSection />
      <ClientsSection />
      <FAQSection />
      <MapSection />
    </>
  );
}
