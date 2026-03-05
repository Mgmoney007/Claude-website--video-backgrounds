"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ProductPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.3], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 0.3], [8, 0]);

  return (
    <section ref={sectionRef} className="relative py-28 md:py-36 overflow-hidden">
      {/* Glow behind mockup */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-brand-lime/[0.04] rounded-full blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          label="Product"
          title="See it in action"
          subtitle="A powerful dashboard that puts you in full control of your digital presence."
        />

        {/* Dashboard mockup */}
        <motion.div
          style={{ scale, opacity, rotateX, perspective: 1200 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Main glass panel */}
          <div className="relative rounded-2xl overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-[0_20px_80px_rgba(0,0,0,0.4)]">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
              </div>
              <div className="flex-1 mx-4">
                <div className="w-60 h-7 rounded-md bg-white/[0.04] border border-white/[0.06] mx-auto" />
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-6 md:p-8">
              {/* Top bar */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-lime/20" />
                  <div className="w-32 h-4 rounded bg-white/10" />
                </div>
                <div className="flex gap-2">
                  <div className="w-20 h-8 rounded-lg bg-white/[0.05] border border-white/[0.06]" />
                  <div className="w-24 h-8 rounded-lg bg-brand-lime/20" />
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {["Visitors", "Conversions", "Revenue", "Growth"].map(
                  (label, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]"
                    >
                      <p className="text-[10px] font-gilroy text-white/30 uppercase tracking-widest mb-1">
                        {label}
                      </p>
                      <p className="font-clash font-semibold text-xl text-brand-white">
                        {["12.4k", "3.2%", "$48k", "+24%"][i]}
                      </p>
                      <div className="mt-2 w-full h-1 bg-white/[0.05] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-brand-lime/60 to-brand-blue/60"
                          style={{ width: `${[75, 45, 60, 82][i]}%` }}
                        />
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Chart placeholder */}
              <div className="h-48 md:h-64 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-end gap-1 px-6 pb-6">
                {[40, 65, 45, 80, 55, 70, 90, 60, 85, 50, 75, 95].map(
                  (h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: 0.4 + i * 0.05,
                        ease: [0.23, 1, 0.32, 1],
                      }}
                      className="flex-1 rounded-t bg-gradient-to-t from-brand-lime/30 to-brand-lime/5 border border-brand-lime/10"
                    />
                  )
                )}
              </div>
            </div>
          </div>

          {/* Floating UI cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="absolute -right-4 md:-right-8 top-[30%] hidden md:block"
          >
            <div className="p-4 rounded-xl bg-white/[0.06] backdrop-blur-xl border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-brand-lime" />
                <span className="text-[11px] font-gilroy font-medium text-white/60">
                  Live
                </span>
              </div>
              <p className="font-clash font-semibold text-lg text-brand-white">
                99.9%
              </p>
              <p className="text-[10px] font-gilroy text-white/30">Uptime</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="absolute -left-4 md:-left-8 bottom-[25%] hidden md:block"
          >
            <div className="p-4 rounded-xl bg-white/[0.06] backdrop-blur-xl border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-brand-blue" />
                <span className="text-[11px] font-gilroy font-medium text-white/60">
                  Deploy
                </span>
              </div>
              <p className="font-clash font-semibold text-lg text-brand-white">
                2.1s
              </p>
              <p className="text-[10px] font-gilroy text-white/30">
                Build time
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
