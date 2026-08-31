import { AnimatedBackground } from "@/components/ui/animated-background";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-black">
      <AnimatedBackground />
      {children}
    </div>
  );
}
