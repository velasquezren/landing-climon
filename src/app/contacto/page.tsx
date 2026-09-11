import { PageIntro } from "@/components/ui/page-intro";
import { Container } from "@/components/ui/container";
import { ContactDetails } from "@/components/sections/contact-section";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Contacto",
  "CLIMON se encuentra en la Av. Universo 641, Barrio Urbarí, dentro del edificio de la Clínica Montalvo, en Santa Cruz de la Sierra.",
  "/contacto",
);

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contacto"
        title="Estamos en Santa Cruz."
        description="Atendemos dentro del edificio de la Clínica Montalvo, en el Barrio Urbarí. Aquí encontrarás nuestra ubicación y los canales oficiales de atención."
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
