import { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import ValuePropositionSection from "@/components/home/ValuePropositionSection";
import PartnersSection from "@/components/home/PartnersSection";
import { getPartners } from "@/data/partners";

export const metadata: Metadata = {
  title: "UTC - Solutions Industrielles",
  description: "Découvrez nos solutions industrielles innovantes pour optimiser vos processus de production.",
};

export default async function Home() {
  const partners = await getPartners();

  return (
    <main>
      <HeroSection />
      <SolutionsSection />
      <ExpertiseSection />
      <ValuePropositionSection />
      <PartnersSection partners={partners} />
    </main>
  );
}
