import { ProjectDetail } from "@/components/projects/ProjectDetail";
import { projects } from "@/data/portfolio";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Project not found" };

  return {
    title: `${project.name} — Wajahat Hassan`,
    description: project.overview ?? project.highlights[0],
  };
}

export default async function ProjectPage({ params }: Params) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
