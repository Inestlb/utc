import { Partner } from "@/lib/types";

export const partners: Partner[] = [
  {
    id: "partner-001",
    name: "Global Industrial Solutions",
    logo: "/images/partner-gis.svg",
    description: "Leading distributor of industrial equipment across Europe and Asia. Specializing in pumps, valves, and hydraulic systems.",
    website: "https://example.com/gis",
  },
  {
    id: "partner-002",
    name: "TechMech Engineering",
    logo: "/images/partner-techmech.svg",
    description: "Engineering firm providing custom solutions for manufacturing industries. Experts in automation and process optimization.",
    website: "https://example.com/techmech",
  },
  {
    id: "partner-003",
    name: "EastWest Trading Co.",
    logo: "/images/partner-eastwest.svg",
    description: "International trading company connecting manufacturers with markets in North America, Europe, and the Middle East.",
    website: "https://example.com/eastwest",
  },
  {
    id: "partner-004",
    name: "IndustrialTech Innovations",
    logo: "/images/partner-industrialtech.svg",
    description: "Technology-focused industrial solutions provider specializing in IoT and smart factory implementations.",
    website: "https://example.com/industrialtech",
  },
  {
    id: "partner-005",
    name: "Pacific Rim Exports",
    logo: "/images/partner-pacificrim.svg",
    description: "Export specialists with strong presence in Asian markets. Expertise in logistics and regulatory compliance.",
    website: "https://example.com/pacificrim",
  },
];

export async function getPartners(): Promise<Partner[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));

  return partners;
}

export async function getPartnerById(id: string): Promise<Partner | undefined> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 200));

  return partners.find(partner => partner.id === id);
}
