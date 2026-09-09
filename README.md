# CLIMON — Laboratorio Clínico

Sitio público institucional construido con Next.js 16.3.4 (estable verificada al implementar), React 19, TypeScript y Tailwind CSS 4. La web no implementa servicios clínicos ni almacena información de pacientes.

## Desarrollo

Requiere Node.js 20.9 o posterior; verificado con Node.js 22.

```bash
npm ci
npm run dev
```

Abrir http://localhost:3000.

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

`next/font/google` descarga Manrope y Geist durante la compilación y las sirve localmente en producción. El build requiere acceso a Google Fonts; los visitantes no hacen peticiones a Google para cargar estas fuentes.

## Estructura

- `src/app`: rutas y metadata del App Router.
- `src/components/layout`: cabecera, marca textual temporal, menú móvil y footer.
- `src/components/sections`: secciones institucionales reutilizables.
- `src/components/ui`: elementos compartidos.
- `src/config/site.ts`: identidad, dominio previsto, contacto, recursos y URL de resultados.
- `src/data`: áreas de laboratorio y temas de preparación.
- `src/lib/metadata.ts`: metadata consistente por página.
- `public/brand`, `public/images`: recursos locales.

La navegación (estado activo y menú móvil) es el único archivo propio con `use client`. Los temas de preparación usan `details` y `summary` nativos y funcionan sin JavaScript. Usa un patrón de navegación desplegable, Escape, cierre al salir del foco y estado expandido; no es un diálogo modal. El contenido permanece disponible como HTML estático.

## Actualizar información oficial

Editar `src/config/site.ts`. Los campos de contacto vacíos se identifican como pendientes y no generan enlaces falsos. WhatsApp acepta un número internacional solo con dígitos. Las redes solo aparecen al agregar entradas con `label` y `url`.

Agregar el logo en `public/brand/logo-climon.svg` y asignar su ruta en `brand.logo`. La marca actual es texto y el favicon es una letra C temporal; no se ha creado un isotipo. Se reserva `brand.logoWhite` para una futura variante sobre verde.

Agregar fotografía oficial en `public/images` y actualizar `images.hero`: ruta, descripción accesible, pie de imagen y encuadre. El SVG actual es abstracto y no representa las instalaciones. No hay fotografías externas ni identidades ficticias.

Las indicaciones específicas de preparación están pendientes de revisión del laboratorio. Su contenido base vive en `src/data/preparation.ts`; las seis rutas se generan estáticamente. Cuando se publiquen guías oficiales, actualizar su contenido, retirar el `noindex` de esas páginas y añadirlas al sitemap.

Los documentos de privacidad y términos son avisos de contenido pendiente, no textos legales aprobados.

## SEO y despliegue

Desplegable en Vercel con su configuración habitual para Next.js. Todas las páginas públicas están diseñadas para prerenderizarse. Se conserva la optimización de imágenes de Next.js; no es necesario usar `output: export`.

`siteConfig.url` usa `https://climon.com` como dominio **previsto, pendiente de confirmación**. Puede sustituirse con la variable de servidor `SITE_URL` antes de compilar. Metadata, canonical y sitemap se derivan de ese valor. Confirmarlo antes de publicar.

Se incluyen metadata por página, Open Graph con imagen generada localmente, Twitter card, sitemap, robots e icono temporal. Las páginas pendientes (resultados, temas específicos de preparación y documentos legales) llevan `noindex, follow` y no se incluyen en el sitemap. No se añade manifest de instalación porque esta fase no es una PWA.

Para incorporar Schema.org posteriormente, generar el JSON-LD en el Server Component correspondiente a partir de `siteConfig`, utilizando únicamente datos oficiales verificados. No se han supuesto dirección, coordenadas, horarios ni certificaciones.

## Futuro portal

Cambiar `siteConfig.resultsUrl` por `https://resultados.climon.com` cuando el portal independiente exista. Todos los CTA de resultados usan ese valor. El placeholder local no está acoplado a autenticación ni a APIs.

## Pendientes para publicación institucional

- Recursos oficiales de marca y fotografía.
- Datos de atención y confirmación del dominio.
- Indicaciones de preparación revisadas por el laboratorio.
- Documentos oficiales de privacidad y términos.

La verificación de esta entrega se documenta en `VERIFICACION.md`.

## Segunda iteración visual

Las referencias de diseño y los cambios aplicados están documentados en [DISENO.md](DISENO.md). La orientación inicial de preparación está disponible en la misma página mediante desplegables; las indicaciones clínicas oficiales siguen pendientes.
