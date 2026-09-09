import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { Arrow } from "@/components/ui/arrow";

const patientLinks = [
  {
    href: "#servicios",
    title: "Conoce nuestros análisis",
    detail: "Áreas de laboratorio",
  },
  {
    href: "#preparacion",
    title: "Prepara tu visita",
    detail: "Orientación para pacientes",
  },
  {
    href: "#contacto",
    title: "Encuentra CLIMON",
    detail: "Ubicación y contacto",
  },
] as const;

export function Hero() {
  const image = siteConfig.images.hero;
  return (
    <section aria-labelledby="hero-heading" className="hero">
      <Container>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-mint" aria-hidden="true" />
              {siteConfig.descriptor} · Santa Cruz
            </p>
            <h1 id="hero-heading" className="hero-title">
              Precisión para
              <br className="hidden sm:block" /> cuidar lo
              <br className="hidden sm:block" /> que importa.
            </h1>
            <p className="intro-copy hero-description">
              Análisis clínicos confiables, atención profesional y resultados
              oportunos en Santa Cruz.
            </p>
            <div className="hero-actions">
              <ButtonLink href={siteConfig.resultsUrl}>
                Ver mis resultados
              </ButtonLink>
              <ButtonLink href="#servicios" variant="text">
                Conocer nuestros análisis
              </ButtonLink>
            </div>
            <a className="hero-help" href="#preparacion">
              <span>¿Es tu primera visita?</span>
              <span>
                Te orientamos <Arrow />
              </span>
            </a>
          </div>
          <figure className="hero-figure">
            <div className="figure-meta">
              <span>Ciencia y atención humana</span>
              <span>CLIMON</span>
            </div>
            <div className="hero-image">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 767px) 92vw, (max-width: 1399px) 44vw, 560px"
                loading="eager"
                fetchPriority="high"
                style={{ objectFit: "cover", objectPosition: image.position }}
              />
            </div>
            <figcaption>{image.caption}</figcaption>
          </figure>
        </div>
        <nav className="patient-links" aria-label="Accesos para pacientes">
          <p className="patient-links-label">Tu visita, más sencilla.</p>
          {patientLinks.map((link) => (
            <a key={link.href} href={link.href}>
              <span>
                <span className="patient-link-detail">{link.detail}</span>
                <span className="patient-link-title">{link.title}</span>
              </span>
              <Arrow diagonal />
            </a>
          ))}
        </nav>
      </Container>
    </section>
  );
}
