"use client";

import { Hero } from "@/components/home/Hero";
import { AnimatedProjectCard } from "@/components/projects/ProjectCard";
import { Card, CardContent } from "@/components/ui/card";
import { CountUp } from "@/components/ui/count-up";
import { FadeIn } from "@/components/ui/fade-in";
import { Marquee } from "@/components/ui/marquee";
import { RevealText } from "@/components/ui/reveal-text";
import { personalInfo, projects, stats } from "@/data/portfolio";
import { hoverLift, springTransition, staggerContainer, staggerItem } from "@/lib/animations";
import * as motion from "framer-motion/client";
import { ArrowRight, Github, Linkedin, Mail, Smartphone } from "lucide-react";
import Link from "next/link";

const marqueeItems = [
  "React",
  "React Native",
  "TypeScript",
  "Next.js",
  "Redux Toolkit",
  "Expo",
  "Supabase",
  "Tailwind CSS",
  "Node.js",
  "Framer Motion",
];

export default function HomePage() {
  return (
    <div className="min-h-screen text-white">
      <Hero />

      <Marquee items={marqueeItems} />

      <div className="max-w-6xl mx-auto space-y-24 px-6 py-24">
        <motion.section
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={staggerItem}>
              <motion.div whileHover={hoverLift} transition={springTransition}>
                <Card className="text-center hover:border-[#FFD700]/40 transition-colors duration-300">
                  <CardContent className="p-5 space-y-1">
                    <CountUp
                      value={stat.value}
                      className="text-3xl font-bold text-[#FFD700] block"
                    />
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.section>

        <section className="space-y-6">
          <FadeIn>
            <div className="flex items-end justify-between border-b border-white/10 pb-6">
              <h2 className="font-black uppercase leading-[0.9] tracking-[-0.02em] text-[clamp(2rem,6vw,4.5rem)]">
                <span className="block font-[family-name:var(--font-mono)] text-xs font-normal tracking-[0.3em] text-gray-500">
                  Selected
                </span>
                <RevealText text="Projects" />
              </h2>
              <Link
                href="/resume"
                className="text-[#FFD700] text-sm flex items-center gap-1 hover:gap-2 transition-all group"
              >
                View all
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <AnimatedProjectCard
                key={project.id}
                project={project}
                index={index}
                variant="compact"
              />
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <FadeIn>
            <h2 className="border-b border-white/10 pb-6 font-black uppercase leading-[0.9] tracking-[-0.02em] text-[clamp(2rem,6vw,4.5rem)]">
              <span className="block font-[family-name:var(--font-mono)] text-xs font-normal tracking-[0.3em] text-gray-500">
                Start a conversation
              </span>
              <RevealText text="Let's work together" />
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: `mailto:${personalInfo.email}`,
                icon: Mail,
                label: personalInfo.email,
                delay: 0.1,
              },
              {
                href: `tel:${personalInfo.phone}`,
                icon: Smartphone,
                label: personalInfo.phone,
                delay: 0.2,
              },
              {
                href: personalInfo.linkedin,
                icon: Linkedin,
                label: "LinkedIn Profile",
                delay: 0.3,
                external: true,
              },
              {
                href: personalInfo.github,
                icon: Github,
                label: "GitHub Profile",
                delay: 0.4,
                external: true,
              },
            ].map(({ href, icon: Icon, label, delay, external }) => (
              <FadeIn key={label} delay={delay}>
                <motion.a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex items-center gap-3 p-4 rounded-lg border border-gray-700 bg-gray-900 hover:border-[#FFD700]/40 transition-colors"
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={springTransition}
                >
                  <motion.span
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <Icon className="w-5 h-5 text-[#FFD700]" />
                  </motion.span>
                  <span className="text-gray-300">{label}</span>
                </motion.a>
              </FadeIn>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
