import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Consulta de resultados",
  "El portal digital de resultados de CLIMON estará disponible próximamente.",
  "/resultados",
  false,
);

export default function ResultsPage() {
  return (
    <section className="result-page">
      <Container>
        <p className="eyebrow mb-8">CLIMON / Portal de pacientes</p>
        <div className="result-panel">
          <p className="result-status">
            <span className="h-1.5 w-1.5 bg-mint" aria-hidden="true" />
            Próximamente
          </p>
          <h1 className="page-title mt-7">
            Consulta
            <br />
            de resultados.
          </h1>
          <p className="intro-copy mt-7 max-w-lg">
            El portal digital de resultados estará disponible próximamente.
          </p>
          <p className="body-copy mt-4 max-w-lg">
            Estamos preparando un espacio para consultar tus estudios. Te
            informaremos aquí cuando esté habilitado.
          </p>
          <ButtonLink href="/" className="mt-10">
            Volver al inicio
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
