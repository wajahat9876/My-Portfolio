"use client";

import { motion, Variants } from "motion/react";

const maskVariants: Variants = {
  hidden: {},
  visible: {},
};

const wordVariants: Variants = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i },
  }),
};

/**
 * Word-by-word mask reveal: each word rides up from behind a clipped line.
 *
 * The viewport trigger lives on the outer mask, which never moves. Putting it
 * on the inner word would deadlock — the word starts translated outside the
 * clip, so an observer watching it would never see it enter view.
 */
export function RevealText({
  text,
  className = "",
  delay = 0,
  once = true,
}: {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      variants={maskVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            className="inline-block"
            variants={wordVariants}
            custom={delay + i * 0.04}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
