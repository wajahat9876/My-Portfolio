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
  title: "Wajahat Hassan | React & React Native Developer",
  description:
    "Portfolio of Wajahat Hassan — React & React Native Developer with 4+ years of experience building scalable web applications, mobile apps, fintech platforms, and modern user interfaces.",
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
