const orbs = [
  { size: 420, x: "10%", y: "15%", delay: "0s", duration: "22s" },
  { size: 320, x: "75%", y: "8%", delay: "-4s", duration: "18s" },
  { size: 280, x: "60%", y: "55%", delay: "-9s", duration: "24s" },
  { size: 200, x: "20%", y: "70%", delay: "-2s", duration: "20s" },
];

/**
 * Ambient gold orbs.
 *
 * Drawn as radial gradients rather than blurred circles: a `blur-3xl` filter
 * on four large layers forces a re-raster every frame and was the main cause
 * of scroll jank. A gradient looks the same here and costs nothing.
 * Animation is CSS so it runs off the main thread.
 */
export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {orbs.map((orb, index) => (
        <div
          key={index}
          className="orb absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background:
              "radial-gradient(circle, rgba(255,215,0,0.10) 0%, rgba(255,215,0,0.04) 45%, transparent 70%)",
            animationDuration: orb.duration,
            animationDelay: orb.delay,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,215,0,0.06)_0%,_transparent_50%)]" />
    </div>
  );
}
