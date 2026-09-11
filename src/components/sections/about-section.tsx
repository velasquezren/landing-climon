import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";

export function AboutSection() {
  return (
    <section
      id="nosotros"
      aria-labelledby="about-heading"
      className="section-space about-section"
    >
      <Container className="about-editorial">
        <LaboratoryPhotos />
        <div className="about-editorial-copy">
          <SectionHeading eyebrow="Nuestro laboratorio" id="about-heading">
            Personas que cuidan.
            <br />
            Ciencia que acompaña.
          </SectionHeading>
          <p className="body-copy mt-7">
            {siteConfig.about.intro}
          </p>
          <p className="body-copy mt-4">
            {siteConfig.about.description}
          </p>
          <div className="about-signature">
            <span aria-hidden="true">+</span>
            <p>Parte de la {siteConfig.clinicName}.<br /><strong>{siteConfig.essence}</strong></p>
          </div>
          <ButtonLink href="/nosotros" variant="text" className="mt-7">
            Conoce CLIMON
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

export function LaboratoryPhotos() {
  return (
    <div className="laboratory-photos">
      <figure className="laboratory-photo-primary">
        <div className="laboratory-photo-frame">
          <Image
            src={siteConfig.images.analysis.src}
            alt={siteConfig.images.analysis.alt}
            fill
            sizes="(max-width: 767px) 65vw, (max-width: 1399px) 30vw, 410px"
            style={{ objectFit: "cover", objectPosition: "60% center" }}
          />
        </div>
        <figcaption>El cuidado está en los detalles.</figcaption>
      </figure>
      <figure className="laboratory-photo-secondary">
        <div className="laboratory-photo-frame">
          <Image
            src={siteConfig.images.team.src}
            alt={siteConfig.images.team.alt}
            fill
            sizes="(max-width: 767px) 43vw, (max-width: 1399px) 20vw, 270px"
            style={{ objectFit: "cover", objectPosition: "70% center" }}
          />
        </div>
        <figcaption>Somos CLIMON.</figcaption>
      </figure>
      <span className="laboratory-photo-label" aria-hidden="true">CIENCIA · CERCANÍA · CLIMON</span>
    </div>
  );
}
