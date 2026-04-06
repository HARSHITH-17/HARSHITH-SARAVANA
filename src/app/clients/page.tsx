"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

export default function Clients() {
  const clients = [
    { name: "Hawking Defence Services Private Limited", logo: "/logos/hawking.png" },
    { name: "Avasarala Technologies Ltd.", logo: "/logos/avasarala.jpg" },
    { name: "Ibex Engineering Private Limited", logo: "/logos/ibex.png" },
    { name: "KEMS Forgings Ltd.", logo: "/logos/kems.png" },
    { name: "Microtech CNC Private Limited", logo: "/logos/micro-tech.png" },
    { name: "Heat and Control (South Asia) Pvt. Ltd.", logo: "/logos/heat-and-control.png" },
    { name: "Mahindra Research Valley", logo: "/logos/mahindra.jpg" },
    { name: "Salcomp Manufacturing India Pvt. Ltd.", logo: "/logos/salcomp.png" },
    { name: "Viyoma Computer Aided Manufacturing Pvt. Ltd.", logo: "/logos/viyoma.png" },
    { name: "BMG Private Limited" },
    { name: "SAMATHA TECHNOLOGIES PVT LTD." }
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
          Global <span className="text-gradient">Partners</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-gray-400 text-xl font-light leading-relaxed max-w-2xl mx-auto relative z-10 font-sans"
        >
          Partnering with progressive organizations across South Asia to implement high-performance CAD/CAM workflows and manufacturing excellence.
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20"
      >
        {clients.map((client, i) => (
          <motion.div 
            key={client.name} 
            variants={itemVariants}
            className="group relative"
          >
            <div className="glass-card p-10 flex flex-col items-center justify-center min-h-[220px] h-full relative overflow-hidden border border-white/5 hover:border-[#00D4FF]/40 transition-all duration-500 cursor-pointer text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {client.logo ? (
                <div className="relative w-full h-24 mb-6 filter grayscale brightness-200 contrast-150 opacity-40 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 group-hover:opacity-100 transition-all duration-700 z-10">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain drop-shadow-[0_0_20px_rgba(0,212,255,0.2)]"
                  />
                </div>
              ) : (
                <div className="w-16 h-16 rounded-full bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] mb-6 group-hover:scale-110 transition-transform duration-500 border border-[#00D4FF]/20">
                  <span className="text-xl font-bold">{client.name.charAt(0)}</span>
                </div>
              )}
              
              <h3 className={`font-bold uppercase tracking-tight relative z-10 transition-colors duration-500 leading-tight ${client.logo ? "text-[10px] text-gray-500 group-hover:text-[#00D4FF]" : "text-sm text-gray-300 group-hover:text-white"}`}>
                {client.name}
              </h3>
              
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D4FF]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
