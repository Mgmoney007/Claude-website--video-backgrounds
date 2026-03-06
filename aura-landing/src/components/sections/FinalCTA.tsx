"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { Vortex } from "@/components/ui/vortex";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden h-[36rem] md:h-[40rem] bg-brand-charcoal">
      <Vortex
        backgroundColor="black"
        baseHue={75}
        rangeY={300}
        particleCount={400}
        baseSpeed={0.1}
        rangeSpeed={1.0}
        baseRadius={1}
        rangeRadius={1.5}
        className="flex items-center flex-col justify-center px-2 md:px-10 w-full h-full"
      >
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
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
      </Vortex>
    </section>
  );
}
