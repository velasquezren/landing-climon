import { siteConfig } from "@/config/site";

export const services = [
  {
    slug: "resultados",
    name: "Información de resultados",
    href: siteConfig.resultsUrl,
    description:
      "Conoce el estado del acceso digital y qué consultar sobre la entrega de tus resultados.",
  },
  {
    slug: "atencion-en-la-clinica",
    name: "Tu atención en la clínica",
    href: "/nosotros",
    description:
      "Conoce CLIMON y su lugar dentro de la atención de la Clínica Montalvo.",
  },
  {
    slug: "orientacion-al-paciente",
    name: "Orientación para tu visita",
    href: "/preparacion",
    description:
      "Organiza tus dudas sobre la solicitud de tu estudio, la visita y la entrega de resultados.",
  },
  {
    slug: "contacto",
    name: "Contacto con el laboratorio",
    href: "/contacto",
    description:
      "Encuentra la información de atención de CLIMON y sus canales oficiales cuando se publiquen.",
  },
] as const;
