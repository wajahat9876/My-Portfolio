"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/data/portfolio";
import * as motion from "framer-motion/client";
import { ExternalLink, Github, Play } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

type ProjectCardProps = {
  project: Project;
  variant?: "compact" | "detailed";
};

export function ProjectCard({ project, variant = "compact" }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  const toggleMedia = () => {
    if (!project.video) return;
    setShowVideo((prev) => !prev);
  };

  return (
    <Card className="h-full overflow-hidden hover:border-[#FFD700]/30 transition-colors duration-300">
      {(project.screenshot || project.video) && (
        <div className="relative aspect-video bg-gray-950 overflow-hidden group">
          {showVideo && project.video ? (
            <video
              ref={videoRef}
              src={project.video}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : project.screenshot ? (
            <Image
              src={project.screenshot}
              alt={`${project.name} preview`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          ) : null}

          {project.video && (
            <button
              type="button"
              onClick={toggleMedia}
              className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 text-white text-xs hover:bg-[#FFD700] hover:text-black transition-colors"
            >
              {showVideo ? (
                "Show Screenshot"
              ) : (
                <>
                  <Play className="w-3 h-3" /> Watch Demo
                </>
              )}
            </button>
          )}
        </div>
      )}

      <CardContent className={variant === "detailed" ? "p-6 space-y-4" : "p-5 space-y-3"}>
        <div>
          <span className="text-xs text-[#FFD700] uppercase tracking-wide">
            {project.category}
          </span>
          <h3 className="text-xl font-bold mt-1">{project.name}</h3>
          {variant === "detailed" && (
            <p className="text-sm text-gray-400 mt-1">{project.stack.join(" · ")}</p>
          )}
        </div>

        {variant === "compact" ? (
          <p className="text-gray-400 text-sm leading-relaxed">{project.highlights[0]}</p>
        ) : (
          <ul className="space-y-2">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="text-gray-300 text-sm leading-relaxed flex gap-2"
              >
                <span className="text-[#FFD700] mt-1.5 shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2">
          {(variant === "compact" ? project.stack.slice(0, 4) : project.stack).map(
            (tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300"
              >
                {tech}
              </span>
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.08 * index }}
      whileHover={{ y: -4, scale: 1.01 }}
    >
      <ProjectCard project={project} variant={variant} />
    </motion.div>
  );
}
