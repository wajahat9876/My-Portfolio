"use client";

import { AnimatedProjectCard } from "@/components/projects/ProjectCard";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import { education, experience, personalInfo, projects } from "@/data/portfolio";
import { hoverLift, smoothTransition, springTransition } from "@/lib/animations";
import * as motion from "framer-motion/client";
import { Briefcase, GraduationCap, Layers } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="min-h-screen text-white px-6 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        <header className="space-y-2">
          <FadeIn direction="down">
            <h1 className="text-4xl font-bold">Resume</h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-gray-400">
              {personalInfo.name} · {personalInfo.title}
            </p>
          </FadeIn>
        </header>

        <section className="space-y-6">
          <FadeIn>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#FFD700]" />
              <h2 className="text-2xl font-semibold">Professional Experience</h2>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {experience.map((job, index) => (
              <FadeIn key={job.company} delay={0.1 * index}>
                <motion.div whileHover={hoverLift} transition={springTransition}>
                <Card className="hover:border-[#FFD700]/30 transition-colors duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold">{job.role}</h3>
                        <p className="text-[#FFD700]">
                          {job.company} · {job.location}
                        </p>
                      </div>
                      <span className="text-sm text-gray-400 whitespace-nowrap">
                        {job.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {job.highlights.map((item, highlightIndex) => (
                        <motion.li
                          key={item}
                          className="text-gray-300 text-sm leading-relaxed flex gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ ...smoothTransition, delay: 0.05 * highlightIndex }}
                        >
                          <span className="text-[#FFD700] mt-1.5 shrink-0">•</span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <FadeIn>
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#FFD700]" />
              <h2 className="text-2xl font-semibold">Key Projects</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6">
            {projects.map((project, index) => (
              <AnimatedProjectCard
                key={project.id}
                project={project}
                index={index}
                variant="detailed"
              />
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <FadeIn>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#FFD700]" />
              <h2 className="text-2xl font-semibold">Education</h2>
            </div>
          </FadeIn>

          {education.map((item, index) => (
            <FadeIn key={item.degree} delay={0.1 * index}>
              <motion.div whileHover={hoverLift} transition={springTransition}>
              <Card>
                <CardContent className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold">{item.degree}</h3>
                    <p className="text-gray-400">{item.institution}</p>
                  </div>
                  <span className="text-sm text-[#FFD700]">{item.period}</span>
                </CardContent>
              </Card>
              </motion.div>
            </FadeIn>
          ))}
        </section>
      </div>
    </div>
  );
}
