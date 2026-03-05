"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "For individuals and small projects.",
    features: [
      "Up to 5 projects",
      "Custom domains",
      "Basic analytics",
      "Community support",
      "SSL certificates",
    ],
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For teams building at scale.",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support 24/7",
      "Team collaboration",
      "Custom integrations",
      "SLA guarantee",
    ],
    highlighted: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 md:py-36 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-lime/[0.025] rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          label="Pricing"
          title="Simple, transparent pricing"
          subtitle="No hidden fees. No surprises. Start building for free, upgrade when you're ready."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className={`relative rounded-2xl p-8 md:p-10 transition-all duration-500 group ${
                plan.highlighted
                  ? "bg-brand-lime text-brand-charcoal shadow-[0_0_60px_rgba(210,248,1,0.15)]"
                  : "bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:border-white/15 hover:shadow-[0_0_40px_rgba(210,248,1,0.06)]"
              }`}
            >
              {/* Highlighted badge */}
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 text-[10px] font-gilroy font-bold tracking-[0.2em] uppercase bg-brand-charcoal text-brand-lime rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3
                  className={`font-clash font-semibold text-lg mb-2 ${
                    plan.highlighted ? "text-brand-charcoal" : "text-brand-white"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm font-gilroy mb-5 ${
                    plan.highlighted
                      ? "text-brand-charcoal/60"
                      : "text-white/40"
                  }`}
                >
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`font-clash font-semibold text-5xl tracking-tight ${
                      plan.highlighted
                        ? "text-brand-charcoal"
                        : "text-brand-white"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm font-gilroy ${
                      plan.highlighted
                        ? "text-brand-charcoal/50"
                        : "text-white/30"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-10">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={
                        plan.highlighted
                          ? "text-brand-charcoal"
                          : "text-brand-lime"
                      }
                    >
                      <path
                        d="M4 8l3 3 5-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      className={`text-sm font-gilroy ${
                        plan.highlighted
                          ? "text-brand-charcoal/70"
                          : "text-white/55"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.highlighted ? (
                <button className="w-full py-3.5 rounded-full font-gilroy font-semibold text-sm bg-brand-charcoal text-brand-lime hover:bg-brand-charcoal/90 hover:shadow-[0_0_20px_rgba(22,22,22,0.5)] transition-all duration-300 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal/50">
                  Get Started
                </button>
              ) : (
                <Button variant="secondary" className="w-full justify-center">
                  Get Started
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
