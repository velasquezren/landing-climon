import { PageIntro } from "@/components/ui/page-intro";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { ServiceIndex } from "@/components/sections/services-section";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Atención al paciente",
  "Información de resultados y orientación para pacientes de CLIMON, laboratorio clínico de la Clínica Montalvo.",
  "/servicios",
);

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Atención"
        title="Tu laboratorio. Parte de tu clínica."
        description="CLIMON acompaña tu atención en la Clínica Montalvo. Encuentra información sobre tus resultados y orientación para tu visita."
      />
      <section className="section-space" aria-label="Atención al paciente">
        <Container>
          <ServiceIndex linked={false} />
          <div className="notice mt-12">
            <h2 className="text-xl font-medium">
              Tu estudio y tus resultados
            </h2>
            <p className="body-copy mt-3 max-w-2xl">
              Confirma con el equipo de atención las indicaciones de tu estudio
              y la modalidad de entrega de resultados.
            </p>
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2">
              <ButtonLink href="/preparacion" variant="text">
                Orientación para tu visita
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
