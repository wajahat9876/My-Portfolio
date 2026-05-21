"use client";

import { AnimatedProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import { personalInfo, projects, stats } from "@/data/portfolio";
import { staggerContainer } from "@/lib/animations";
import * as motion from "framer-motion/client";
import { ArrowRight, Github, Linkedin, Mail, Smartphone } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-5xl mx-auto space-y-16">
        <header className="text-center space-y-6">
          <FadeIn direction="down">
            <p className="text-[#FFD700] font-medium tracking-widest uppercase text-sm">
              {personalInfo.title}
            </p>
          </FadeIn>

          <FadeIn delay={0.15} direction="down">
            <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Hi, I&apos;m {personalInfo.name}
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              I build high-performance React websites and React Native mobile apps —
              from fintech platforms and corporate dashboards to solar analytics and social products.
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about">
                <Button type="button">About Me</Button>
              </Link>
              <Link href="/resume">
                <Button type="button">View Resume</Button>
              </Link>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <Button type="button">GitHub</Button>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <Button type="button">LinkedIn</Button>
              </a>
            </div>
          </FadeIn>
        </header>

        <motion.section
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={0.1 * index} direction="up">
              <Card className="text-center hover:border-[#FFD700]/40 transition-colors duration-300">
                <CardContent className="p-5 space-y-1">
                  <p className="text-3xl font-bold text-[#FFD700]">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </motion.section>

        <section className="space-y-6">
          <FadeIn>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Featured Projects</h2>
              <Link
                href="/resume"
                className="text-[#FFD700] text-sm flex items-center gap-1 hover:gap-2 transition-all"
              >
                View all <ArrowRight className="w-4 h-4" />
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
            <h2 className="text-2xl font-semibold">Get In Touch</h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FadeIn delay={0.1}>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 p-4 rounded-lg border border-gray-700 bg-gray-900 hover:border-[#FFD700]/40 transition-colors"
              >
                <Mail className="w-5 h-5 text-[#FFD700]" />
                <span className="text-gray-300">{personalInfo.email}</span>
              </a>
            </FadeIn>

            <FadeIn delay={0.2}>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-3 p-4 rounded-lg border border-gray-700 bg-gray-900 hover:border-[#FFD700]/40 transition-colors"
              >
                <Smartphone className="w-5 h-5 text-[#FFD700]" />
                <span className="text-gray-300">{personalInfo.phone}</span>
              </a>
            </FadeIn>

            <FadeIn delay={0.3}>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border border-gray-700 bg-gray-900 hover:border-[#FFD700]/40 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-[#FFD700]" />
                <span className="text-gray-300">LinkedIn Profile</span>
              </a>
            </FadeIn>

            <FadeIn delay={0.4}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border border-gray-700 bg-gray-900 hover:border-[#FFD700]/40 transition-colors"
              >
                <Github className="w-5 h-5 text-[#FFD700]" />
                <span className="text-gray-300">GitHub Profile</span>
              </a>
            </FadeIn>
          </div>
        </section>
      </div>
    </div>
  );
}
