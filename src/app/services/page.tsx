"use client";

import { Settings, Network, PenTool, Lightbulb, GraduationCap, MonitorCog, Component, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import TiltCard from "@/components/ui/TiltCard";

const services = [
  { 
    icon: GraduationCap, 
    title: "Autodesk Software Training", 
    image: "/services/cad.jpg",
    desc: "Comprehensive, industry-oriented training in Fusion 360, PowerMill, and Inventor—focused on practical application, real-time projects, and skill enhancement." 
  },
  { 
    icon: Lightbulb, 
    title: "Technical Support & Implementation", 
    image: "/services/it_infrastructure.jpg",
    desc: "Seamless deployment of CAD/CAM solutions within your manufacturing ecosystem, ensuring smooth adoption, minimal downtime, and maximum productivity." 
  },
  { 
    icon: Component, 
    title: "CAD Design & Product Development", 
    image: "/services/cam.jpg",
    desc: "Expert 3D modeling and product conceptualization to transform ideas into manufacturable, high-quality designs." 
  },
  { 
    icon: MonitorCog, 
    title: "CAM Programming & CNC Support", 
    image: "/services/cnc_control.jpg",
    desc: "Development of high-efficiency toolpaths for complex multi-axis milling and turning, improving precision, surface finish, and machining performance." 
  },
  { 
    icon: PenTool, 
    title: "Mould Design & Tool Room Consulting", 
    image: "/services/mould.jpg",
    desc: "Optimizing mould designs and toolroom processes to enhance product quality, reduce cycle times, and improve production reliability." 
  },
  { 
    icon: Settings, 
    title: "Workflow Optimization", 
    image: "/services/workflow.jpg",
    desc: "Identifying operational bottlenecks and implementing modern, efficient workflows to streamline design-to-manufacturing processes." 
  },
  { 
    icon: Network, 
    title: "API Development & Workflow Automation", 
    image: "/services/automation.jpg",
    desc: "Custom API integrations and automation solutions to connect systems, reduce manual effort, and improve engineering productivity." 
  },
  { 
    icon: Handshake, 
    title: "Engineering Sales Consultation", 
    image: "/services/consultation.jpg",
    desc: "Bridging the gap between technical capabilities and business needs through solution-driven consultation and strategic decision support." 
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
    },
  }),
};

export default function Services() {
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
          Enterprise <span className="text-gradient">Capabilities</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-gray-400 text-xl font-light leading-relaxed max-w-2xl mx-auto relative z-10"
        >
          Delivering end-to-end technical solutions designed to maximize productivity and elevate manufacturing standards across your enterprise.
        </motion.p>
      </div>
      
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
        {services.map((svc, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={i}
            className="h-full"
          >
            <TiltCard className="h-full">
              <div className="glass-card h-full group relative overflow-hidden flex flex-col items-start min-h-[420px] border border-white/5 hover:border-[#00D4FF]/40 transition-all duration-700">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={svc.image} 
                    alt={svc.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/80 to-[#050816]/40 z-10" />
                </div>

                <div className="p-10 flex flex-col h-full relative z-20 w-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#00D4FF]/10 border border-[#00D4FF]/30 flex items-center justify-center text-[#00D4FF] mb-8 group-hover:scale-110 group-hover:bg-[#00D4FF]/20 group-hover:border-[#00D4FF]/60 transition-all duration-500 shadow-[0_0_20px_rgba(0,212,255,0.1)]">
                    <svc.icon size={28} strokeWidth={1.5} />
                  </div>
                  
                  <h2 className="text-xl text-white font-bold mb-4 leading-tight uppercase tracking-tight drop-shadow-sm">{svc.title}</h2>
                  
                  <p className="text-gray-400 group-hover:text-gray-100 transition-colors text-sm font-light leading-relaxed flex-1">
                    {svc.desc}
                  </p>
                  
                  <div className="w-12 h-[2px] bg-[#00D4FF] mt-8 group-hover:w-full transition-all duration-700 opacity-60" />
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
