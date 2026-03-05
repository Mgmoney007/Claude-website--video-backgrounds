"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  delay = 0,
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.23, 1, 0.32, 1],
      }}
      whileHover={
        hover
          ? {
              y: -4,
              transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] },
            }
          : undefined
      }
      className={`
        relative rounded-2xl
        bg-white/[0.04] backdrop-blur-xl
        border border-white/[0.08]
        shadow-[0_4px_24px_rgba(0,0,0,0.2)]
        transition-colors duration-500
        hover:bg-white/[0.06]
        hover:border-brand-lime/20
        hover:shadow-[0_0_40px_rgba(210,248,1,0.08),0_8px_32px_rgba(0,0,0,0.3)]
        group
        ${className}
      `}
    >
      {/* Rim light effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-b from-brand-lime/10 via-transparent to-brand-blue/10" />
      </div>
      {children}
    </motion.div>
  );
}
