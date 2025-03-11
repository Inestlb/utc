import { getPartners } from "@/data/partners";
import HeroSection from "@/components/home/HeroSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import ValuePropositionSection from "@/components/home/ValuePropositionSection";
import PartnersSection from "@/components/home/PartnersSection";
import CtaSection from "@/components/home/CtaSection";

export default async function Home() {
  // Fetch partners
  const partners = await getPartners();

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Our Solutions Section */}
      <SolutionsSection />

      {/* Secteurs d'Expertise Section */}
      <ExpertiseSection />

      {/* Value Proposition Section */}
      <ValuePropositionSection />

      {/* Partners Section */}
      <PartnersSection partners={partners} />

      {/* CTA Section */}
      <CtaSection />
    </>
  );
}
