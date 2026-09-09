import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <section className="section-space">
      <Container>
        <p className="eyebrow mb-6">CLIMON / 404</p>
        <h1 className="page-title">
          No encontramos
          <br />
          esta página.
        </h1>
        <p className="intro-copy mt-6">
          Puedes volver al inicio para encontrar la información que buscas.
        </p>
        <ButtonLink href="/" className="mt-8">
          Volver al inicio
        </ButtonLink>
      </Container>
    </section>
  );
}
