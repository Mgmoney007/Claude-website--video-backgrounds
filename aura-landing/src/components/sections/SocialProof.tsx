"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "Aura completely transformed how we approach web design. The speed and quality are unmatched.",
    name: "Sarah Chen",
    role: "CEO, Quantum Labs",
    avatar: "SC",
  },
  {
    quote:
      "We shipped our new marketing site in 3 days instead of 3 months. The results speak for themselves.",
    name: "Marcus Webb",
    role: "CTO, NovaTech",
    avatar: "MW",
  },
  {
    quote:
      "The design quality rivals what we used to pay agencies $50k for. An absolute game-changer.",
    name: "Elena Vasquez",
    role: "VP Design, Meridian",
    avatar: "EV",
  },
];

const stats = [
  { value: "4.7", label: "Average Rating", suffix: "/5" },
  { value: "94", label: "Satisfaction Rate", suffix: "%" },
  { value: "10k", label: "Sites Launched", suffix: "+" },
  { value: "50", label: "Avg. Build Time", suffix: "ms" },
];

export default function SocialProof() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-blue/[0.04] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          label="Social Proof"
          title="Trusted by forward-thinking teams"
          subtitle="Join thousands of companies building beautiful websites with Aura."
        />

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {testimonials.map((t, i) => (
            <GlassCard key={i} delay={i * 0.1} className="p-7 md:p-8">
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="#D2F801"
                    >
                      <path d="M8 0l2.47 4.93L16 5.77l-4 3.83.94 5.4L8 12.47 3.06 15l.94-5.4-4-3.83 5.53-.84L8 0z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/70 font-gilroy text-sm leading-[1.7] mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-lime/30 to-brand-blue/30 flex items-center justify-center text-xs font-gilroy font-semibold text-white/80">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-gilroy font-semibold text-white/90">
                      {t.name}
                    </p>
                    <p className="text-xs font-gilroy text-white/40">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center py-8 px-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]"
            >
              <div className="font-clash font-semibold text-3xl md:text-4xl text-brand-white tracking-tight">
                {stat.value}
                <span className="text-brand-lime">{stat.suffix}</span>
              </div>
              <p className="mt-2 text-sm font-gilroy text-white/40">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
