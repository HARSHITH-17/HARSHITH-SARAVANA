"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/clients", label: "Clients" },
  { href: "/training", label: "Training" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled ? "glass py-4 shadow-[0_10px_30px_rgba(0,0,0,0.4)]" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="HS Logo" 
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 z-10 drop-shadow-[0_0_10px_rgba(0,212,255,0.6)]" 
            />
            <div className="absolute inset-0 bg-[#00D4FF]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="text-xl font-bold tracking-[0.15em] text-white uppercase font-heading">
            HARSHITH <span className="text-[#00D4FF] drop-shadow-[0_0_8px_rgba(0,212,255,0.4)]">SARAVANA</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-xs font-semibold uppercase tracking-[0.2em] transition-all py-1",
                pathname === link.href ? "text-[#00D4FF]" : "text-gray-400 hover:text-white"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#00D4FF] shadow-[0_0_10px_rgba(0,212,255,0.8)]"
                />
              )}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-7 py-2.5 rounded-full bg-transparent border border-[#00D4FF]/30 hover:border-[#00D4FF] text-white text-xs font-bold uppercase tracking-[0.2em] transition-all hover:bg-[#00D4FF]/5 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] active:scale-95"
          >
            Inquire
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full glass border-t border-white/10 lg:hidden overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-bold uppercase tracking-[0.2em]",
                    pathname === link.href ? "text-[#00D4FF]" : "text-gray-400"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-white/10">
                <a 
                  href="https://github.com/HARSHITH-17" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-sm font-medium text-gray-400 hover:text-[#00D4FF] transition-colors flex items-center gap-3"
                >
                  <Cpu size={16} /> GitHub Profile
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
