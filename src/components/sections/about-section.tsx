import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";

export function AboutSection() {
  return (
    <section
      id="nosotros"
      aria-labelledby="about-heading"
      className="section-space"
    >
      <Container className="about-grid">
        <div>
          <SectionHeading eyebrow="Nuestro laboratorio" id="about-heading">
            Ciencia cercana.
            <br />
            Atención profesional.
          </SectionHeading>
          <p className="mt-8 text-sm text-muted">{siteConfig.location}</p>
        </div>
        <div className="about-copy">
          <p className="text-xl leading-relaxed text-ink">
            {siteConfig.about.intro}
          </p>
          <ButtonLink href="/nosotros" variant="text" className="mt-7">
            Conoce CLIMON
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
