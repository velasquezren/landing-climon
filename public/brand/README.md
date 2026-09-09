# Marca oficial

`logo-climon.png` es una copia sin alteraciones de `Logotipo de climon.png`, proporcionado por el propietario. Se utiliza con su proporción original en cabecera, pie e imagen social. `next/image` genera las variantes de tamaño para la web.

Los favicons oficiales se encuentran en `src/app`: `favicon.ico`, `icon.png` y `apple-icon.png`. Next.js genera automáticamente sus etiquetas. Los PNG de 192 y 512 px están en `public` y se referencian desde `src/app/manifest.ts`.

El SVG suministrado contiene un PNG incrustado de 170 KB, sin trazados vectoriales. Se conserva en la carpeta de originales, pero no se registra como favicon: se utilizan los iconos ICO/PNG ligeros proporcionados. Las fotografías se negocian en AVIF o WebP mediante el optimizador de Next.js.
