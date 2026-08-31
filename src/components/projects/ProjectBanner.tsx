"use client";

import { Project } from "@/data/portfolio";
import * as motion from "framer-motion/client";
import Image from "next/image";

const DEFAULT_ACCENT = "from-[#FFD700]/20 via-amber-600/10 to-transparent";

/**
 * Presents a project screenshot inside a device frame on a tinted backdrop.
 * Web projects get browser chrome, mobile projects get a phone body — this
 * keeps every card the same height regardless of the source aspect ratio.
 */
export function ProjectBanner({ project }: { project: Project }) {
  if (!project.screenshot) return null;

  const isPhone = project.frame === "phone";
  const accent = project.accent ?? DEFAULT_ACCENT;

  return (
    <div className="relative w-full h-56 sm:h-64 overflow-hidden border-b border-gray-800 bg-gray-950">
      {/* Tinted backdrop */}
      <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.55)_100%)]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <motion.div
        className="relative w-full h-full flex items-end justify-center"
        whileHover={{ scale: 1.04, y: -2 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {isPhone ? (
          <PhoneFrame project={project} />
        ) : (
          <BrowserFrame project={project} />
        )}
      </motion.div>
    </div>
  );
}

function BrowserFrame({ project }: { project: Project }) {
  return (
    <div className="w-[86%] mt-6 rounded-t-xl overflow-hidden border border-white/15 border-b-0 bg-gray-900 shadow-[0_-8px_40px_-8px_rgba(0,0,0,0.8)]">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-800/90 border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        {project.domain && (
          <span className="ml-2 flex-1 truncate rounded bg-gray-900/70 px-2 py-0.5 text-[10px] text-gray-400">
            {project.domain}
          </span>
        )}
      </div>
      {/* Viewport — fixed ratio so every browser card matches */}
      <div className="relative w-full aspect-[16/9] bg-gray-950">
        <Image
          src={project.screenshot!}
          alt={`${project.name} website preview`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}

function PhoneFrame({ project }: { project: Project }) {
  return (
    <div className="relative mt-7 h-[115%] aspect-[9/18] rounded-t-[1.75rem] border-[3px] border-b-0 border-gray-700 bg-gray-950 p-1 pb-0 shadow-[0_-8px_40px_-8px_rgba(0,0,0,0.8)]">
      {/* Notch */}
      <div className="absolute left-1/2 top-1.5 z-10 h-1.5 w-12 -translate-x-1/2 rounded-full bg-gray-700" />
      <div className="relative h-full w-full overflow-hidden rounded-t-[1.5rem] bg-black">
        <Image
          src={project.screenshot!}
          alt={`${project.name} app preview`}
          fill
          className="object-cover object-top"
          sizes="200px"
        />
      </div>
    </div>
  );
}
