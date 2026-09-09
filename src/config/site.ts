type SocialLink = { label: string; url: string };

export const siteConfig = {
  name: "CLIMON",
  descriptor: "Laboratorio Clínico",
  legalName: "Laboratorio Clínico Climon S.R.L.",
  location: "Santa Cruz, Bolivia",
  title: "CLIMON | Laboratorio Clínico en Santa Cruz, Bolivia",
  description:
    "Laboratorio Clínico CLIMON en Santa Cruz. Análisis de hematología, bioquímica clínica, hormonas, serología, urianálisis, microbiología y más.",
  // Dominio previsto: confirmar antes de publicar. SITE_URL permite sustituirlo.
  url: process.env.SITE_URL || "https://climon.com",
  resultsUrl: "/resultados",
  contact: {
    // Pendientes de información oficial. Los campos vacíos no generan enlaces.
    phone: "",
    whatsapp: "", // Número internacional, solo dígitos.
    email: "",
    address: "",
    hours: "",
    mapsUrl: "",
  },
  socials: [] as SocialLink[],
  brand: {
    logo: "", // /brand/logo-climon.svg cuando exista el archivo oficial.
    logoWhite: "",
  },
  images: {
    hero: {
      src: "/images/laboratory-placeholder.svg",
      alt: "Composición abstracta de planos translúcidos en tonos verdes; imagen temporal.",
      caption: "Composición visual · fotografía institucional próximamente",
      position: "center",
    },
  },
  about: {
    intro:
      "Laboratorio Clínico Climon S.R.L. es un centro especializado en análisis clínicos en Bolivia.",
    description:
      "Ofrece estudios en hematología, bioquímica clínica, urianálisis, parasitología, serología, hormonas, espermogramas y cultivos bacteriológicos.",
  },
};

export const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Preparación", href: "/preparacion" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
] as const;
