"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

/* ── Integration definitions ── */
const integrations: {
  name: string;
  ring: number;
  startAngle: number;
  icon: JSX.Element;
}[] = [
  {
    name: "Figma",
    ring: 0,
    startAngle: 0,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2H8.5A3.5 3.5 0 005 5.5v0A3.5 3.5 0 008.5 9H12V2z" fill="#F24E1E" />
        <path d="M12 2h3.5A3.5 3.5 0 0119 5.5v0A3.5 3.5 0 0115.5 9H12V2z" fill="#FF7262" />
        <path d="M12 9h3.5a3.5 3.5 0 010 7H12V9z" fill="#1ABCFE" />
        <path d="M5 19.5A3.5 3.5 0 018.5 16H12v3.5a3.5 3.5 0 01-7 0z" fill="#0ACF83" />
        <path d="M5 12.5A3.5 3.5 0 018.5 9H12v7H8.5A3.5 3.5 0 015 12.5z" fill="#A259FF" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    ring: 0,
    startAngle: 120,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-white">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21.5c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    ring: 0,
    startAngle: 240,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
        <path d="M12 2L2 19.5h20L12 2z" />
      </svg>
    ),
  },
  {
    name: "Slack",
    ring: 1,
    startAngle: 30,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M6 15a2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2h2v2zM7 15a2 2 0 012-2 2 2 0 012 2v5a2 2 0 01-2 2 2 2 0 01-2-2v-5z" fill="#E01E5A" />
        <path d="M9 6a2 2 0 01-2-2 2 2 0 012-2 2 2 0 012 2v2H9zM9 7a2 2 0 012 2 2 2 0 01-2 2H4a2 2 0 01-2-2 2 2 0 012-2h5z" fill="#36C5F0" />
        <path d="M18 9a2 2 0 012-2 2 2 0 012 2 2 2 0 01-2 2h-2V9zM17 9a2 2 0 01-2 2 2 2 0 01-2-2V4a2 2 0 012-2 2 2 0 012 2v5z" fill="#2EB67D" />
        <path d="M15 18a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2v-2h2zM15 17a2 2 0 01-2-2 2 2 0 012-2h5a2 2 0 012 2 2 2 0 01-2 2h-5z" fill="#ECB22E" />
      </svg>
    ),
  },
  {
    name: "Stripe",
    ring: 1,
    startAngle: 150,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.92 3.757 7.17c0 4.04 2.484 5.79 6.521 7.241 2.58 1.007 3.477 1.735 3.477 2.813 0 .993-.81 1.587-2.34 1.587-1.862 0-4.832-.89-6.978-2.121l-.893 5.523C5.377 23.254 8.24 24 11.698 24c2.614 0 4.738-.624 6.282-1.844 1.7-1.337 2.534-3.26 2.534-5.725 0-4.13-2.54-5.853-6.538-7.281z" fill="#635BFF" />
      </svg>
    ),
  },
  {
    name: "AWS",
    ring: 1,
    startAngle: 270,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6.763 10.036a4.584 4.584 0 00.041.738c.028.135.063.27.104.403.013.042.02.083.02.118 0 .056-.028.111-.09.167l-.298.194a.232.232 0 01-.125.041c-.049 0-.097-.02-.146-.063a1.481 1.481 0 01-.174-.222 3.32 3.32 0 01-.146-.278c-.37.438-.834.656-1.39.656-.398 0-.714-.111-.952-.34-.237-.227-.357-.528-.357-.91 0-.402.146-.729.44-.976.293-.25.681-.375 1.174-.375.16 0 .328.013.503.035.174.021.355.056.54.097v-.347c0-.36-.076-.611-.222-.759-.152-.146-.41-.222-.786-.222-.167 0-.34.021-.52.063a3.857 3.857 0 00-.52.16 1.12 1.12 0 01-.14.063.244.244 0 01-.104.02c-.09 0-.132-.062-.132-.194v-.215c0-.097.014-.173.049-.215a.567.567 0 01.194-.118c.174-.083.383-.153.627-.208A3.38 3.38 0 015.86 7.56c.57 0 .988.125 1.258.382.265.25.398.633.398 1.146v1.507l-.003.001h.25z" fill="#F90" />
        <path d="M21.375 13.535c-2.776 1.632-6.802 2.499-10.265 2.499-4.858 0-9.232-1.797-12.54-4.787-.26-.235-.028-.556.285-.373 3.572 2.078 7.99 3.327 12.553 3.327 3.078 0 6.462-.638 9.576-1.96.47-.2.863.308.391.594v-.3z" fill="#F90" />
        <path d="M22.578 12.132c-.36-.46-2.373-.218-3.278-.11-.275.034-.317-.207-.07-.38 1.607-1.13 4.242-.803 4.55-.425.306.382-.085 3.016-1.588 4.275-.23.194-.45.09-.348-.166.338-.842 1.096-2.733.734-3.194z" fill="#F90" />
      </svg>
    ),
  },
  {
    name: "Notion",
    ring: 2,
    startAngle: 10,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-white">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L18.11 2.168c-.42-.326-.98-.7-2.055-.607L3.01 2.635c-.466.046-.56.28-.374.466l1.823 1.107zm.793 3.358v13.906c0 .747.373 1.027 1.214.98l14.523-.84c.84-.046.933-.56.933-1.167V6.633c0-.606-.233-.933-.746-.886l-15.177.886c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.886l-.7.14v10.264c-.607.327-1.166.514-1.633.514-.746 0-.933-.234-1.493-.933l-4.571-7.178v6.952l1.446.327s0 .84-1.166.84l-3.218.187c-.093-.187 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.451-.233 4.758 7.271v-6.44l-1.213-.14c-.094-.514.28-.886.747-.933l3.218-.187z" />
      </svg>
    ),
  },
  {
    name: "Linear",
    ring: 2,
    startAngle: 190,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3.357 12.253a.75.75 0 01-.001-1.06l8.19-8.196a.75.75 0 011.061 0l8.196 8.195a.75.75 0 010 1.061l-8.195 8.196a.75.75 0 01-1.061 0l-8.19-8.196z" fill="#5E6AD2" />
      </svg>
    ),
  },
];

/*
  Ring config:
  - radiusPct: how far out (% of half-container) — 50 = edge
  - duration: seconds per orbit
  - reverse: spin direction
*/
const rings = [
  { radiusPct: 19, duration: 55, reverse: false },
  { radiusPct: 32, duration: 75, reverse: true },
  { radiusPct: 45, duration: 95, reverse: false },
];

const springEase = [0.23, 1, 0.32, 1] as const;

export default function Integrations() {
  return (
    <section
      id="integrations"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* ── Cinematic background glow ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-brand-blue/[0.06] blur-[200px]" />
        <div className="absolute top-[35%] left-[25%] w-[500px] h-[500px] rounded-full bg-brand-lime/[0.04] blur-[160px]" />
        <div className="absolute top-[65%] right-[20%] w-[400px] h-[400px] rounded-full bg-brand-blue/[0.03] blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
        {/* ── Section heading ── */}
        <SectionHeading
          label="Integrations"
          title="Connects to your entire stack"
          subtitle="Seamlessly integrate with the tools you already use. One click setup, zero configuration."
        />

        {/* ── Orbital system ── */}
        <div className="flex justify-center mt-12 md:mt-20">
          <div className="orbital-container relative w-[90vw] max-w-[860px] aspect-square">
            {/* ── SVG dashed rings ── */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              {rings.map((ring, i) => (
                <motion.circle
                  key={`ring-${i}`}
                  cx="50"
                  cy="50"
                  r={ring.radiusPct}
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="0.12"
                  strokeDasharray="0.5 0.8"
                  fill="none"
                  initial={{ opacity: 0, pathLength: 0 }}
                  whileInView={{ opacity: 1, pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.2 * i },
                    pathLength: {
                      duration: 1.8,
                      delay: 0.2 * i,
                      ease: "easeOut",
                    },
                  }}
                />
              ))}
            </svg>

            {/* ── Center Aura logo ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: springEase }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
            >
              <div className="absolute -inset-4 rounded-full bg-white/[0.03] animate-[pulse_4s_ease-in-out_infinite]" />
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-white flex items-center justify-center shadow-[0_0_80px_rgba(210,248,1,0.15),0_0_160px_rgba(3,103,252,0.08)]">
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M16 4L19 13L28 16L19 19L16 28L13 19L4 16L13 13L16 4Z"
                    fill="#161616"
                  />
                </svg>
              </div>
            </motion.div>

            {/* ── Orbiting icons ── */}
            {integrations.map((item, i) => {
              const ring = rings[item.ring];
              const delayOffset = -(item.startAngle / 360) * ring.duration;

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                  className="absolute top-1/2 left-1/2 z-20"
                  style={{ width: 0, height: 0 }}
                >
                  {/*
                    Orbit wrapper: sits at center, rotates 360°.
                    Uses a pseudo-arm via a child translated outward.
                  */}
                  <div
                    style={{
                      animation: `orbit-spin ${ring.duration}s linear infinite ${ring.reverse ? "reverse" : "normal"}`,
                      animationDelay: `${delayOffset}s`,
                    }}
                  >
                    {/*
                      Arm: pushes icon outward from center.
                      The % is relative to the parent, but since parent is 0-width,
                      we use the container's known size via a negative margin trick:
                      position the icon at (0, -radius) then let orbit-spin rotate it.
                      We express the radius in the same % units as the SVG viewBox.
                    */}
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        /*
                          The orbit container is w-[90vw] max-w-[860px].
                          radius = radiusPct% of that width.
                          We translate upward by that amount.
                        */
                        transform: `translateY(-${ring.radiusPct}cqi)`,
                      }}
                    >
                      {/* Counter-rotate to keep icon upright */}
                      <div
                        className="group"
                        style={{
                          animation: `orbit-spin ${ring.duration}s linear infinite ${ring.reverse ? "normal" : "reverse"}`,
                          animationDelay: `${delayOffset}s`,
                        }}
                      >
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-brand-charcoal-light/90 backdrop-blur-sm border border-white/[0.1] flex items-center justify-center hover:border-brand-lime/30 hover:shadow-[0_0_30px_rgba(210,248,1,0.1)] transition-all duration-300 cursor-default shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
                          {item.icon}
                        </div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                          <span className="text-[11px] font-gilroy font-medium text-white/40 whitespace-nowrap">
                            {item.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
