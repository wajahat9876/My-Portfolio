"use client";

import { motion, useScroll, useSpring } from "motion/react";

/** Thin gold bar across the top showing how far down the page you are. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[90] h-[2px] w-full origin-left bg-gradient-to-r from-[#FFD700] via-amber-400 to-[#FFD700]"
    />
  );
}
