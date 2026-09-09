import { PageIntro } from "@/components/ui/page-intro";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Aviso de privacidad",
  "Estado de publicación del aviso de privacidad de CLIMON.",
  "/privacidad",
  false,
);

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Información del sitio"
        title="Aviso de privacidad"
        description="El aviso de privacidad oficial está pendiente de publicación."
      />
      <section className="section-space">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-medium">Acerca de esta versión</h2>
            <p className="body-copy mt-5">
              Esta web presenta información institucional. No incluye
              formularios de pacientes ni permite cargar o consultar estudios
              clínicos. El documento oficial se incorporará en esta página
              cuando esté disponible.
            </p>
            <ButtonLink href="/" variant="outline" className="mt-8">
              Volver al inicio
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
