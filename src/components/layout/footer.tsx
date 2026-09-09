import Link from "next/link";
import { navigation, siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Brand } from "./brand";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="flex flex-col justify-between gap-9 pb-10 md:flex-row md:items-start">
          <div>
            <Brand />
            <p className="mt-5 text-sm text-muted">{siteConfig.location}</p>
          </div>
          <nav
            aria-label="Navegación del pie"
            className="grid grid-cols-2 gap-x-10 gap-y-4 text-sm sm:grid-cols-3"
          >
            {navigation
              .filter((item) => item.href !== "/")
              .map((item) => (
                <Link className="inline-link" key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            <Link className="inline-link" href={siteConfig.resultsUrl}>
              Resultados
            </Link>
          </nav>
          {siteConfig.socials.length > 0 && (
            <nav aria-label="Redes sociales" className="flex gap-4">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className="inline-link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {social.label}
                  <span className="sr-only"> (abre en una nueva pestaña)</span>
                </a>
              ))}
            </nav>
          )}
        </div>
        <div className="flex flex-col justify-between gap-5 border-t border-line pt-6 text-xs leading-6 text-muted md:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}
          </p>
          <div className="flex flex-wrap gap-x-7 gap-y-2">
            <Link className="inline-link" href="/privacidad">
              Aviso de privacidad
            </Link>
            <a className="back-to-top" href="#contenido">
              Volver arriba <span aria-hidden="true">↑</span>
            </a>
            <Link className="inline-link" href="/terminos">
              Términos de uso
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
