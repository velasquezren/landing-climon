# Verificación — CLIMON

Fecha: 8 de septiembre de 2026. Actualizado para la segunda iteración de diseño.

## Resultado técnico

- Next.js 16.3.4 estable, confirmado mediante el registro npm.
- `npm run build`: correcto. Home y páginas públicas prerenderizadas; seis rutas de preparación generadas con `generateStaticParams`.
- `npm run typecheck`: correcto.
- `npm run lint`: correcto, cero warnings.
- `git diff --check`: correcto.
- Sin dependencias adicionales de producción ni cambios de versiones en el lockfile.
- Las herramientas de QA se instalaron solamente en `/tmp/climon-qa`.

## Navegador y accesibilidad

Revisión con Chromium sobre el build de producción en `http://127.0.0.1:3100`.

- Home a 320, 375, 390, 430, 768, 1024, 1440 y 1920 px: sin desbordamiento horizontal y con imágenes cargadas. Capturas en `/tmp/climon-qa/v2/home-*.png`.
- Inspección visual de escritorio, móvil y página de resultados.
- 14 páginas comprobadas: respuesta 200, un h1, idioma es-BO, canonical específico y ausencia de desbordamiento a 390 px.
- 39 destinos internos verificados, incluidas anclas de servicios y salto al contenido.
- axe: cero infracciones detectadas en las reglas WCAG 2 A/AA y 2.1 A/AA evaluadas en las 14 páginas.
- Comprobación adicional de nombres accesibles de marca en 390 y 1440 px: correcta.
- Menú móvil abierto: cero infracciones detectadas.
- Teclado: salto al contenido, entrada a los enlaces del menú, Escape con retorno al botón y cierre al navegar.
- Menú cerrado al pasar a escritorio.
- `prefers-reduced-motion`: desplazamiento suave desactivado.
- Contenido y CTA de resultados disponibles con JavaScript desactivado.
- Página /resultados sin formularios, inputs ni marcos de terceros.
- Temas inexistentes: 404 mediante `notFound()`, sin error en el servidor.
- Sin errores JavaScript registrados en las páginas comprobadas.

La revisión automática y las comprobaciones de teclado no equivalen a una auditoría completa con todas las tecnologías de asistencia.

## Comprobación de las mejoras

- Cabecera persistente: los destinos de los accesos quedan visibles debajo del header.
- Estado activo correcto en páginas y subsecciones de preparación.
- Desplegables con Enter, Espacio y puntero; funcionan también con JavaScript desactivado.
- Dos desplegables abiertos simultáneamente: cero infracciones detectadas por axe.
- Menú móvil abierto: cero infracciones detectadas.
- Página de preparación y sus interacciones revisadas visualmente en móvil.
- Sin nuevas dependencias. Referencias y decisiones en DISENO.md.

## SEO y recursos

Metadata por página, canonical, Open Graph, imagen social servida correctamente, Twitter card, robots.txt, sitemap.xml e icon.svg comprobados.

Las rutas de contenido pendiente llevan noindex y se excluyen del sitemap. Las imágenes se sirven localmente. Manrope y Geist se incluyen en el build mediante next/font.

El dominio `https://climon.com` sigue siendo el dominio previsto: confirmar en siteConfig.url o SITE_URL antes de publicar.

## Lighthouse móvil

Build de producción, medición local con emulación móvil predeterminada de Lighthouse:

| Categoría | Puntuación |
| --- | ---: |
| Rendimiento | 99 |
| Accesibilidad | 100 |
| Buenas prácticas | 100 |
| SEO | 100 |

FCP: 0,8 s. LCP: 2,0 s. TBT: 100 ms. CLS: 0. Sin advertencias de ejecución.

Informes: `/tmp/climon-qa/v2/lighthouse.report.html` y `/tmp/climon-qa/v2/lighthouse.report.json`.
Comprobaciones de navegador: `/tmp/climon-qa/v2/report.json` y `/tmp/climon-qa/v2/interactions.json`.

Las puntuaciones corresponden a la home con el recurso visual temporal y a este entorno local. Volver a medir tras incorporar fotografía definitiva y publicar en el dominio real.

## Información oficial pendiente

- Logo, isotipo y favicon definitivos.
- Fotografía institucional.
- Dirección exacta, teléfono, WhatsApp, correo, horario, mapa y redes.
- Indicaciones médicas revisadas por el laboratorio.
- Documentos oficiales de privacidad y términos.
- Confirmación del dominio.

No se añadieron datos clínicos, recomendaciones médicas específicas, testimonios, cifras, certificaciones ni contactos ficticios.
