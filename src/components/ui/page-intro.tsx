import Link from "next/link";
import { Container } from "./container";

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-intro">
      <Container>
        <nav
          aria-label="Ruta de navegación"
          className="mb-12 text-sm text-muted"
        >
          <Link href="/" className="inline-link">
            Inicio
          </Link>
          <span aria-hidden="true" className="mx-3">
            /
          </span>
          <span aria-current="page">{eyebrow}</span>
        </nav>
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h1 className="page-title">{title}</h1>
        <p className="intro-copy mt-6 max-w-2xl">{description}</p>
      </Container>
    </section>
  );
}
