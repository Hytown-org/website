import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hytown - Hytale Server with RPG & MMO Mods",
  description: "A Hytale server with RPG and MMO mods. Created by professionals with experience from RuneScape and Minecraft. Join our community today!",
  keywords: ["Hytale", "Hytale Server", "RPG", "MMO", "Gaming", "Hytown", "MMORPG"],
  authors: [{ name: "Hytown Team" }],
  openGraph: {
    title: "Hytown - Hytale Server with RPG & MMO Mods",
    description: "A Hytale server with RPG and MMO mods. Created by professionals with experience from RuneScape and Minecraft.",
    type: "website",
    locale: "en_US",
    siteName: "Hytown",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hytown - Hytale Server",
    description: "A Hytale server with RPG and MMO mods. Join our community today!",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#0e0603] text-[#e8e0d5]">
        {children}
      </body>
    </html>
  );
}
