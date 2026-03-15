import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import AboutPreview from "../components/AboutPreview";
import ProjectsSection from "../components/ProjectsSection";
import ClientsSection from "../components/ClientsSection";
import AwardsSection from "../components/AwardsSection";
import MapSection from "../components/MapSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <AboutPreview />
      <ProjectsSection />
      <ClientsSection />
      <AwardsSection />
      <MapSection />
    </>
  );
}