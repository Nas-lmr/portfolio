// app/projects/[slug]/layout.tsx

import { Metadata } from "next";

type Params = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  return {
    title: `${params.slug}`,
    description: `Découvrez le projet ${params.slug} réalisé par Nasreddine Lamamra.`,
  };
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
