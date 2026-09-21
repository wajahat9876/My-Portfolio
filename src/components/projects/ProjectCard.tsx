"use client";

import { ProjectBanner } from "@/components/projects/ProjectBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/data/portfolio";
import { hoverLift, springTransition, smoothTransition } from "@/lib/animations";
import * as motion from "framer-motion/client";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  project: Project;
  variant?: "compact" | "detailed";
  index?: number;
};

export function ProjectCard({
  project,
  variant = "compact",
  index,
}: ProjectCardProps) {
  // App projects put the phone beside the text: a portrait screenshot above
  // wide text always leaves dead space either side of it.
  const isPhone = project.frame === "phone";

  return (
    <Card
      className={`relative h-full overflow-hidden hover:border-[#FFD700]/40 hover:shadow-[0_0_40px_-12px_rgba(255,215,0,0.35)] transition-all duration-300 group ${
        isPhone ? "flex items-stretch min-h-[320px]" : ""
      }`}
    >
      {/* Covers the whole card. Kept as an overlay rather than wrapping the
          card, because the card already contains its own GitHub/demo links
          and anchors cannot nest. */}
      <Link
        href={`/projects/${project.id}`}
        className="absolute inset-0 z-10"
        aria-label={`View ${project.name} details`}
      />

      {isPhone ? (
        <PhoneColumn project={project} />
      ) : (
        <ProjectBanner project={project} />
      )}

      <CardContent
        className={`${isPhone ? "flex-1 self-center p-5 space-y-3" : ""} ${
          !isPhone && variant === "detailed"
            ? "p-6 space-y-4"
            : !isPhone
              ? "p-5 space-y-3"
              : ""
        }`}
      >
        <div>
          <div className="flex items-center gap-3">
            {index !== undefined && (
              <span className="font-[family-name:var(--font-mono)] text-xs text-gray-600">
                {String(index + 1).padStart(2, "0")}
              </span>
            )}
            <span className="text-xs text-[#FFD700] uppercase tracking-wide">
              {project.category}
            </span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
          <h3 className="text-xl font-bold mt-1 group-hover:text-[#FFD700] transition-colors duration-300">
            {project.name}
          </h3>
          {variant === "detailed" && (
            <p className="text-sm text-gray-400 mt-1">{project.stack.join(" · ")}</p>
          )}
        </div>

        {variant === "compact" ? (
          <p className="text-gray-400 text-sm leading-relaxed">{project.highlights[0]}</p>
        ) : (
          <ul className="space-y-2">
            {project.highlights.map((item, i) => (
              <motion.li
                key={item}
                className="text-gray-300 text-sm leading-relaxed flex gap-2"
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ...smoothTransition, delay: 0.03 * i }}
              >
                <span className="text-[#FFD700] mt-1.5 shrink-0">•</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2">
          {(variant === "compact" ? project.stack.slice(0, 4) : project.stack).map(
            (tech, i) => (
              <motion.span
                key={tech}
                className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ ...springTransition, delay: 0.04 * i }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 215, 0, 0.15)" }}
              >
                {tech}
              </motion.span>
            )
          )}
        </div>

        <div className="relative z-20 flex flex-wrap items-center gap-3 pt-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-[#FFD700] hover:underline"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-gray-300 hover:text-[#FFD700] hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}

          <span className="ml-auto inline-flex items-center gap-1 text-sm text-gray-500 transition-colors group-hover:text-[#FFD700]">
            Details
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * Phone screenshot shown whole down the left edge of an app card.
 * `object-contain` guarantees the shot is never cropped; the blurred copy
 * behind it absorbs the small letterbox when a source is off-ratio.
 */
function PhoneColumn({ project }: { project: Project }) {
  if (!project.screenshot) return null;

  return (
    <div className="relative w-[33%] shrink-0 self-stretch overflow-hidden border-r border-white/10 bg-gray-950">
      {/* Accent wash only. A blurred copy of the screenshot used to sit here,
          but the phone leaves barely any slack in this column, so it cost a
          full-size blur filter per card for something you could not see. */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${
          project.accent ?? "from-[#FFD700]/15 to-transparent"
        }`}
      />

      <motion.div
        className="relative h-full w-full p-4"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/15 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.9)]">
          <Image
            src={project.screenshot}
            alt={`${project.name} app preview`}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 40vw, 200px"
          />
        </div>
      </motion.div>
    </div>
  );
}

export function AnimatedProjectCard({
  project,
  index = 0,
  variant = "compact",
}: ProjectCardProps & { index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...smoothTransition, delay: 0.05 * index }}
      whileHover={hoverLift}
    >
      <ProjectCard project={project} variant={variant} index={index} />
    </motion.div>
  );
}
