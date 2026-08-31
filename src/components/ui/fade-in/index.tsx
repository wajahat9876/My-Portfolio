"use client";

import * as motion from "framer-motion/client";
import { ReactNode } from "react";
import { smoothTransition } from "@/lib/animations";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
  amount?: number;
};

const directionMap = {
  up: { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } },
  down: { initial: { opacity: 0, y: -24 }, animate: { opacity: 1, y: 0 } },
  left: { initial: { opacity: 0, x: -24 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 24 }, animate: { opacity: 1, x: 0 } },
  none: { initial: { opacity: 0 }, animate: { opacity: 1 } },
};

export function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
  amount = 0.2,
}: FadeInProps) {
  const variants = directionMap[direction];

  return (
    <motion.div
      className={className}
      initial={variants.initial}
      whileInView={variants.animate}
      viewport={{ once, amount }}
      transition={{ ...smoothTransition, delay }}
    >
      {children}
    </motion.div>
  );
}
