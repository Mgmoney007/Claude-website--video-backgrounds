"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface VideoBackgroundProps {
  src: string;
  overlay?: boolean;
  parallax?: boolean;
  className?: string;
}

export default function VideoBackground({
  src,
  overlay = true,
  parallax = true,
  className = "",
}: VideoBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", parallax ? "15%" : "0%"]);

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-[-15%]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
      </motion.div>

      {overlay && (
        <>
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/70 via-brand-charcoal/50 to-brand-charcoal/90" />
          {/* Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(22,22,22,0.8)_100%)]" />
        </>
      )}
    </div>
  );
}
