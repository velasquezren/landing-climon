# CLIMON — sitio institucional

## Alcance

Sitio público de Laboratorio Clínico Climon S.R.L., parte de la Clínica Montalvo en Santa Cruz de la Sierra, Bolivia. La relación con la clínica y el documento institucional de marca fueron confirmados por el propietario. Next.js 16.3.4, App Router, TypeScript, Tailwind, next/font y next/image; componentes de servidor por defecto.

El propósito principal es presentar el laboratorio dentro de la atención de la clínica y orientar al paciente sobre sus resultados. El portal digital sigue pendiente: /resultados es informativo, sin autenticación, datos de pacientes ni resultados ficticios.

## Dirección visual

Se conserva la composición editorial aprobada, predominio del blanco, escala de verdes con marca #006156 y acento #39ADA3, texto #14201E, botones con radio de 2 px, Manrope y Geist. El encabezado usa el logotipo horizontal vectorial (`src/components/layout/wordmark.tsx`, trazado del original oficial y coloreado con `currentColor`); el pie conserva el logotipo vertical con isotipo. Tres fotografías oficiales. Sin estadísticas, testimonios ni certificaciones inventadas. Movimiento mínimo y respeto por prefers-reduced-motion.

## Contenido

Home: cabecera, portada con foco en resultados, cuatro accesos de atención, sección de resultados, presentación de CLIMON y Clínica Montalvo, seis preguntas de orientación al paciente, contacto y pie.

Rutas: /servicios presenta las seis áreas de análisis y la atención al paciente; /preparacion presenta orientación general y seis temas sobre resultados, visita y atención en la clínica; se conservan /nosotros, /contacto, /resultados y avisos legales. Los enlaces anteriores a temas específicos de preparación redirigen temporalmente a /preparacion.

Se publican las seis áreas de análisis confirmadas por el laboratorio (hematología, química sanguínea, urianálisis, parasitología, serología y hormonas) con la descripción de su alcance, en `src/data/areas.ts`. No se publica el listado de estudios concretos ni precios: el estudio de cada paciente lo indica su médico. La página no ofrece instrucciones médicas ni interpretación de resultados.

## Recursos e información

Logotipos, favicons y fotografías oficiales incorporados. Datos centralizados en src/config/site.ts. Dirección confirmada: Av. Universo 641, Barrio Urbarí, edificio de la Clínica Montalvo. Pendientes: enlace del portal de resultados si existe, teléfono, WhatsApp, correo, horarios, mapas, redes, confirmación del dominio y documentos legales oficiales.

## Verificación

Lint, TypeScript, compilación de producción, enlaces y redirecciones, metadata, imágenes, teclado y navegación móvil. Detalles en VERIFICACION.md y decisiones en DISENO.md.
