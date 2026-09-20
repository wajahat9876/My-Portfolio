"use client";

import { Magnetic } from "@/components/ui/magnetic";
import { RevealText } from "@/components/ui/reveal-text";
import { personalInfo } from "@/data/portfolio";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const [firstName, lastName] = personalInfo.name.split(" ");

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // The headline drifts up and fades as you scroll past it.
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[92vh] flex-col justify-center px-6 pb-16 pt-28"
    >
      <motion.div style={{ y, opacity }} className="mx-auto w-full max-w-6xl">
        <p className="mb-6 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.35em] text-gray-500">
          <RevealText text="Portfolio — 2026" />
        </p>

        {/* Oversized stacked name */}
        <h1 className="font-[family-name:var(--font-display)] font-black uppercase leading-[0.85] tracking-[-0.03em]">
          <span className="block text-[clamp(3rem,13vw,10rem)] text-white">
            <RevealText text={firstName} />
          </span>
          <span className="text-outline-gold block text-[clamp(3rem,13vw,10rem)]">
            <RevealText text={lastName} delay={0.1} />
          </span>
        </h1>

        {/* Sticker badge */}
        <motion.div
          className="mt-6 inline-block -rotate-2 rounded-md bg-[#FFD700] px-4 py-2 shadow-[0_8px_30px_-8px_rgba(255,215,0,0.6)]"
          initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ delay: 0.7, type: "spring", stiffness: 220, damping: 16 }}
        >
          <span className="font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-[0.2em] text-black">
            {personalInfo.title}
          </span>
        </motion.div>

        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-xl text-lg leading-relaxed text-gray-400">
            <RevealText
              text="I build high-performance React websites and React Native mobile apps — from fintech platforms to solar analytics and social products."
              delay={0.2}
            />
          </p>

          <Magnetic>
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 rounded-full border border-[#FFD700]/40 px-7 py-4 text-sm uppercase tracking-widest text-[#FFD700] transition-colors hover:bg-[#FFD700] hover:text-black"
            >
              About me
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </Link>
          </Magnetic>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-gray-600">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
