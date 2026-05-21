"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { personalInfo } from "@/data/portfolio";
import { Github, Linkedin } from "lucide-react";

const tabItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-[#111] border-b border-gray-800 shadow-lg">
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/"
          className="text-white text-2xl font-bold hover:text-[#FFD700] transition-colors"
        >
          {personalInfo.name.split(" ")[0]}
        </Link>

        <div className="flex items-center gap-6 flex-wrap justify-center">
          <ul className="flex gap-8 list-none m-0 p-0">
            {tabItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`text-base font-medium transition-colors duration-300 ${
                      isActive ? "text-[#FFD700]" : "text-white hover:text-[#FFD700]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-white hover:text-[#FFD700] transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-white hover:text-[#FFD700] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
