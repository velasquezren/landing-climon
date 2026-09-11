import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Wordmark } from "./wordmark";

/**
 * `wordmark` usa el logotipo horizontal vectorial, pensado para el encabezado.
 * `mark` usa el logotipo vertical con isotipo, que se mantiene en el pie.
 */
export function Brand({ variant = "mark" }: { variant?: "mark" | "wordmark" }) {
  const logo = siteConfig.brand.logo;
  const label = `${siteConfig.name} — ${siteConfig.descriptor}, inicio`;
  return (
    <Link href="/" className="brand text-brand" aria-label={label}>
      {variant === "wordmark" ? (
        <Wordmark className="brand-wordmark" />
      ) : logo ? (
        <Image
          src={logo}
          alt=""
          width={1563}
          height={1563}
          sizes="(max-width: 639px) 88px, 112px"
          className="brand-logo"
        />
      ) : (
        <>
          <span className="brand-name">{siteConfig.name}</span>{" "}
          <span className="brand-descriptor">{siteConfig.descriptor}</span>
        </>
      )}
    </Link>
  );
}
