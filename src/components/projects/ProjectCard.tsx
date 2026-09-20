"use client";

import { ProjectBanner } from "@/components/projects/ProjectBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/data/portfolio";
import { hoverLift, springTransition, smoothTransition } from "@/lib/animations";
import * as motion from "framer-motion/client";
import { ExternalLink, Github } from "lucide-react";

type ProjectCardProps = {
  project: Project;
  variant?: "compact" | "detailed";
};

export function ProjectCard({ project, variant = "compact" }: ProjectCardProps) {
  return (
    <Card className="h-full overflow-hidden hover:border-[#FFD700]/30 transition-colors duration-300 group">
      <ProjectBanner project={project} />

      <CardContent className={variant === "detailed" ? "p-6 space-y-4" : "p-5 space-y-3"}>
        <div>
          <span className="text-xs text-[#FFD700] uppercase tracking-wide">
            {project.category}
          </span>
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

        {(project.github || project.demo) && (
          <div className="flex flex-wrap gap-3 pt-1">
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
          </div>
        )}
      </CardContent>
    </Card>
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
      <ProjectCard project={project} variant={variant} />
    </motion.div>
  );
}
