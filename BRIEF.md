# CLIMON — versión pública inicial

## Alcance

Landing institucional de Laboratorio Clínico Climon S.R.L., Santa Cruz, Bolivia. Next.js estable, App Router, TypeScript, Tailwind, ESLint, next/font y next/image. Componentes de servidor por defecto.

Sin portal clínico funcional, autenticación, backend, APIs de negocio, base de datos, archivos de pacientes ni datos clínicos ficticios. La ruta /resultados solo informa sobre su próxima disponibilidad.

## Dirección visual

Composición editorial, espacio negativo, verde institucional #006156, acento #29A091, blanco y texto oscuro. Manrope + Geist. Índice de servicios con divisores; sin tarjetas repetitivas, estadísticas, testimonios ni certificaciones inventadas. Movimiento mínimo y respeto por prefers-reduced-motion.

## Contenido

Home: header, hero, ocho áreas de laboratorio, futuro portal, seis temas de preparación, presentación institucional, contacto y footer.
Páginas: /servicios, /preparacion, /preparacion/[slug], /nosotros, /contacto, /resultados. Avisos de privacidad y términos pendientes en rutas propias, sin simular documentos aprobados.

## Recursos pendientes

Logo e isotipo oficiales, fotografía del laboratorio, dirección, teléfono, WhatsApp, correo, horarios, mapas y redes. Todos los valores comerciales se gestionan desde src/config/site.ts. No descargar fotografías externas ni inventar recomendaciones clínicas. El recurso actual es una composición abstracta temporal, no una foto.

## Verificación

Lint sin warnings, TypeScript, build de producción, prerender de rutas, enlaces, metadata, imágenes, teclado y navegación móvil. Revisar 375, 390, 430, 768, 1024, 1440 y 1920 px. Lighthouse orientativo >=95 en sus cuatro categorías, sin atribuir resultados no medidos.

## Segunda iteración

Se conserva el alcance público. Se añaden accesos para pacientes, navegación persistente y activa, orientación desplegable sin JavaScript y una lista para preparar la consulta. Se reducen textos repetidos y espacios móviles. Referencias y decisiones: DISENO.md. Las indicaciones clínicas específicas siguen pendientes de aprobación del laboratorio.
