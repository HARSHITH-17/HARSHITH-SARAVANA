"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Trophy, Users, Briefcase, Zap, Settings, Cog, Code, Cpu } from "lucide-react";
import HeroCanvas from "@/components/canvas/HeroCanvas";
import TiltCard from "@/components/ui/TiltCard";
import React, { useRef } from "react";

const services = [
  { icon: Settings, title: "Autodesk Software Training", desc: "Industry-focused training with real-time projects and practical implementation." },
  { icon: Cog, title: "CAM Programming & CNC Support", desc: "Advanced toolpath strategies for precision machining and performance." },
  { icon: Zap, title: "Workflow Optimization", desc: "Streamlining design-to-manufacturing processes." },
];

const highlights = [
  { icon: Briefcase, value: "4+", label: "Years Experience" },
  { icon: Users, value: "11+", label: "Corporate Clients" },
  { icon: Trophy, value: "Autodesk", label: "Certified Expert" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Home() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.9]);

  return (
    <>
      {/* Hero Section */}
      <section ref={scrollRef} className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden bg-[#050816]">
        <HeroCanvas />
        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            style={{ opacity: heroOpacity, scale: heroScale }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/5 text-[#00D4FF] text-[10px] font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(0,212,255,0.1)]"
            >
              <Cpu size={14} className="animate-pulse" />
              Digital Engineering Transformation Specialist
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1.1] text-white"
            >
              Engineering the <br />
              <span className="text-gradient">Future Industry</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed font-light"
            >
              Driving manufacturing excellence through advanced <span className="text-white font-medium">CAD/CAM solutions</span>, precision engineering, and strategic technical consulting.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6">
              <Link
                href="/contact"
                className="group relative px-10 py-4 rounded-full bg-[#00D4FF] text-[#050816] font-bold uppercase tracking-[0.1em] text-sm overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,212,255,0.4)] active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Initiate Project <ArrowRight size={18} />
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              </Link>
              
              <a
                href="https://github.com/HARSHITH-17"
                target="_blank"
                rel="noreferrer"
                className="group px-10 py-4 rounded-full border border-white/10 text-white font-bold uppercase tracking-[0.1em] text-sm flex items-center gap-2 transition-all hover:bg-white/5 hover:border-white/20 active:scale-95"
              >
                <Code size={18} className="text-[#00D4FF]" /> Repositories
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="absolute right-0 bottom-0 w-1/3 h-full bg-gradient-to-l from-[#00D4FF]/5 to-transparent pointer-events-none" />
      </section>

      {/* Stats Section */}
      <section className="py-20 relative border-y border-white/5 bg-[#080B1E]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {highlights.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="relative flex flex-col items-center group"
              >
                <div className="absolute inset-0 bg-[#00D4FF]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00D4FF] mb-6 group-hover:border-[#00D4FF]/50 transition-colors shadow-inner">
                  <stat.icon size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-4xl font-bold text-white tracking-tighter mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-[0.2em] font-bold">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-32 bg-[#050816]">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-20 flex-wrap gap-8"
          >
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight uppercase">Core Competencies</h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed">Delivering end-to-end engineering solutions tailored for modern manufacturing challenges.</p>
            </div>
            <Link href="/services" className="px-6 py-2 rounded-full border border-[#00D4FF]/20 text-[#00D4FF] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#00D4FF]/5 hover:border-[#00D4FF] transition-all flex items-center gap-2">
              All Capabilities <ArrowRight size={14} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
              >
                <TiltCard className="h-full">
                  <div className="glass-card p-10 h-full flex flex-col items-start group overflow-hidden">
                    <div className="w-14 h-14 rounded-2xl bg-[#00D4FF]/5 border border-[#00D4FF]/20 text-[#00D4FF] flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(0,212,255,0.05)]">
                      <service.icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-tight">{service.title}</h3>
                    <p className="text-gray-400 font-light text-sm leading-relaxed mb-10 flex-1">{service.desc}</p>
                    <Link href="/services" className="inline-flex items-center text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#00D4FF] group-hover:translate-x-2 transition-transform">
                      Explore Details <ArrowRight size={12} className="ml-2" />
                    </Link>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D4FF]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Preview CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#00D4FF]/5 skew-y-3 translate-y-20 scale-110" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-transparent to-[#050816]" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter uppercase font-heading">Global Industrial Partnerships</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-12 font-light text-xl">
              Partnering with top engineering and manufacturing firms to drive innovation across South Asia.
            </p>
            <Link
              href="/clients"
              className="inline-flex items-center gap-3 px-12 py-4 rounded-full border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#00D4FF] hover:text-[#050816] hover:border-[#00D4FF] transition-all hover:shadow-[0_0_50px_rgba(0,212,255,0.3)] active:scale-95"
            >
              Enterprise Network <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
