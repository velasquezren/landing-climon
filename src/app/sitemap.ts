import type { MetadataRoute } from "next";
import { navigation, siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Las rutas con contenido pendiente llevan noindex y se omiten del sitemap.
  return navigation.map(({ href }) => ({
    url: new URL(href, siteConfig.url).toString(),
  }));
}
