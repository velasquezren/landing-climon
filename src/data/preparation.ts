export const preparationTopics = [
  {
    slug: "ayuno",
    title: "Ayuno",
    description: "Preparación previa a la toma de muestras.",
    question: "¿Mi análisis requiere ayuno?",
    guidance:
      "Al consultar, indica el nombre de tu análisis y solicita sus indicaciones de preparación. La guía específica de CLIMON estará disponible aquí cuando sea revisada por el laboratorio.",
  },
  {
    slug: "orina",
    title: "Examen de orina",
    description: "Información para la recolección de la muestra.",
    question: "¿Qué debo consultar antes de recolectar la muestra?",
    guidance:
      "Confirma con el laboratorio el recipiente, el procedimiento de recolección y las condiciones de entrega correspondientes a tu estudio.",
  },
  {
    slug: "heces",
    title: "Examen de heces",
    description: "Información para la entrega de la muestra.",
    question: "¿Cómo consulto las condiciones de entrega?",
    guidance:
      "Indica el estudio solicitado y consulta qué recipiente se necesita, cómo se realiza la recolección y cuándo debe entregarse la muestra.",
  },
  {
    slug: "perfil-lipidico",
    title: "Perfil lipídico",
    description: "Preparación correspondiente al estudio solicitado.",
    question: "¿Dónde confirmo la preparación de mi perfil?",
    guidance:
      "Solicita al laboratorio las indicaciones correspondientes al perfil que aparece en tu solicitud. La información específica de preparación está pendiente de revisión.",
  },
  {
    slug: "medicamentos",
    title: "Medicamentos",
    description: "Consultas sobre tu tratamiento y el análisis indicado.",
    question: "¿Con quién consulto sobre mi tratamiento?",
    guidance:
      "Consulta con el profesional que indicó el estudio cualquier duda sobre tu tratamiento. Esta web no proporciona instrucciones para modificar medicamentos.",
  },
  {
    slug: "indicaciones-especiales",
    title: "Indicaciones especiales",
    description: "Información específica para otros estudios.",
    question: "¿Y si mi estudio tiene otras indicaciones?",
    guidance:
      "Ten a mano el nombre completo del estudio al consultar con el laboratorio. Así podrás confirmar la preparación, la toma de muestra y la entrega correspondientes.",
  },
] as const;

export const preparationNotice =
  "Las indicaciones clínicas específicas se publicarán una vez revisadas por el laboratorio. Esta orientación te ayuda a preparar tu consulta; no sustituye las instrucciones de tu estudio.";

export const visitChecklist = [
  {
    title: "El nombre del análisis",
    description:
      "Ten a mano el nombre completo del estudio que necesitas consultar.",
  },
  {
    title: "La preparación",
    description: "Confirma las indicaciones correspondientes a ese estudio.",
  },
  {
    title: "Tu visita y la entrega",
    description:
      "Consulta horario, ubicación, plazo y modalidad de entrega de resultados.",
  },
] as const;
