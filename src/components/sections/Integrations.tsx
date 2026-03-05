"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import VideoBackground from "@/components/ui/VideoBackground";
import SectionHeading from "@/components/ui/SectionHeading";

const partners = [
  "Figma",
  "Slack",
  "GitHub",
  "Notion",
  "Stripe",
  "Vercel",
  "AWS",
  "Linear",
];

export default function Integrations() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const floatY1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const floatY2 = useTransform(scrollYProgress, [0, 1], [40, -80]);
  const floatY3 = useTransform(scrollYProgress, [0, 1], [80, -40]);

  return (
    <section
      id="integrations"
      ref={sectionRef}
      className="relative py-28 md:py-36 min-h-[80vh] flex items-center overflow-hidden"
    >
      {/* Astronaut video background */}
      <VideoBackground src="/videos/astronaut.mp4" overlay={true} parallax={true} />

      {/* Extra overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-brand-charcoal/80 z-[1]" />

      {/* Floating UI elements */}
      <motion.div
        style={{ y: floatY1 }}
        className="absolute top-[15%] left-[8%] z-[2] hidden lg:block"
      >
        <div className="px-5 py-3 rounded-xl bg-white/[0.05] backdrop-blur-xl border border-white/10 text-xs font-gilroy text-white/60">
          <span className="text-brand-lime font-semibold">200+</span> integrations
        </div>
      </motion.div>

      <motion.div
        style={{ y: floatY2 }}
        className="absolute top-[25%] right-[10%] z-[2] hidden lg:block"
      >
        <div className="px-5 py-3 rounded-xl bg-white/[0.05] backdrop-blur-xl border border-white/10 text-xs font-gilroy text-white/60">
          Connected in <span className="text-brand-blue font-semibold">one click</span>
        </div>
      </motion.div>

      <motion.div
        style={{ y: floatY3 }}
        className="absolute bottom-[20%] left-[15%] z-[2] hidden lg:block"
      >
        <div className="px-5 py-3 rounded-xl bg-white/[0.05] backdrop-blur-xl border border-white/10 text-xs font-gilroy text-white/60">
          Real-time <span className="text-brand-lime font-semibold">sync</span>
        </div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
        <SectionHeading
          label="Integrations"
          title="Connects to your entire stack"
          subtitle="Seamlessly integrate with the tools you already use. One click setup, zero configuration."
        />

        {/* Partner logos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {partners.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -3 }}
              className="flex items-center justify-center h-16 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/[0.06] hover:border-white/15 hover:bg-white/[0.07] transition-colors duration-300 cursor-default"
            >
              <span className="font-gilroy font-medium text-sm text-white/40 hover:text-white/70 transition-colors duration-300">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
