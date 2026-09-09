import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";

export function ResultsCTA() {
  return (
    <section className="results-section" aria-labelledby="results-heading">
      <Container className="results-grid">
        <div>
          <p className="eyebrow mb-6 text-on-brand">Tu espacio de resultados</p>
          <h2 id="results-heading" className="section-title text-white">
            Tus resultados,
            <br />
            cuando los necesites.
          </h2>
        </div>
        <div className="results-copy">
          <p className="portal-status">
            <span aria-hidden="true" />
            Disponible próximamente
          </p>
          <p className="text-lg leading-relaxed text-on-brand">
            Estamos preparando un espacio para consultar tus estudios de forma
            rápida, privada y segura.
          </p>
          <ButtonLink
            href={siteConfig.resultsUrl}
            variant="light"
            className="mt-8"
          >
            Conocer el portal
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
