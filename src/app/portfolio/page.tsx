"use client";

import Link from "next/link";
import { ArrowRight, Search, Activity, BookOpen, Layers, GitBranch, Target, Code } from "lucide-react";
import React from "react";
import { motion, Variants } from "framer-motion";
import TiltCard from "@/components/ui/TiltCard";

const projects = [
  { 
    id: "cad-cam-implementation", 
    title: "CAD/CAM Implementation Projects", 
    category: "Implementation", 
    icon: Search,
    image: "/portfolio/cad-implementation.png",
    desc: "Successfully deployed Fusion 360 and PowerMill solutions for manufacturing clients, optimizing design-to-production workflows and improving overall productivity."
  },
  { 
    id: "cnc-optimization", 
    title: "CNC Programming & Machining Optimization", 
    category: "Machining Optimization", 
    icon: Activity,
    image: "/portfolio/cnc-optimization.png",
    desc: "Developed advanced toolpaths for complex components, reducing cycle times and enhancing surface finish in multi-axis machining environments."
  },
  { 
    id: "technical-training", 
    title: "Technical Training Programs", 
    category: "Training", 
    icon: BookOpen,
    image: "/portfolio/technical-training.png",
    desc: "Delivered hands-on training sessions for students and industry professionals, enabling them to effectively utilize CAD/CAM tools in real-world applications."
  },
  { 
    id: "mould-design", 
    title: "Mould Design & Toolroom Solutions", 
    category: "Toolroom Solutions", 
    icon: Layers,
    image: "/portfolio/mould-design.png",
    desc: "Designed and optimized moulds to improve product quality, minimize defects, and streamline production processes."
  },
  { 
    id: "workflow-automation", 
    title: "Workflow Automation & Process Improvement", 
    category: "Automation", 
    icon: GitBranch,
    image: "/portfolio/workflow-automation.png",
    desc: "Implemented automation strategies and improved workflows to eliminate inefficiencies and enhance engineering output."
  },
  { 
    id: "client-consulting", 
    title: "Client Consulting & Solution Delivery", 
    category: "Consulting", 
    icon: Target,
    image: "/portfolio/client-consulting.png",
    desc: "Worked closely with organizations to understand their manufacturing challenges and provided tailored solutions aligned with their business goals."
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1], // easeOutQuart substitute
    },
  },
};

export default function Portfolio() {
  return (
    <div className="pt-42 pb-20 container mx-auto px-6 relative z-10">
      <div className="text-center max-w-4xl mx-auto mb-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-[#00D4FF]/5 blur-[120px] rounded-full z-0 pointer-events-none mix-blend-screen" />
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter uppercase font-heading text-white relative z-10"
        >
          System <span className="text-gradient">Portfolio</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-gray-400 text-xl font-light leading-relaxed max-w-2xl mx-auto relative z-10"
        >
          Experimental engineering solutions across CAD/CAM, manufacturing, and transformation. Each project reflects precision and high-impact implementation.
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32"
      >
        {projects.map((proj) => (
          <motion.div key={proj.id} variants={itemVariants} className="h-full">
            <TiltCard className="h-full">
              <Link href={`/portfolio/${proj.id}`} className="group glass-card overflow-hidden flex flex-col h-full border border-white/5 hover:border-[#00D4FF]/30 transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/30 to-transparent" />
                  <div className="absolute bottom-4 left-6 z-10">
                    <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/20 backdrop-blur-md border border-[#00D4FF]/30 flex items-center justify-center text-[#00D4FF] group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,212,255,0.2)]">
                      <proj.icon size={24} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col relative bg-[#101525]/30">
                  <div className="absolute top-0 right-8 w-1/2 h-[1px] bg-gradient-to-l from-transparent via-[#00D4FF]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="text-[10px] text-[#00D4FF] font-black mb-4 uppercase tracking-[0.3em]">{proj.category}</div>
                  <h3 className="text-2xl text-white font-bold mb-4 group-hover:text-[#00D4FF] transition-colors leading-tight tracking-tight uppercase">
                    {proj.title}
                  </h3>
                  <p className="text-gray-400 mb-8 text-sm font-light leading-relaxed flex-1 group-hover:text-gray-200 transition-colors">
                    {proj.desc}
                  </p>
                  <div className="flex items-center gap-2 text-white group-hover:text-[#00D4FF] transition-colors text-[10px] font-black uppercase tracking-[0.2em] group/link">
                    View Data Output 
                    <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform ml-1" />
                  </div>
                  
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D4FF]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </Link>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Key Clients Footer Note */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-card p-14 relative overflow-hidden text-center border border-[#00D4FF]/20 group"
      >
        <div className="absolute inset-0 bg-[#00D4FF]/5 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tight relative z-10">Corporate Integration</h2>
        <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto mb-12 relative z-10 leading-relaxed">
          Worked with organizations across automotive, manufacturing, and engineering sectors, delivering reliable and scalable solutions through technical excellence.
        </p>
        <a 
          href="https://github.com/HARSHITH-17" 
          target="_blank" 
          rel="noreferrer"
          className="relative z-10 inline-flex items-center gap-4 px-10 py-5 rounded-full bg-[#00D4FF] text-[#050816] font-bold uppercase tracking-[0.2em] text-xs hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(0,212,255,0.4)] active:scale-95 transition-all"
        >
          <Code size={18} />
          Access Source Logs
        </a>
      </motion.div>
    </div>
  );
}
