import { PageIntro } from "@/components/ui/page-intro";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { ServiceIndex } from "@/components/sections/services-section";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Áreas de laboratorio",
  "Conoce las áreas de análisis clínicos de CLIMON en Santa Cruz, Bolivia.",
  "/servicios",
);

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Servicios"
        title="Análisis clínicos. Atención especializada."
        description="Conoce las áreas de estudio de nuestro laboratorio."
      />
      <section className="section-space" aria-label="Áreas de análisis">
        <Container>
          <ServiceIndex linked={false} />
          <div className="notice mt-12">
            <h2 className="text-xl font-medium">
              Información sobre tu estudio
            </h2>
            <p className="body-copy mt-3 max-w-2xl">
              Consulta con el laboratorio la disponibilidad, preparación y plazo
              de entrega del análisis solicitado.
            </p>
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2">
              <ButtonLink href="/preparacion" variant="text">
                Preparación para análisis
              </ButtonLink>
              <ButtonLink href="/contacto" variant="text">
                Información de contacto
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
