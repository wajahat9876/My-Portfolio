import type { Metadata } from "next";
import { JetBrains_Mono, Urbanist } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/global/Navbar";

const display = Urbanist({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "800", "900"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Wajahat Hassan | Full-Stack Developer — Web, Mobile & Backend",
  description:
    "Portfolio of Wajahat Hassan — Full-Stack Developer with 4+ years of experience building web applications, cross-platform mobile apps, and Node.js backends, with hands-on QA and deployment across Vercel, the App Store and Google Play.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body className="antialiased bg-black font-[family-name:var(--font-display)]">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
