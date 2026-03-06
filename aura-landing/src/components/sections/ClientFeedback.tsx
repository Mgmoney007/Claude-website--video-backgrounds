"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Vortex } from "@/components/ui/vortex";

export default function ClientFeedback() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  }, [isPlaying]);
  return (
    <section className="relative overflow-hidden h-[52rem] md:h-[56rem] bg-brand-charcoal">
      <Vortex
        backgroundColor="black"
        baseHue={220}
        rangeY={400}
        particleCount={500}
        baseSpeed={0.1}
        rangeSpeed={1.0}
        baseRadius={1.5}
        rangeRadius={2}
        className="flex items-center flex-col justify-center px-2 md:px-10 w-full h-full"
      >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          label="Feedback"
          title="Hear from our clients"
          subtitle="Real stories from real teams building with Aura."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          {/* Video testimonial glass container */}
          <div className="relative rounded-2xl overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            {/* Video area */}
            <div
              className="relative aspect-video bg-gradient-to-br from-brand-charcoal-light to-brand-charcoal flex items-center justify-center cursor-pointer"
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                src="/videos/astronaut.mp4"
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Play/Pause button overlay */}
              <AnimatePresence>
                {!isPlaying && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10"
                  >
                    <motion.button
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 rounded-full bg-brand-lime/20 backdrop-blur-md border border-brand-lime/30 flex items-center justify-center hover:bg-brand-lime/30 hover:shadow-[0_0_40px_rgba(210,248,1,0.2)] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime/50"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#D2F801"
                      >
                        <path d="M8 5v14l11-7L8 5z" />
                      </svg>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Ambient glow behind play button */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-40 h-40 bg-brand-lime/[0.06] rounded-full blur-[60px]" />
                </div>
              )}
            </div>

            {/* Caption area */}
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-lime/30 to-brand-blue/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-gilroy font-semibold text-white/80">
                    JK
                  </span>
                </div>
                <div>
                  <p className="font-gilroy font-semibold text-brand-white mb-1">
                    James Kim
                  </p>
                  <p className="text-sm font-gilroy text-white/40 mb-3">
                    Head of Product, Helios Inc.
                  </p>
                  <p className="text-sm font-gilroy text-white/55 leading-[1.7]">
                    &ldquo;Aura saved us hundreds of engineering hours. We launched our entire product suite
                    in under two weeks — something that would have taken us a quarter with our old workflow.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      </Vortex>
    </section>
  );
}
