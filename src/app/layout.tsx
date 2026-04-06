import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harshith Saravana | Application Engineer & CAD/CAM Expert",
  description: "High-end engineering portfolio of Harshith Saravana, showcasing CAD/CAM solutions, manufacturing improvements, and technical consulting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full antialiased dark`} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-background text-foreground font-sans" suppressHydrationWarning>
        <Navbar />
        <PageTransition>
          <main className="flex-1 w-full flex flex-col">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
