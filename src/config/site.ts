type SocialLink = { label: string; url: string };

export const siteConfig = {
  name: "CLIMON",
  descriptor: "Laboratorio Clínico",
  clinicName: "Clínica Montalvo",
  legalName: "Laboratorio Clínico Climon S.R.L.",
  location: "Santa Cruz, Bolivia",
  title: "CLIMON | Laboratorio Clínico de la Clínica Montalvo",
  description:
    "CLIMON, laboratorio clínico de la Clínica Montalvo en Santa Cruz. Información de resultados y orientación para acompañar tu atención en la clínica.",
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
      caption: "Detrás de cada resultado, una persona.",
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
      "CLIMON es el laboratorio clínico que forma parte de la Clínica Montalvo, en Santa Cruz, Bolivia.",
    description:
      "Acompañamos la atención de los pacientes de la clínica a través del trabajo de laboratorio y los resultados de sus estudios, como parte del cuidado y seguimiento de su salud.",
  },
};

export const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Atención", href: "/servicios" },
  { label: "Tu visita", href: "/preparacion" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
] as const;
