"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

/**
 * Gold ring that trails the pointer and swells over interactive elements.
 * Hidden on touch devices and when reduced motion is requested.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 420, damping: 32, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 420, damping: 32, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || still) return;
    setEnabled(true);

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement | null;
      setActive(!!el?.closest("a, button, [data-cursor]"));
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FFD700]"
        animate={{
          width: active ? 44 : 20,
          height: active ? 44 : 20,
          backgroundColor: active ? "rgba(255,215,0,0.14)" : "rgba(255,215,0,0)",
        }}
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
      />
    </motion.div>
  );
}
