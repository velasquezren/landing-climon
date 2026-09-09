import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";

export function ContactDetails() {
  const contact = siteConfig.contact;
  const hasChannels = Boolean(
    contact.phone || contact.whatsapp || contact.email,
  );
  return (
    <div className="contact-details">
      <div>
        <h3 className="eyebrow mb-4">Dónde encontrarnos</h3>
        <p className="text-lg">{siteConfig.location}</p>
        {contact.address ? (
          <address className="mt-2 text-sm not-italic text-muted">
            {contact.address}
          </address>
        ) : (
          <p className="mt-2 text-sm text-muted">
            Dirección exacta pendiente de publicación.
          </p>
        )}
        {contact.mapsUrl && (
          <a
            href={contact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-link mt-4 inline-block text-sm"
          >
            Ver en Google Maps
            <span className="sr-only"> (abre en una nueva pestaña)</span>
          </a>
        )}
      </div>
      <div>
        <h3 className="eyebrow mb-4">Atención al paciente</h3>
        {hasChannels ? (
          <div className="flex flex-col items-start gap-3">
            {contact.phone && (
              <a
                className="inline-link"
                href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
              >
                {contact.phone}
              </a>
            )}
            {contact.email && (
              <a
                className="inline-link break-all"
                href={`mailto:${contact.email}`}
              >
                {contact.email}
              </a>
            )}
            {contact.whatsapp && (
              <a
                className="inline-link"
                href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
              >
                Escríbenos por WhatsApp
              </a>
            )}
          </div>
        ) : (
          <p className="text-sm leading-relaxed text-muted">
            Próximamente publicaremos nuestros canales oficiales de contacto.
          </p>
        )}
        <p className="mt-4 text-sm text-muted">
          {contact.hours || "Horarios de atención por confirmar."}
        </p>
      </div>
    </div>
  );
}

export function ContactSection() {
  return (
    <section
      id="contacto"
      aria-labelledby="contact-heading"
      className="contact-section"
    >
      <Container>
        <div className="section-header">
          <SectionHeading eyebrow="Estamos en Santa Cruz" id="contact-heading">
            Conversemos sobre tu visita.
          </SectionHeading>
          <ButtonLink href="/contacto" variant="text">
            Información de contacto
          </ButtonLink>
        </div>
        <ContactDetails />
      </Container>
    </section>
  );
}
