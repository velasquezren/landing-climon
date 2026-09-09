import { PageIntro } from "@/components/ui/page-intro";
import { Container } from "@/components/ui/container";
import { ContactDetails } from "@/components/sections/contact-section";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Contacto",
  "Información de ubicación y atención al paciente de CLIMON en Santa Cruz, Bolivia.",
  "/contacto",
);

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contacto"
        title="Estamos en Santa Cruz."
        description="Encuentra aquí la información de ubicación y los canales oficiales de atención de CLIMON."
      />
      <section
        aria-labelledby="contact-details-heading"
        className="section-space"
      >
        <Container>
          <h2 id="contact-details-heading" className="section-title mb-8">
            Información de atención
          </h2>
          <ContactDetails />
        </Container>
      </section>
    </>
  );
}
