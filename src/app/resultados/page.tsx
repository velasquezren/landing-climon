import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

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
        <p className="eyebrow mb-8">CLIMON / {siteConfig.clinicName}</p>
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
            Estamos preparando un espacio para los pacientes de CLIMON,
            laboratorio clínico de la {siteConfig.clinicName}. Te informaremos
            aquí cuando esté habilitado.
          </p>
          <div className="notice mt-8 max-w-xl">
            <h2 className="text-xl font-medium">Sobre la entrega de tus resultados</h2>
            <p className="body-copy mt-3">
              Para una entrega actual, confirma la fecha y la modalidad con el
              equipo que acompaña tu atención en la clínica.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
            <ButtonLink href="/contacto">Información de atención</ButtonLink>
            <ButtonLink href="/" variant="text">Volver al inicio</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
