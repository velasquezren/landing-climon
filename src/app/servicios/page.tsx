import { PageIntro } from "@/components/ui/page-intro";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { ServiceIndex } from "@/components/sections/services-section";
import { AreasSection } from "@/components/sections/areas-section";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Áreas de análisis y atención al paciente",
  "Las seis áreas de análisis de CLIMON, laboratorio clínico de la Clínica Montalvo: hematología, química sanguínea, urianálisis, parasitología, serología y hormonas.",
  "/servicios",
);

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Atención"
        title="Tu laboratorio. Parte de tu clínica."
        description="CLIMON reúne seis áreas de análisis dentro de la Clínica Montalvo. Conoce su alcance, la información sobre tus resultados y la orientación para tu visita."
      />
      <AreasSection />
      <section
        className="section-space border-t border-line"
        aria-label="Atención al paciente"
      >
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
