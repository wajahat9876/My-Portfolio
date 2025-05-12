/* eslint-disable react/no-unescaped-entities */
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Mail, Smartphone } from "lucide-react";
import * as motion from "framer-motion/client"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto space-y-8">
      
        {/* Animated Header */}
        <header className="text-center space-y-2">
          <motion.div
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm a React Native Developer
          </motion.div>

          <motion.p
  className="text-lg text-gray-400"
  initial={{ opacity: 0, x: 50 }}   // Start 50px to the left
  animate={{ opacity: 1, x: 0 }}     // Animate to original position
  transition={{ duration: 0.8, delay: 0.5 }}
>
            I build high-performance mobile apps using React Native
          </motion.p>
        </header>

        {/* Animated Projects Section */}
        <section className="space-y-4">
          <motion.h2
            className="text-2xl font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Projects
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.div
              key="todo-app"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8,delay: 0.5 }}
            >
              <Card>
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-xl font-bold">Lava E Remit</h3>
                  <p className="text-gray-300">A Fintact.</p>
                  <Button type="button">View Project</Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              key="ecommerce-app"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-xl font-bold">E-Commerce App</h3>
                  <p className="text-gray-300">A cross-platform shopping app using Expo and Firebase.</p>
                  <Button type="button">View Project</Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        {/* Animated Contact Section */}
        <section className="space-y-4">
          <motion.h2
            className="text-2xl font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Contact Me
          </motion.h2>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Mail className="w-5 h-5" /> <span>your@email.com</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Smartphone className="w-5 h-5" /> <span>+92-XXX-XXXXXXX</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Github className="w-5 h-5" /> <span>github.com/yourusername</span>
            </motion.div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
