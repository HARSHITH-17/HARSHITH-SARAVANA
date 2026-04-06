"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export default function TiltCard({ children, className = "", intensity = 15 }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${intensity}deg`, `-${intensity}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${intensity}deg`, `${intensity}deg`]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      className={`relative group transition-all duration-300 ${className}`}
    >
      <div 
        style={{ 
          transform: "translateZ(50px)", 
          transformStyle: "preserve-3d" 
        }}
        className="h-full w-full"
      >
        {children}
      </div>
      
      {/* Dynamic Glow Effect */}
      <motion.div
        className="absolute -inset-2 bg-gradient-to-r from-[#00d4ff]/0 via-[#00d4ff]/10 to-[#2563eb]/0 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-0"
        style={{
          transform: "translateZ(-20px)"
        }}
      />
    </motion.div>
  );
}
