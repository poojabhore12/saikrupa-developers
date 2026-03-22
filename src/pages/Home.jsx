import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import AboutPreview from "../components/AboutPreview";
import ServicesSection from "../components/ServicesSection";
import AmenitiesSection from "../components/AmenitiesSection";
import ProjectsSection from "../components/ProjectsSection";
import AwardsSection from "../components/AwardsSection";
import ClientsSection from "../components/ClientsSection";
import PartnershipSection from "../components/PartnershipSection";
import RedevelopmentTeaser from "../components/RedevelopmentTeaser";
import FAQSection from "../components/FAQSection";
import MapSection from "../components/MapSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <AboutPreview />
      <ServicesSection />
      {/* <AmenitiesSection /> */}
      <ProjectsSection />
      <AwardsSection />
      <ClientsSection />
      <PartnershipSection />
      <RedevelopmentTeaser />
      <FAQSection />
      <MapSection />
    </>
  );
}
