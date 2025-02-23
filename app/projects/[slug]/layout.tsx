export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return {
    title: `${params.slug}`,
    description: `Découvrez le projet ${params.slug} que j'ai réalisé.`,
  };
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
