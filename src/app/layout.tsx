

import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/global/Navbar";



export const metadata: Metadata = {
  title: "Wajahat Hassan | React Native Developer",
  description:
    "Portfolio of Wajahat Hassan — React Native Developer with 4+ years of experience building scalable fintech, solar, and social mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
