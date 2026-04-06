"use client";

import { CheckCircle2, MonitorPlay } from "lucide-react";
import { motion, Variants } from "framer-motion";

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
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

export default function Training() {
  const courses = [
    { 
      title: "Autodesk Suite", 
      logo: <img src="/logos/autodesk.png" alt="Autodesk" className="w-full h-full object-contain" />,
      modules: ["AutoCAD", "Fusion 360", "PowerMill", "Inventor", "FeatureCAM"] 
    },
    { 
      title: "SOLIDWORKS", 
      logo: <img src="/logos/solidworks.png" alt="SOLIDWORKS" className="w-full h-full object-contain" />,
      modules: ["Part design", "Assemblies", "Simulation"] 
    },
    { 
      title: "Siemens NX", 
      logo: <img src="/logos/siemens.png" alt="Siemens NX" className="w-full h-full object-contain" />,
      modules: ["CAD & CAM basics", "Advanced Manufacturing"] 
    },
    { 
      title: "PTC Creo", 
      logo: <img src="/logos/creo.png" alt="PTC Creo" className="w-full h-full object-contain" />,
      modules: ["Parametric modeling", "Assemblies"] 
    },
    { 
      title: "ZW3D & FF CAM", 
      logo: (
        <div className="flex gap-2 w-full h-full">
          <img src="/logos/zw3d.png" alt="ZW3D" className="w-1/2 object-contain" />
          <img src="/logos/ffcam.png" alt="Makino FF CAM" className="w-1/2 object-contain" />
        </div>
      ),
      modules: ["CAD + 3D modeling", "Toolpaths", "Simulation"] 
    },
    { 
      title: "Fundamentals", 
      logo: <img src="/logos/gdt.png" alt="GD&T Fundamentals" className="w-full h-full object-contain rounded border border-white/5" />,
      modules: ["GD&T", "Drawings", "Workflows", "MS Office for engineering documentation"] 
    }
  ];

  return (
    <div className="pt-40 pb-20 container mx-auto px-6 relative z-10">
      <div className="text-center max-w-4xl mx-auto mb-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-[#00D4FF]/5 blur-[120px] rounded-full z-0 pointer-events-none mix-blend-screen" />
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter uppercase font-heading text-white relative z-10"
        >
          Operator <span className="text-gradient">Training</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-gray-400 text-xl font-light leading-relaxed max-w-2xl mx-auto relative z-10 font-sans"
        >
          Industry-focused engineering software training designed to bridge the gap between academic knowledge and real-world industrial application.
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-28"
      >
        {courses.map((course, i) => (
          <motion.div 
            key={course.title} 
            variants={itemVariants}
            className="glass-card p-10 group relative border border-[#00D4FF]/10 hover:border-[#00D4FF]/40 transition-all overflow-hidden flex flex-col h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex flex-col items-start gap-6 mb-12 relative z-10">
              <div className="h-32 w-full max-w-[320px] shrink-0 text-[#00D4FF] group-hover:scale-[1.02] transition-transform duration-500 flex items-center justify-start">
                {course.logo}
              </div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight transition-all">{course.title}</h3>
            </div>
            
            <ul className="space-y-5 relative z-10 flex-1 font-sans">
              {course.modules.map((mod, j) => (
                <li key={mod} className="flex gap-4 text-gray-400 font-light group/item items-start">
                  <div className="mt-1">
                    <CheckCircle2 className="text-[#00D4FF]/30 shrink-0 group-hover/item:text-[#00D4FF] group-hover/item:scale-110 transition-all shadow-[0_0_10px_rgba(0,212,255,0)] group-hover/item:shadow-[0_0_10px_rgba(0,212,255,0.4)] rounded-full" size={18} strokeWidth={2.5}/>
                  </div>
                  <span className="group-hover/item:text-gray-200 transition-colors">{mod}</span>
                </li>
              ))}
            </ul>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00D4FF]/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-card overflow-hidden relative border border-[#00D4FF]/20 group"
      >
        <div className="absolute inset-0 bg-[#00D4FF]/5 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity z-0 pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row items-stretch">
          <div className="lg:w-1/3 relative min-h-[300px] overflow-hidden group">
            <img 
              src="/corporate-training.png" 
              alt="Corporate Workshop" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/80 to-transparent lg:hidden" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050816]/20 hidden lg:block" />
            <div className="absolute inset-0 border-r border-[#00D4FF]/20 hidden lg:block" />
          </div>

          <div className="lg:w-2/3 p-10 md:p-14 relative z-10 flex flex-col justify-center text-left">
            <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] mb-6 shadow-[0_0_20px_rgba(0,212,255,0.1)]">
              <MonitorPlay className="w-6 h-6" strokeWidth={1.5} />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">Corporate Workshops</h2>
            
            <p className="text-gray-400 font-light text-xl mb-10 leading-relaxed font-sans max-w-2xl">
              Tailored hands-on training sessions for engineering students, professionals, and corporate design teams. Transform your engineering capabilities with precision-led workshops.
            </p>
            
            <a href="/contact" className="relative group/btn w-fit inline-flex px-10 py-4 rounded-full bg-[#00D4FF] text-[#050816] font-bold uppercase tracking-[0.2em] text-[10px] transition-all hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] active:scale-[0.98]">
              <span className="relative z-10 flex items-center gap-3">
                Initiate Training Request
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
