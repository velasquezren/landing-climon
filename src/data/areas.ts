/**
 * Áreas de análisis de CLIMON, según el documento institucional del laboratorio.
 * Se describe el alcance de cada área; el detalle de estudios se confirma con el
 * laboratorio, ya que depende de la solicitud médica de cada paciente.
 */
export const analysisAreas = [
  {
    slug: "hematologia",
    name: "Hematología",
    description:
      "Estudio de la sangre y sus componentes: glóbulos rojos, glóbulos blancos y plaquetas.",
  },
  {
    slug: "quimica-sanguinea",
    name: "Química sanguínea",
    description:
      "Análisis de las sustancias disueltas en la sangre para evaluar el funcionamiento del hígado, los riñones, el corazón y el páncreas.",
  },
  {
    slug: "urianalisis",
    name: "Urianálisis",
    description:
      "Estudio de la orina para evaluar el sistema urinario y detectar alteraciones que requieran valoración médica.",
  },
  {
    slug: "parasitologia",
    name: "Parasitología",
    description:
      "Estudio de los parásitos que pueden afectar al ser humano y producir distintos tipos de infecciones.",
  },
  {
    slug: "serologia",
    name: "Serología",
    description:
      "Análisis de los anticuerpos presentes en la sangre, generados como respuesta frente a determinadas infecciones o enfermedades.",
  },
  {
    slug: "hormonas",
    name: "Hormonas",
    description:
      "Medición de niveles hormonales para evaluar el sistema endocrino y estudiar alteraciones hormonales y metabólicas.",
  },
] as const;

export const areasNotice =
  "El estudio que corresponde a cada paciente lo indica su médico. Confirma con el laboratorio la disponibilidad y las indicaciones de tu análisis.";
