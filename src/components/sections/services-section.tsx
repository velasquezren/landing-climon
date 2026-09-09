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
            <Link href={service.href} className="service-row">
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
              <div>
                <h2>{service.name}</h2>
                <p className="body-copy mt-3 text-sm">{service.description}</p>
              </div>
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
          <SectionHeading eyebrow="Para pacientes de la clínica" id="services-heading">
            Tu atención continúa.
            <br />
            Estamos contigo.
          </SectionHeading>
          <p className="body-copy max-w-sm">
            Información de resultados, orientación y atención del laboratorio,
            como parte de tu experiencia en la Clínica Montalvo.
          </p>
        </div>
        <ServiceIndex />
        <div className="mt-8 flex justify-end">
          <ButtonLink href="/servicios" variant="text">
            Conocer nuestra atención
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
