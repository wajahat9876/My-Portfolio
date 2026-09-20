"use client";

import { motion } from "motion/react";

/**
 * Edge-to-edge scrolling strip of tech names. The list is rendered twice so
 * the loop is seamless when the first copy has travelled its full width.
 */
export function Marquee({
  items,
  speed = 28,
  reverse = false,
}: {
  items: string[];
  speed?: number;
  reverse?: boolean;
}) {
  return (
    <div className="relative w-full overflow-hidden border-y border-white/10 bg-white/[0.02] py-4">
      {/* Fade the strip into the page background at both edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />

      <motion.div
        className="flex w-max gap-10 whitespace-nowrap"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex gap-10" aria-hidden={copy === 1}>
            {items.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="font-[family-name:var(--font-mono)] text-sm uppercase tracking-widest text-gray-500"
              >
                {item}
                <span className="ml-10 text-[#FFD700]">◆</span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
