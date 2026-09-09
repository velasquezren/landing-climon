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
              <span className="location-dot" aria-hidden="true" />
              {siteConfig.descriptor} · Santa Cruz
            </p>
            <h1 id="hero-heading" className="hero-title">
              La ciencia de
              <br />
              analizar.
              <span>La vocación<br />de cuidarte.</span>
            </h1>
            <p className="intro-copy hero-description">
              Detrás de cada muestra hay una persona. En CLIMON, unimos
              análisis clínicos y atención cercana para acompañar el cuidado de tu salud.
            </p>
            <div className="hero-actions">
              <ButtonLink href="#servicios">
                Explorar nuestros análisis
              </ButtonLink>
              <ButtonLink href="#preparacion" variant="text">
                Preparar mi visita
              </ButtonLink>
            </div>
            <a className="hero-help" href="#preparacion">
              <span>Contigo, desde el primer paso.</span>
              <span>
                Orientación al paciente <Arrow />
              </span>
            </a>
          </div>
          <figure className="hero-figure">
            <div className="hero-image">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 767px) 92vw, (max-width: 1399px) 47vw, 620px"
                loading="eager"
                fetchPriority="high"
                style={{ objectFit: "cover", objectPosition: image.position }}
              />
            </div>
            <figcaption>
              <span className="photo-mark" aria-hidden="true">+</span>
              <span><strong>Ciencia con atención humana.</strong><span>{image.caption}</span></span>
            </figcaption>
          </figure>
        </div>
        <nav className="patient-links" aria-label="Accesos para pacientes">
          <p className="patient-links-label">Tu visita, más sencilla.</p>
          {patientLinks.map((link, index) => (
            <a key={link.href} href={link.href}>
              <span className="patient-link-number" aria-hidden="true">0{index + 1}</span>
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
