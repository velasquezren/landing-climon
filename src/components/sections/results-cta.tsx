import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";

export function ResultsCTA() {
  return (
    <section className="results-section" aria-labelledby="results-heading">
      <Container className="results-grid">
        <div>
          <div className="portal-symbol" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.3" />
              <path d="M9 8h6M9 12h6M9 16h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </div>
          <p className="eyebrow mb-6 text-on-brand">Tu espacio de resultados</p>
          <h2 id="results-heading" className="section-title text-white">
            Más cerca de ti.
            <br />
            También en digital.
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
