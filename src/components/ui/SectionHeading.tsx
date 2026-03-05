"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-16 md:mb-20 ${alignClass}`}>
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4 px-4 py-1.5 text-xs font-gilroy font-semibold tracking-[0.2em] uppercase text-brand-lime bg-brand-lime/[0.08] border border-brand-lime/20 rounded-full"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        className="font-clash font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-brand-white leading-[1.1] tracking-[-0.03em]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-base md:text-lg text-white/50 font-gilroy leading-[1.7] max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
