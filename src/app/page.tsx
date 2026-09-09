import { Hero } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services-section";
import { ResultsCTA } from "@/components/sections/results-cta";
import { PreparationSection } from "@/components/sections/preparation-section";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = {
  ...pageMetadata(
    "Laboratorio Clínico en Santa Cruz, Bolivia",
    siteConfig.description,
    "/",
  ),
  title: { absolute: siteConfig.title },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ResultsCTA />
      <PreparationSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
