import { PageIntro } from "@/components/ui/page-intro";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { LaboratoryPhotos } from "@/components/sections/about-section";

export const metadata = pageMetadata(
  "Sobre CLIMON",
  siteConfig.about.intro,
  "/nosotros",
);

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Nosotros"
        title="CLIMON. Laboratorio Clínico."
        description={siteConfig.about.intro}
      />
      <section className="section-space">
        <Container className="about-editorial">
          <LaboratoryPhotos />
          <div>
            <p className="eyebrow mb-5">{siteConfig.location}</p>
            <h2 className="section-title">
              Parte de tu clínica.
              <br />
              Cerca de ti.
            </h2>
            <p className="body-copy mt-7">{siteConfig.about.description}</p>
            <p className="body-copy mt-4">
              Detrás de cada muestra hay un proceso que exige precisión,
              conocimiento y responsabilidad. Esa es nuestra forma de entender el
              trabajo de laboratorio: {siteConfig.essence.toLocaleLowerCase("es")}
            </p>
            <ButtonLink href="/servicios" variant="text" className="mt-7">
              Conocer las áreas de análisis
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
