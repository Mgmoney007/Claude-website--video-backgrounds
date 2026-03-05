"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="relative py-32 md:py-44 overflow-hidden">
      {/* Multi-layered glow background */}
      <div className="absolute inset-0">
        {/* Center lime glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-lime/[0.05] rounded-full blur-[160px] animate-glow-pulse" />
        {/* Blue accents */}
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-brand-blue/[0.04] rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] bg-brand-blue/[0.03] rounded-full blur-[80px]" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block mb-6 px-4 py-1.5 text-xs font-gilroy font-semibold tracking-[0.2em] uppercase text-brand-lime bg-brand-lime/[0.08] border border-brand-lime/20 rounded-full"
        >
          Get Started Today
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="font-clash font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-white leading-[1.05] tracking-[-0.03em] mb-7"
        >
          Turn your big idea
          <br />
          into a{" "}
          <span className="text-brand-lime">stunning</span> website
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto text-base md:text-lg text-white/45 font-gilroy leading-[1.7] mb-10"
        >
          Join thousands of creators, startups, and enterprises already building
          with Aura. Start free, no credit card required.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="primary" size="lg">
            Get Started
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="ml-1"
            >
              <path
                d="M3 8h10m0 0L9 4m4 4L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <Button variant="secondary" size="lg">
            Contact Sales
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
