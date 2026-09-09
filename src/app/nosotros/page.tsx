import { PageIntro } from "@/components/ui/page-intro";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

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
        <Container className="about-grid">
          <div>
            <p className="eyebrow mb-5">{siteConfig.location}</p>
            <h2 className="section-title">
              Análisis clínicos.
              <br />
              Atención profesional.
            </h2>
          </div>
          <div className="about-copy">
            <p className="body-copy">{siteConfig.about.description}</p>
            <ButtonLink href="/servicios" variant="text" className="mt-7">
              Conocer nuestros análisis
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
