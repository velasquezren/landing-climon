# Segunda iteración de diseño — CLIMON

## Referencias consultadas

- [One Medical — servicios de laboratorio](https://www.onemedical.com/services/lab-services/): organiza el contenido alrededor de la visita. Aplicación en CLIMON: accesos por intención y una lista breve de temas que el paciente puede confirmar antes de acudir. Los procesos, tiempos y servicios de One Medical no se trasladaron a CLIMON.
- [NHS — componente Details](https://service-manual.nhs.uk/design-system/components/details): utiliza información desplegable para facilitar la lectura. Aplicación: seis temas de preparación consultables en la misma página mediante HTML nativo, también sin JavaScript.
- [Pentagram — Isomorphic Labs](https://www.pentagram.com/work/isomorphic-labs): documenta un sistema de retícula, tipografía y lenguaje conciso. Aplicación: consistencia editorial, proporciones y reducción de textos repetidos. Es una referencia de criterio, no una copia de identidad ni de sus animaciones.

## Cambios aplicados

- Hero más compacto, encuadre revisado y anotaciones situadas fuera de la imagen.
- Accesos directos a análisis, preparación y contacto en lugar de la franja decorativa.
- Cabecera persistente con estado de página y sección activa; vuelve a posicionamiento normal en pantallas de poca altura.
- Menú móvil con jerarquía más clara, reinicio al cambiar de ruta y control por teclado.
- Orientación desplegable por tema y una página de preparación con tres puntos para organizar la consulta.
- Información introductoria útil en las rutas de preparación, manteniendo pendiente la guía clínica oficial.
- Estado del portal más visible y CTA «Conocer el portal» para describir su disponibilidad actual.
- Eliminación de la repetición del catálogo en el texto institucional de la home.
- Espaciado móvil más contenido y acceso «Volver arriba».
- Navegación interactiva reunida en un único archivo cliente. Los desplegables usan detalles nativos; no se incorporaron dependencias.

## Recursos institucionales

Se conserva la marca textual temporal y el recurso abstracto local. El siguiente paso editorial depende de la fotografía y el logo oficiales: no se atribuyen imágenes ajenas a las instalaciones de CLIMON. Datos de atención, indicaciones clínicas y documentos legales siguen pendientes de información oficial.


## Tercera iteración — identidad oficial, 9 de septiembre de 2026

- Logo PNG oficial en cabecera, pie y Open Graph, conservando proporción y colores.
- Favicons ICO y PNG más Apple Touch Icon mediante convenciones del App Router. Manifest tipado con iconos públicos, color institucional y modo navegador.
- Portada sobre fondo blanco, tipografía con dos niveles de color, fotografía de microscopía y pie editorial. La acción principal lleva al catálogo; la secundaria prepara la visita.
- Tres accesos numerados para pacientes, catálogo de ocho áreas con divisores y estados de foco/hover.
- Las otras dos fotografías forman una composición asimétrica reutilizada en Nosotros. No se añadieron imágenes externas ni sintéticas.
- Orden: portada, servicios, laboratorio, preparación, futuro portal y contacto. La fotografía y el contenido clínico público preceden al anuncio del portal.
- El portal usa la etiqueta «Portal de resultados» y conserva la disponibilidad próxima explícita en su sección y página.
- Esquinas de 2 px, predominio del blanco, espaciado adaptable y detalles gráficos ligeros. Se mantiene el respeto por movimiento reducido y los desplegables nativos.
- Skills disponibles revisados: no hay uno especializado en este proyecto Next.js. Se consultaron las guías locales de Next.js 16.3.4 para imágenes, iconos, manifest y Open Graph.

Esta iteración sustituye los recursos temporales descritos en las iteraciones anteriores. Contactos, dominio, guías clínicas y documentos legales continúan pendientes de confirmación institucional.

El SVG suministrado contiene un PNG incrustado de 170 KB, sin trazados vectoriales. Se conserva en la carpeta de originales, pero no se registra como favicon: se utilizan los iconos ICO/PNG ligeros proporcionados. Las fotografías se negocian en AVIF o WebP mediante el optimizador de Next.js.


### Ajuste solicitado antes de publicar

Se recupera la estética minimalista: botones y marcos con radio de 2 px, portada, contacto y pie sobre blanco. La sección de preparación utiliza el neutro casi blanco `#F4F8F7`; el bloque del futuro portal conserva el verde institucional. Se adopta la escala de verdes suministrada como tokens y se ajustan texto y divisores a sus neutros. No se añaden acentos rosa ni bloques beige. Se conservan composición, contenido y fotografías.


## Cuarta iteración — resultados y Clínica Montalvo

A petición del propietario se conserva el diseño aprobado y se ajusta el contenido a la función de CLIMON dentro de la Clínica Montalvo:

- Portada «Resultados para tu salud. La vocación de cuidarte.» y acción principal de información de resultados.
- Relación con Clínica Montalvo explícita en portada, presentación institucional, páginas internas, metadata e imagen social.
- Mismo índice editorial, con cuatro accesos de atención en lugar de especialidades no confirmadas.
- Sección de resultados situada antes de la presentación institucional; conserva el estado de próxima disponibilidad del portal.
- Mismos desplegables con seis temas generales: consulta y entrega de resultados, solicitud, visita, consulta en la clínica y atención al paciente.
- Enlaces antiguos a preparación específica redirigidos temporalmente a la orientación general.
- Se mantienen las seis secciones, las fotografías, los favicons, el blanco y los botones minimalistas. Se restituye el espacio superior del bloque institucional tras cambiar su posición.

La relación con la clínica procede de la información del propietario. No se añaden plazos de entrega, interpretación clínica, automatismos de integración ni servicios específicos no confirmados.
