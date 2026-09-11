type SocialLink = { label: string; url: string };

export const siteConfig = {
  name: "CLIMON",
  descriptor: "Laboratorio Clínico",
  clinicName: "Clínica Montalvo",
  legalName: "Laboratorio Clínico Climon S.R.L.",
  location: "Santa Cruz de la Sierra, Bolivia",
  title: "CLIMON | Laboratorio Clínico de la Clínica Montalvo",
  description:
    "CLIMON, laboratorio clínico integral de la Clínica Montalvo en Santa Cruz de la Sierra. Más de diez años de experiencia en hematología, química sanguínea, urianálisis, parasitología, serología y hormonas.",
  // Dominio previsto: confirmar antes de publicar. SITE_URL permite sustituirlo.
  url: process.env.SITE_URL || "https://climon.com",
  resultsUrl: "/resultados",
  contact: {
    // Pendientes de información oficial. Los campos vacíos no generan enlaces.
    phone: "",
    whatsapp: "", // Número internacional, solo dígitos.
    email: "",
    address: "Av. Universo 641, Barrio Urbarí — edificio de la Clínica Montalvo",
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
  essence: "Confianza que se analiza.",
  about: {
    intro:
      "CLIMON es el laboratorio clínico integral que forma parte de la Clínica Montalvo, en Santa Cruz de la Sierra.",
    description:
      "Somos un establecimiento de nivel II legalmente establecido, que cumple con los requerimientos del SEDES. Con más de diez años de experiencia y un equipo altamente calificado, reunimos seis áreas de análisis en un mismo laboratorio para acompañar la prevención, el diagnóstico y el seguimiento de la salud de cada paciente.",
  },
};

export const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Atención", href: "/servicios" },
  { label: "Tu visita", href: "/preparacion" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
] as const;
