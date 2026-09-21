"use client";

import { RevealText } from "@/components/ui/reveal-text";
import { Magnetic } from "@/components/ui/magnetic";
import { Project } from "@/data/portfolio";
import { smoothTransition } from "@/lib/animations";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Github, ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/** How many empty tiles to show while real screenshots are still pending. */
const PLACEHOLDER_COUNT = 3;

export function ProjectDetail({ project }: { project: Project }) {
  const gallery = project.gallery ?? [];

  return (
    <div className="min-h-screen px-6 pb-24 pt-28 text-white">
      <div className="mx-auto w-full max-w-5xl">
        <Link
          href={project.frame === "phone" ? "/#apps" : "/#web"}
          className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-gray-500 transition-colors hover:text-[#FFD700]"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All projects
        </Link>

        <header className="mt-8 border-b border-white/10 pb-10">
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-[#FFD700]">
            {project.category}
          </p>
          <h1 className="mt-3 font-black uppercase leading-[0.9] tracking-[-0.02em] text-[clamp(2.25rem,7vw,5rem)]">
            <RevealText text={project.name} />
          </h1>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-[family-name:var(--font-mono)] text-xs text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {(project.github || project.demo) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {project.github && (
                <Magnetic>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#FFD700]/40 px-6 py-3 text-sm uppercase tracking-widest text-[#FFD700] transition-colors hover:bg-[#FFD700] hover:text-black"
                  >
                    <Github className="h-4 w-4" />
                    View code
                  </a>
                </Magnetic>
              )}
              {project.demo && (
                <Magnetic>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm uppercase tracking-widest text-gray-200 transition-colors hover:border-[#FFD700]/50 hover:text-[#FFD700]"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live demo
                  </a>
                </Magnetic>
              )}
            </div>
          )}
        </header>

        {/* Hero shot — shown whole, never cropped */}
        <motion.div
          className="relative mt-12 h-[420px] overflow-hidden rounded-xl border border-white/10 bg-gray-950 sm:h-[520px]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={smoothTransition}
        >
          {project.screenshot && (
            <>
              {/* Soft backdrop from a 24px-wide copy of the shot. Upscaling a
                  tiny image reads as a blur without paying for a blur filter,
                  which is what made scrolling stutter. */}
              <Image
                src={project.screenshot}
                alt=""
                aria-hidden
                fill
                quality={10}
                className="scale-110 object-cover"
                sizes="24px"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  project.accent ?? "from-[#FFD700]/15 to-transparent"
                }`}
              />
              <div className="absolute inset-0 bg-black/50" />
              <Image
                src={project.screenshot}
                alt={`${project.name} preview`}
                fill
                className="object-contain p-6"
                sizes="(max-width: 640px) 100vw, 900px"
                priority
              />
            </>
          )}
        </motion.div>

        <Section title="Overview">
          <p className="max-w-3xl leading-relaxed text-gray-400">
            {project.overview ?? project.highlights.join(" ")}
          </p>
        </Section>

        {project.contributions && project.contributions.length > 0 && (
          <Section title="What I built">
            <ul className="max-w-3xl space-y-3">
              {project.contributions.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex gap-3 leading-relaxed text-gray-300"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...smoothTransition, delay: i * 0.05 }}
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD700]" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </Section>
        )}

        {project.video && (
          <Section title="Demo">
            <video
              className="w-full max-w-sm rounded-xl border border-white/10 bg-black"
              src={project.video.src}
              poster={project.video.poster}
              controls
              playsInline
              preload="none"
            />
          </Section>
        )}

        <Section title="Gallery">
          {gallery.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {gallery.map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-[9/19] overflow-hidden rounded-lg border border-white/10 bg-gray-950"
                >
                  <Image
                    src={src}
                    alt={`${project.name} screenshot ${i + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
                <div
                  key={i}
                  className="flex aspect-[9/19] flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-white/15 bg-white/[0.02] text-gray-600"
                >
                  <ImageIcon className="h-6 w-6" />
                  <span className="px-3 text-center font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest">
                    Screenshot
                    <br />
                    coming soon
                  </span>
                </div>
              ))}
            </div>
          )}
        </Section>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-16">
      <h2 className="mb-6 border-b border-white/10 pb-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-gray-500">
        {title}
      </h2>
      {children}
    </section>
  );
}
