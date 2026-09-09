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
    logo: "/brand/logo-climon.png",
    logoWhite: "",
  },
  images: {
    hero: {
      src: "/images/climon-microscopia.jpeg",
      alt: "Profesional de CLIMON realizando una observación con el microscopio.",
      caption: "Una mirada atenta. En cada análisis.",
      position: "55% 40%",
    },
    analysis: {
      src: "/images/climon-analisis.jpeg",
      alt: "Profesional del laboratorio CLIMON observando una muestra en un tubo de ensayo.",
    },
    team: {
      src: "/images/climon-equipo.jpeg",
      alt: "Profesional de CLIMON trabajando con una micropipeta en el laboratorio.",
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
