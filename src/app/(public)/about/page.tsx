"use client";

import { CertificateList } from "@/components/certificates/CertificateList";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import { personalInfo, skillCategories } from "@/data/portfolio";
import { hoverLift, springTransition } from "@/lib/animations";
import * as motion from "framer-motion/client";

export default function AboutPage() {
  return (
    <div className="min-h-screen text-white px-6 py-10">
      <div className="max-w-5xl mx-auto space-y-12">
        <header className="space-y-4">
          <FadeIn direction="down">
            <h1 className="text-4xl font-bold">About Me</h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-[#FFD700] text-lg font-medium">{personalInfo.title}</p>
          </FadeIn>
        </header>

        <FadeIn delay={0.25}>
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold">Professional Summary</h2>
              <p className="text-gray-300 leading-relaxed">{personalInfo.summary}</p>
            </CardContent>
          </Card>
        </FadeIn>

        <section className="space-y-6">
          <FadeIn>
            <h2 className="text-2xl font-semibold">Technical Skills</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <FadeIn key={category.title} delay={0.08 * index}>
                <motion.div whileHover={hoverLift} transition={springTransition}>
                  <Card className="h-full hover:border-[#FFD700]/30 transition-colors duration-300">
                    <CardContent className="p-5 space-y-4">
                      <h3 className="text-lg font-semibold text-[#FFD700]">
                        {category.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            className="text-sm px-3 py-1.5 rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ ...springTransition, delay: 0.03 * skillIndex }}
                            whileHover={{
                              scale: 1.08,
                              borderColor: "rgba(255, 215, 0, 0.4)",
                              color: "#FFD700",
                            }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </section>

        <CertificateList />
      </div>
    </div>
  );
}
