import { analysisAreas, areasNotice } from "@/data/areas";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function AreaIndex() {
  return (
    <ol className="area-index">
      {analysisAreas.map((area, index) => (
        <li key={area.slug} id={area.slug}>
          <span className="service-number" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3>{area.name}</h3>
          <p className="body-copy">{area.description}</p>
        </li>
      ))}
    </ol>
  );
}

export function AreasSection() {
  return (
    <section
      id="areas"
      aria-labelledby="areas-heading"
      className="section-space"
    >
      <Container>
        <div className="section-header">
          <SectionHeading eyebrow="Áreas de análisis" id="areas-heading">
            Un laboratorio integral.
            <br />
            Seis áreas de análisis.
          </SectionHeading>
          <p className="body-copy max-w-sm">{areasNotice}</p>
        </div>
        <AreaIndex />
      </Container>
    </section>
  );
}
