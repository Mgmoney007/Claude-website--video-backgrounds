"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import VideoBackground from "@/components/ui/VideoBackground";
import Button from "@/components/ui/Button";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouse = useMouseParallax(0.015);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const headlineY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video background with parallax */}
      <motion.div style={{ scale: bgScale }} className="absolute inset-0">
        <VideoBackground src="/videos/hero-globe.mp4" overlay={true} parallax={false} />
      </motion.div>

      {/* Ambient gradient layer - mouse reactive */}
      <motion.div
        style={{
          x: mouse.x * 2,
          y: mouse.y * 2,
        }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Lime glow top-left */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-brand-lime/[0.04] rounded-full blur-[120px]" />
        {/* Blue glow bottom-right */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-blue/[0.06] rounded-full blur-[100px]" />
      </motion.div>

      {/* Diffused spotlight behind headline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-lime/[0.03] rounded-full blur-[150px] animate-glow-pulse" />

      {/* Content */}
      <motion.div
        style={{ y: headlineY, opacity: headlineOpacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-gilroy font-medium tracking-[0.15em] uppercase text-brand-lime/80 bg-brand-lime/[0.06] border border-brand-lime/15 rounded-full backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-glow-pulse" />
            Now in public beta
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="font-clash font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] text-brand-white leading-[1.05] tracking-[-0.03em] mb-7"
        >
          Turn your big idea
          <br />
          into a{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-brand-lime">stunning</span>
            <span className="absolute bottom-1 left-0 right-0 h-[0.12em] bg-brand-lime/30 rounded-full" />
          </span>{" "}
          website
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-xl mx-auto text-base md:text-lg text-white/45 font-gilroy leading-[1.7] mb-10"
        >
          The all-in-one platform that transforms your vision into pixel-perfect
          digital experiences. Design, build, and launch — faster than ever.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="primary" size="lg">
            Get Started Now
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
            See How
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border border-white/20 rounded-full mx-auto flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-2.5 bg-brand-lime/60 rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
