"use client";

import * as motion from "framer-motion/client";

const orbs = [
  { size: 420, x: "10%", y: "15%", delay: 0, duration: 22 },
  { size: 320, x: "75%", y: "8%", delay: 2, duration: 18 },
  { size: 280, x: "60%", y: "55%", delay: 4, duration: 24 },
  { size: 200, x: "20%", y: "70%", delay: 1, duration: 20 },
];

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-[#FFD700]/[0.04] blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
            scale: [1, 1.08, 0.95, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,215,0,0.06)_0%,_transparent_50%)]" />
    </div>
  );
}
