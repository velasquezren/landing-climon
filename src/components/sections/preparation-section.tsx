import { preparationTopics, preparationNotice } from "@/data/preparation";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";

export function PreparationList() {
  return (
    <div className="preparation-list">
      {preparationTopics.map((topic, index) => (
        <details className="preparation-detail" key={topic.slug}>
          <summary>
            <span className="service-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="flex-1">{topic.title}</span>
            <svg
              className="disclosure-icon"
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" />
              <path
                className="disclosure-vertical"
                d="M12 5v14"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </summary>
          <div className="preparation-answer">
            <p className="font-medium text-ink">{topic.question}</p>
            <p className="body-copy mt-3">{topic.guidance}</p>
            <ButtonLink href={`/preparacion/${topic.slug}`} variant="text">
              Información sobre {topic.title.toLocaleLowerCase("es")}
            </ButtonLink>
          </div>
        </details>
      ))}
    </div>
  );
}

export function PreparationSection() {
  return (
    <section
      id="preparacion"
      aria-labelledby="preparation-heading"
      className="section-space bg-paper"
    >
      <Container className="preparation-grid">
        <div>
          <SectionHeading eyebrow="Orientación al paciente" id="preparation-heading">
            Menos dudas.
            <br />
            Más tranquilidad.
          </SectionHeading>
          <p className="body-copy mt-6 max-w-sm">
            Resuelve tus primeras dudas sin salir de esta página. Selecciona un
            tema para orientarte sobre tu visita o la entrega de resultados.
          </p>
          <ButtonLink href="/preparacion" variant="text" className="mt-6">
            Orientación para mi atención
          </ButtonLink>
          <div className="preparation-note">
            <span className="eyebrow">Información para pacientes</span>
            <p>{preparationNotice}</p>
          </div>
        </div>
        <PreparationList />
      </Container>
    </section>
  );
}
