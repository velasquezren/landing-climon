import { PageIntro } from "@/components/ui/page-intro";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Términos de uso",
  "Estado de publicación de los términos de uso del sitio de CLIMON.",
  "/terminos",
  false,
);

export default function TermsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Información del sitio"
        title="Términos de uso"
        description="Los términos de uso oficiales están pendientes de publicación."
      />
      <section className="section-space">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-medium">Información institucional</h2>
            <p className="body-copy mt-5">
              Esta primera versión permite conocer las áreas del laboratorio y
              consultar información general de atención. El portal de resultados
              todavía no está habilitado. Los términos oficiales se incorporarán
              aquí cuando estén disponibles.
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
