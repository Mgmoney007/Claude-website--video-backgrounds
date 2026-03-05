"use client";

import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";

const modules = [
  {
    title: "Smart Components",
    description: "Pre-built, customizable components that adapt to your brand automatically.",
    color: "lime",
  },
  {
    title: "Version Control",
    description: "Track every change with built-in versioning. Roll back in one click.",
    color: "blue",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time visitor analytics with conversion tracking and heat maps.",
    color: "lime",
  },
  {
    title: "Custom Domains",
    description: "Connect your own domain with automatic SSL. Zero configuration required.",
    color: "blue",
  },
  {
    title: "Form Builder",
    description: "Create forms with validation, file uploads, and webhook integrations.",
    color: "lime",
  },
  {
    title: "SEO Optimizer",
    description: "Automatic meta tags, sitemaps, and structured data for maximum visibility.",
    color: "blue",
  },
];

export default function ModularFeatures() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-blue/[0.03] rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          label="Modules"
          title="Modular by design"
          subtitle="Pick the capabilities you need. Each module works independently and together."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((mod, i) => (
            <GlassCard key={i} delay={i * 0.08} className="p-7 md:p-8">
              <div className="relative z-10">
                {/* Color indicator */}
                <div
                  className={`w-8 h-1 rounded-full mb-6 ${
                    mod.color === "lime" ? "bg-brand-lime" : "bg-brand-blue"
                  }`}
                />
                <h3 className="font-clash font-semibold text-lg text-brand-white mb-3 tracking-tight">
                  {mod.title}
                </h3>
                <p className="text-sm font-gilroy text-white/45 leading-[1.7]">
                  {mod.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
