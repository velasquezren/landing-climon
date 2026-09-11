import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Brand() {
  const logo = siteConfig.brand.logo;
  return (
    <Link href="/" className="brand text-brand">
      {logo ? (
        <Image
          src={logo}
          alt={`${siteConfig.name} — ${siteConfig.descriptor}`}
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
      <span className="sr-only">, inicio</span>
    </Link>
  );
}
