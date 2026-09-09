# Verificación — identidad oficial de CLIMON

Fecha: 9 de septiembre de 2026. Tercera iteración, con logo y fotografías suministrados por el propietario.

## Código y compilación

- `npm run lint`: correcto, cero warnings.
- `npm run typecheck`: correcto.
- `npm run build -- --webpack`: correcto; 23 entradas estáticas generadas, incluidas las seis guías de preparación y las rutas de metadata.
- `git diff --check`: correcto.
- Sin nuevas dependencias de producción ni cambios en el lockfile. Herramientas de revisión instaladas exclusivamente en `/tmp/climon-qa`.

La compilación predeterminada con Turbopack encontró restricciones del entorno: primero la conexión a Google Fonts y después la apertura de un puerto interno del procesador CSS. Se verificó la producción con Webpack; el script habitual del proyecto sigue utilizando `next build`. Esto no constituye una verificación exitosa de Turbopack en este entorno.

## Navegador

Chromium sobre el build de producción en `http://127.0.0.1:3200`.

- Portada a 320, 375, 390, 430, 768, 1024, 1440 y 1920 px: sin desbordamiento horizontal; todas las imágenes cargadas.
- Inspección visual de las capturas de escritorio y móvil y de la imagen Open Graph.
- 14 páginas: respuesta 200, un único h1, canonical específico y sin desbordamiento a 390 px.
- 22 destinos internos comprobados, incluidas las ocho anclas de servicios.
- Menú móvil: abre, cierra con Escape devolviendo el foco al botón y cierra al navegar a Nosotros.
- Primer desplegable: funciona con teclado y con JavaScript desactivado.
- Movimiento reducido: desplazamiento suave desactivado.
- Cero errores JavaScript registrados.

Informes y capturas: `/tmp/climon-qa/v3/report.json`, `home-*.png`, `desktop-hero.png`, `mobile-hero.png` y `opengraph.png`.

## Accesibilidad

axe, reglas WCAG 2 A/AA y 2.1 A/AA: cero infracciones detectadas en Inicio, Nosotros, Servicios, Preparación, Contacto y Resultados, tanto a 390 como a 1440 px (12 evaluaciones).

Informe: `/tmp/climon-qa/v3/axe.json`. Las comprobaciones automáticas no equivalen a una auditoría con todas las tecnologías de asistencia.

## Marca, fotografías y metadata

- Logo oficial con proporción original en cabecera, pie y Open Graph.
- Las tres fotografías se sirven mediante `next/image`, tamaños adaptables, prioridad alta en portada y carga diferida en las imágenes inferiores.
- AVIF preferido y WebP alternativo, negociados por el optimizador de Next.js.
- ICO, PNG de 96 px y Apple Touch Icon de 180 px mediante convenciones de archivos del App Router. No hay etiquetas manuales duplicadas.
- El SVG entregado incrusta un PNG de 170 KB y no contiene vectores: se conserva entre los originales y se utiliza el PNG ligero como icono web.
- Manifest tipado en modo navegador, identidad y colores institucionales, iconos de 192 y 512 px con `purpose: any`.
- Siete recursos de identidad comprobados por HTTP: manifest, ICO, icono PNG, icono Apple, Open Graph y los dos iconos públicos. Respuesta 200 y tipos MIME correctos.
- Las rutas pendientes conservan la política de noindex existente.

## Pendientes institucionales

Dirección exacta, teléfono, WhatsApp, correo, horarios, mapa y redes; confirmación del dominio; indicaciones clínicas revisadas; documentos oficiales de privacidad y términos. El portal de resultados sigue siendo una página informativa de próxima disponibilidad.

Los originales suministrados se conservan. No se añadieron contactos, certificaciones, estadísticas, testimonios ni recomendaciones clínicas ficticias.

## Lighthouse móvil — versión final

Medición local sobre el build de producción con Lighthouse 13.4.1 y emulación móvil predeterminada, después del ajuste de botones y fondos blancos:

| Categoría | Puntuación |
| --- | ---: |
| Rendimiento | 97 |
| Accesibilidad | 100 |
| Buenas prácticas | 100 |
| SEO | 100 |

FCP: 0,8 s. LCP: 2,5 s. TBT: 20 ms. CLS: 0. Informe en `/tmp/climon-qa/v3/lighthouse.html` y datos en `lighthouse.json`.

Las puntuaciones corresponden a este entorno local; no garantizan el mismo resultado en el dominio publicado. El contraste y la accesibilidad se volvieron a revisar tras adoptar los nuevos neutros. Se inspeccionaron las capturas finales de portada en móvil y escritorio.
