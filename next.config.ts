import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  redirects() {
    // Conserva los enlaces de la versión anterior sin publicar estudios no confirmados.
    return [
      "ayuno", "orina", "heces", "perfil-lipidico", "medicamentos", "indicaciones-especiales",
    ].map((slug) => ({
      source: `/preparacion/${slug}`,
      destination: "/preparacion",
      permanent: false,
    }));
  },
};

export default nextConfig;
