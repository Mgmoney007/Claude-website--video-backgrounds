"use client";

import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D2F801" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M9 3v18M3 9h18" />
      </svg>
    ),
    title: "Visual Builder",
    description: "Drag and drop components into pixel-perfect layouts. No code required, full creative control.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D2F801" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Lightning Fast",
    description: "Sub-50ms load times with edge deployment. Your site is fast everywhere, for everyone.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D2F801" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10A15 15 0 0 1 12 2z" />
      </svg>
    ),
    title: "Global CDN",
    description: "Deployed to 200+ edge locations worldwide. Lightning response times from anywhere on Earth.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D2F801" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Enterprise Security",
    description: "SOC 2 compliant with end-to-end encryption. Your data is protected at every layer.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D2F801" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l1.912 5.813h6.111l-4.944 3.587 1.888 5.813L12 14.626l-4.967 3.587 1.888-5.813L3.977 8.813h6.111z" />
      </svg>
    ),
    title: "AI-Powered Design",
    description: "Intelligent suggestions that elevate your design. From color palettes to layout compositions.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D2F801" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Team Collaboration",
    description: "Real-time multiplayer editing with role-based permissions. Build together, ship faster.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-28 md:py-36 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-lime/[0.03] rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          label="Features"
          title="Everything you need to build"
          subtitle="A complete toolkit designed for teams who refuse to compromise on quality."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <GlassCard key={i} delay={i * 0.08} className="p-7 md:p-8">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-brand-lime/[0.08] border border-brand-lime/15 flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="font-clash font-semibold text-lg text-brand-white mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm font-gilroy text-white/45 leading-[1.7]">
                  {feature.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
