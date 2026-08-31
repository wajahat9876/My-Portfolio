"use client";

import * as motion from "framer-motion/client";
import { ReactNode } from "react";
import { springTransition, tapScale } from "@/lib/animations";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export function Button({ children, onClick, type = "button" }: ButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className="px-4 py-2 rounded-lg text-white font-medium cursor-pointer bg-indigo-600 hover:bg-indigo-500 border border-indigo-500/50 shadow-lg shadow-indigo-600/20"
      whileHover={{
        scale: 1.05,
        y: -2,
        boxShadow: "0 8px 24px rgba(79, 70, 229, 0.4)",
      }}
      whileTap={tapScale}
      transition={springTransition}
    >
      {children}
    </motion.button>
  );
}
