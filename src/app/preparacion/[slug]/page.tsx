import { notFound } from "next/navigation";
import { preparationTopics, preparationNotice } from "@/data/preparation";
import { PageIntro } from "@/components/ui/page-intro";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return preparationTopics.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = preparationTopics.find((item) => item.slug === slug);
  if (!topic) notFound();
  return pageMetadata(
    topic.title,
    topic.description,
    `/preparacion/${slug}`,
    false,
  );
}

export default async function PreparationTopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = preparationTopics.find((item) => item.slug === slug);
  if (!topic) notFound();
  return (
    <>
      <PageIntro
        eyebrow="Preparación"
        title={topic.title}
        description={topic.description}
      />
      <section className="section-space">
        <Container>
          <div className="notice max-w-3xl">
            <p className="eyebrow mb-4">Guía pendiente de publicación</p>
            <h2 className="text-2xl font-medium">{topic.question}</h2>
            <p className="body-copy mt-5">{topic.guidance}</p>
            <p className="body-copy mt-5">{preparationNotice}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-6">
            <ButtonLink href="/preparacion" variant="outline">
              Todos los temas
            </ButtonLink>
            <ButtonLink href="/contacto" variant="text">
              Información de contacto
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
