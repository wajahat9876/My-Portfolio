"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { personalInfo } from "@/data/portfolio";
import * as motion from "framer-motion/client";
import { Github, Linkedin } from "lucide-react";
import { springTransition } from "@/lib/animations";

const tabItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <motion.nav
      className="sticky top-0 z-50 bg-[#111]/90 backdrop-blur-md border-b border-gray-800 shadow-lg"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.div whileHover={{ scale: 1.05 }} transition={springTransition}>
          <Link
            href="/"
            className="text-white text-2xl font-bold hover:text-[#FFD700] transition-colors"
          >
            {personalInfo.name.split(" ")[0]}
          </Link>
        </motion.div>

        <div className="flex items-center gap-6 flex-wrap justify-center">
          <ul className="flex gap-8 list-none m-0 p-0">
            {tabItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.label} className="relative">
                  <Link
                    href={item.href}
                    className={`text-base font-medium transition-colors duration-300 ${
                      isActive ? "text-[#FFD700]" : "text-white hover:text-[#FFD700]"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FFD700] rounded-full"
                      transition={springTransition}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-white hover:text-[#FFD700] transition-colors"
              whileHover={{ scale: 1.2, rotate: -8 }}
              whileTap={{ scale: 0.9 }}
              transition={springTransition}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-white hover:text-[#FFD700] transition-colors"
              whileHover={{ scale: 1.2, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
              transition={springTransition}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
