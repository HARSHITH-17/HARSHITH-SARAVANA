"use client";

import { CheckCircle2, Briefcase, Calendar, MapPin, Cpu } from "lucide-react";
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

export default function About() {
  const strengths = [
    "Advanced CAD/CAM Solutions (Fusion 360, PowerMill, Inventor, Delcam)",
    "Manufacturing Workflow Optimization",
    "High-Precision CNC Programming",
    "Technical Consulting for Toolrooms",
    "Enterprise Client Engagement",
    "Corporate Training Delivery",
    "Pre-Sales & Post-Sales Excellence",
    "Cost Optimization & Efficiency Improvement"
  ];

  const experience = [
    {
      role: "Application Engineer",
      company: "MicroGenesis CADSoft Pvt. Ltd.",
      location: "Bengaluru, India",
      points: [
        "Delivered 15+ high-impact product demonstrations for Autodesk Design & Manufacturing solutions (Fusion 360, PowerMill, FeatureCAM), accelerating client decision-making by 30%.",
        "Led end-to-end technical consulting engagements, reducing design-to-production timelines by 20–35% across multiple industries.",
        "Designed and executed structured CAD/CAM training programs, upskilling 50+ engineers and reducing programming errors and machine downtime.",
        "Managed the complete implementation lifecycle (requirement analysis → deployment → support), ensuring 100% successful adoption with measurable ROI.",
        "Conducted technical webinars and workshops for 200+ participants, strengthening brand positioning in the Autodesk ecosystem."
      ]
    },
    {
      role: "Technical Business Development Manager",
      company: "Om Shakthi Industries",
      location: "Bengaluru, India",
      points: [
        "Co-led operations at a precision CNC manufacturing company, managing client relationships and production workflows.",
        "Improved on-time delivery and production efficiency through process optimization across machining, quality, and scheduling.",
        "Generated new business by identifying industrial opportunities and converting leads into long-term manufacturing contracts.",
        "Introduced advanced tooling and engineering practices, enhancing shop-floor productivity and component precision.",
        "Acted as a bridge between client requirements and production teams, ensuring accurate execution of engineering specifications."
      ]
    },
    {
      role: "Application Engineer",
      company: "Blue Bell Engineering Solutions Pvt. Ltd.",
      location: "Bengaluru, India",
      points: [
        "Collaborated with 50+ manufacturing clients to implement Autodesk solutions, improving workflow efficiency by up to 40%.",
        "Delivered hands-on training in Fusion 360, PowerMill, and FeatureCAM, reducing CNC programming errors by 25%.",
        "Provided post-sales technical consulting, resolving complex CAD/CAM challenges and minimizing rework and downtime.",
        "Represented the company at industry expos and technical events, increasing qualified leads and customer engagement.",
        "Managed onboarding and implementation programs, achieving 95% customer satisfaction."
      ]
    },
    {
      role: "Faculty Lecturer – Tool & Mould Design",
      company: "Government Tool Room and Training Centre",
      location: "Bengaluru, India",
      points: [
        "Trained 120+ final-year students in mould design, injection systems, and DFM principles.",
        "Developed an industry-aligned curriculum that reduced design errors by 40%.",
        "Supervised real-world projects using Autodesk tools, improving design accuracy by 30%.",
        "Integrated shop-floor practices and CNC awareness into training to enhance industry readiness."
      ]
    },
    {
      role: "Mechanical Engineer",
      company: "TAFE - Tractors and Farm Equipment Limited",
      location: "Karnataka, India",
      points: [
        "Designed 20+ tooling and fixture solutions, reducing production cycle time by 15%.",
        "Created detailed drawings and BOMs to improve manufacturability and reduce rework.",
        "Collaborated with production teams to optimize CNC machining and tooling processes.",
        "Reduced tooling-related downtime by 20% through effective trial support and corrective actions.",
        "Contributed to continuous improvement initiatives enhancing tooling consistency and repeatability."
      ]
    }
  ];

  return (
    <div className="pt-40 pb-20 container mx-auto px-6 relative z-10">
      <motion.h1
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-3xl font-bold mb-16 tracking-tighter uppercase font-heading text-white"
      >
        Digital Manufacturing & Engineering{" "}
        <span className="text-gradient">Transformation Specialist</span>
      </motion.h1>

      {/* Profile + Bio Section */}
      <div className="grid lg:grid-cols-3 gap-14 text-gray-300 mb-32 items-start">

        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center lg:items-start gap-6 relative"
        >
          {/* Background Highlight */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#00D4FF]/5 blur-3xl rounded-full z-0 pointer-events-none" />

          <div className="relative w-64 h-64 mx-auto lg:mx-0 z-10 group">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00D4FF] via-[#00D4FF]/40 to-transparent p-[2px] shadow-[0_0_40px_rgba(0,212,255,0.2)] group-hover:shadow-[0_0_60px_rgba(0,212,255,0.4)] transition-shadow duration-500">
              <div className="w-full h-full rounded-full bg-[#050816]" />
            </div>
            {/* Photo */}
            <img
              src="/harshith-profile.jpg"
              alt="HARSHITH SARAVANA – Application Engineer"
              className="absolute inset-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-full object-cover object-top opacity-90 transition-opacity group-hover:opacity-100"
            />
          </div>

          {/* Name card below photo */}
          <div className="glass-card p-6 w-full text-center lg:text-left z-10 border border-[#00D4FF]/10">
            <div className="text-xl font-bold text-white mb-1 uppercase tracking-tight">HARSHITH SARAVANA</div>
            <div className="text-sm text-[#00D4FF] font-black uppercase mb-3 tracking-[0.1em]">Application Engineer</div>
            <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">Digital Engineering Transformation Specialist</div>
            <div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-3 text-xs text-gray-400 font-medium font-sans">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <MapPin size={14} className="text-[#00D4FF]" />
                BENGALURU, KARNATAKA, INDIA
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Briefcase size={14} className="text-[#00D4FF]" />
                4+ YEARS EXPERIENCE
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Calendar size={14} className="text-[#00D4FF]" />
                AVAILABLE FOR CONSULTING
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bio Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-6 lg:col-span-1 z-10"
        >
          <h2 className="text-2xl text-white font-bold mb-6 tracking-tight uppercase flex items-center gap-3">
            <Cpu size={24} className="text-[#00D4FF]" /> Operational History
          </h2>
          <div className="space-y-5 text-gray-400 font-light leading-relaxed font-sans">
            <p>
              I&apos;m HARSHITH SARAVANA, an Application Engineer and Digital Engineering Transformation Specialist based in Bengaluru, India, with over 4 years of experience delivering advanced engineering solutions.
            </p>
            <p>
              I operate at the intersection of engineering precision and business impact, enabling manufacturing organizations to enhance their capabilities through optimized design workflows, intelligent machining strategies, and seamless technology integration.
            </p>
            <div className="p-5 border-l-2 border-[#00D4FF] bg-[#00D4FF]/5 rounded-r-xl my-6">
              <p className="font-medium text-[#00D4FF] leading-relaxed text-sm">
                4+ years of expertise in CAD/CAM, digital manufacturing, technical consulting, and workflow optimization across automotive and industrial sectors.
              </p>
            </div>
            <p>
              I collaborate closely with clients to understand complex manufacturing challenges and translate them into scalable, practical solutions — from toolroom optimization to corporate training programs.
            </p>
          </div>
        </motion.div>

        {/* Core Strengths */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="glass-card p-8 z-10 h-fit border border-[#00D4FF]/10 hover:border-[#00D4FF]/30 transition-colors"
        >
          <h2 className="text-xl text-white font-bold mb-6 tracking-tight uppercase">Technical Capabilities</h2>
          <ul className="space-y-4 font-sans">
            {strengths.map((item, i) => (
              <li key={i} className="flex gap-4 items-start group">
                <div className="mt-1">
                  <CheckCircle2 className="text-[#00D4FF]/50 group-hover:text-[#00D4FF] transition-colors" size={16} />
                </div>
                <span className="font-light text-gray-400 group-hover:text-gray-300 text-sm leading-relaxed transition-colors">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>


      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-white mb-16 flex items-center gap-5 tracking-tighter uppercase font-heading"
      >
        <Briefcase className="text-[#00D4FF] w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} /> Career Timeline
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-16 pl-4 md:pl-0"
      >
        {experience.map((exp, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="relative md:ml-8 pl-8 md:pl-12 border-l border-white/10 hover:border-[#00D4FF]/50 transition-colors duration-500 group"
          >
            <div className="absolute -left-[5px] top-2 z-10 w-[9px] h-[9px] rounded-full bg-[#050816] border-2 border-[#00D4FF] shadow-[0_0_15px_rgba(0,212,255,0.8)] group-hover:scale-150 transition-transform duration-300" />

            <div className="absolute -left-full top-2 w-full h-[1px] bg-gradient-to-r from-transparent to-[#00D4FF]/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <h3 className="text-2xl font-bold text-white leading-tight tracking-tight uppercase">{exp.role}</h3>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              <div className="flex items-center gap-2 text-[#00D4FF]">
                <Briefcase size={14} strokeWidth={2.5} />
                <span>{exp.company}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <MapPin size={14} strokeWidth={2.5} />
                {exp.location}
              </div>
            </div>

            <ul className="space-y-4 font-sans">
              {exp.points.map((point, j) => (
                <li key={j} className="flex gap-4 text-sm leading-relaxed text-gray-400 font-light group/point">
                  <div className="mt-2 w-1.5 h-1.5 rounded-sm bg-[#00D4FF]/30 shrink-0 group-hover/point:bg-[#00D4FF] transition-colors" />
                  <span className="group-hover/point:text-gray-200 transition-colors">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
