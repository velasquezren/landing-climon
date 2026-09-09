import Link from "next/link";
import { services } from "@/data/services";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Arrow } from "@/components/ui/arrow";
import { ButtonLink } from "@/components/ui/button-link";

export function ServiceIndex({ linked = true }: { linked?: boolean }) {
  return (
    <ol className="service-index">
      {services.map((service, index) => (
        <li key={service.slug} id={linked ? undefined : service.slug}>
          {linked ? (
            <Link href={`/servicios#${service.slug}`} className="service-row">
              <span className="service-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{service.name}</span>
              <Arrow diagonal className="service-arrow" />
            </Link>
          ) : (
            <div className="service-row">
              <span className="service-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2>{service.name}</h2>
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}

export function ServicesSection() {
  return (
    <section
      id="servicios"
      aria-labelledby="services-heading"
      className="section-space"
    >
      <Container>
        <div className="section-header">
          <SectionHeading eyebrow="Áreas de laboratorio" id="services-heading">
            Tu salud merece
            <br />
            una mirada completa.
          </SectionHeading>
          <p className="body-copy max-w-sm">
            Conoce nuestras ocho áreas de análisis clínicos y encuentra el
            estudio que necesitas consultar.
          </p>
        </div>
        <ServiceIndex />
        <div className="mt-8 flex justify-end">
          <ButtonLink href="/servicios" variant="text">
            Todos nuestros servicios
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
