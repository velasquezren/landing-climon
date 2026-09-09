import { PageIntro } from "@/components/ui/page-intro";
import { Container } from "@/components/ui/container";
import { PreparationList } from "@/components/sections/preparation-section";
import { visitChecklist, preparationNotice } from "@/data/preparation";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Preparación para análisis",
  "Orientación para organizar tu visita a CLIMON y consultar la preparación de tus análisis.",
  "/preparacion",
);

export default function PreparationPage() {
  return (
    <>
      <PageIntro
        eyebrow="Preparación"
        title="Una visita bien preparada."
        description="Reúne tus dudas y confirma las indicaciones de tu estudio con el laboratorio. Aquí tienes un punto de partida."
      />
      <section className="section-space" aria-labelledby="visit-heading">
        <Container>
          <div className="section-header">
            <h2 className="section-title" id="visit-heading">
              Antes de venir,
              <br />
              confirma estos detalles.
            </h2>
            <p className="body-copy max-w-sm">
              Tres temas para organizar tu consulta con el laboratorio.
            </p>
          </div>
          <ol className="visit-checklist">
            {visitChecklist.map((item, index) => (
              <li key={item.title}>
                <span className="eyebrow" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{item.title}</h3>
                <p className="body-copy">{item.description}</p>
              </li>
            ))}
          </ol>
          <div className="preparation-grid preparation-topics">
            <div>
              <p className="eyebrow mb-5">Orientación por tema</p>
              <h2 className="section-title">
                Resuelve tus
                <br />
                primeras dudas.
              </h2>
              <p className="body-copy mt-6">{preparationNotice}</p>
            </div>
            <PreparationList />
          </div>
        </Container>
      </section>
    </>
  );
}
