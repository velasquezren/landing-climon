export const preparationTopics = [
  {
    slug: "consulta-de-resultados",
    title: "Consulta de resultados",
    description: "Información sobre el acceso a tus resultados de CLIMON.",
    question: "¿Dónde podré consultar mis resultados?",
    guidance:
      "El portal digital de CLIMON está en preparación. Su disponibilidad se anunciará en la sección de resultados. Para una entrega actual, consulta la modalidad con el equipo que acompaña tu atención en la Clínica Montalvo.",
  },
  {
    slug: "entrega-de-resultados",
    title: "Entrega de resultados",
    description: "Qué consultar sobre la entrega de los resultados de tu estudio.",
    question: "¿Cuándo y cómo recibiré mis resultados?",
    guidance:
      "Confirma con el laboratorio la fecha y la modalidad de entrega correspondientes a tu estudio. Esta web todavía no permite comprobar el estado de resultados individuales.",
  },
  {
    slug: "solicitud-de-estudios",
    title: "Solicitud de tu estudio",
    description: "Información para organizar tu consulta con el laboratorio.",
    question: "¿Qué información debo tener a mano?",
    guidance:
      "Ten a mano la solicitud o el nombre del estudio indicado en la clínica. Confirma con el equipo qué documentación necesitas presentar para tu atención.",
  },
  {
    slug: "antes-de-tu-visita",
    title: "Antes de tu visita",
    description: "Orientación para preparar tu visita a CLIMON.",
    question: "¿Cómo preparo mi visita al laboratorio?",
    guidance:
      "Confirma el horario y las indicaciones que correspondan a tu estudio con el equipo de atención. La preparación específica debe ser indicada por el laboratorio.",
  },
  {
    slug: "consulta-en-la-clinica",
    title: "Tu consulta en la clínica",
    description: "Información para organizar la entrega de resultados y tu próxima consulta.",
    question: "¿Qué debo confirmar para mi próxima consulta?",
    guidance:
      "Consulta con el equipo de la Clínica Montalvo cómo presentar los resultados en tu próxima atención. El laboratorio puede orientarte sobre su entrega; la web no ofrece interpretación clínica.",
  },
  {
    slug: "atencion-al-paciente",
    title: "Atención al paciente",
    description: "Dónde encontrar la información oficial de atención de CLIMON.",
    question: "¿Dónde encuentro los datos de atención?",
    guidance:
      "La sección de contacto reúne la información de CLIMON. Los canales oficiales y horarios se publicarán allí una vez confirmados por el laboratorio.",
  },
] as const;

export const preparationNotice =
  "Confirma con el equipo de atención las indicaciones de tu estudio y la modalidad de entrega de resultados.";

export const visitChecklist = [
  {
    title: "Tu solicitud",
    description:
      "Ten a mano la solicitud del estudio indicado durante tu atención en la clínica.",
  },
  {
    title: "Tu visita",
    description:
      "Confirma el horario, la documentación y las indicaciones del laboratorio.",
  },
  {
    title: "Tus resultados",
    description:
      "Consulta cuándo y cómo se entregarán para organizar tu próxima atención.",
  },
] as const;
