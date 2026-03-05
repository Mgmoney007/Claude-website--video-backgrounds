"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "How does Aura differ from other website builders?",
    answer:
      "Aura combines the simplicity of no-code builders with the power of a professional development environment. Our AI-assisted design system ensures every site looks custom-built, not templated.",
  },
  {
    question: "Can I use my own domain?",
    answer:
      "Absolutely. Connect your custom domain with one click. We automatically provision SSL certificates and handle all DNS configuration for you.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes, you can start building for free with our Starter plan. No credit card required. When you're ready to scale, upgrade seamlessly with zero downtime.",
  },
  {
    question: "How fast are Aura-built websites?",
    answer:
      "Extremely fast. Every Aura site is deployed to our global edge network with sub-50ms load times. We automatically optimize images, code-split, and cache at every layer.",
  },
  {
    question: "Do you offer team collaboration?",
    answer:
      "Yes, our Enterprise plan includes real-time multiplayer editing, role-based permissions, commenting, and approval workflows for teams of any size.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-blue/[0.03] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8">
        <SectionHeading
          label="FAQ"
          title="Frequently asked questions"
          subtitle="Everything you need to know about getting started with Aura."
        />

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-xl bg-white/[0.03] border border-white/[0.06] overflow-hidden hover:border-white/10 transition-colors duration-300"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
                className="w-full flex items-center justify-between px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime/50 focus-visible:ring-inset rounded-xl"
              >
                <span className="font-gilroy font-medium text-sm text-brand-white pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="flex-shrink-0 w-6 h-6 rounded-full bg-white/[0.06] flex items-center justify-center"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <path d="M6 1v10M1 6h10" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
                      opacity: { duration: 0.3 },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <p className="text-sm font-gilroy text-white/45 leading-[1.7]">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
