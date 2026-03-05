"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-gilroy font-semibold rounded-full overflow-hidden transition-transform duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime/50 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-charcoal";

  const sizeStyles = {
    md: "px-7 py-3 text-sm tracking-wide",
    lg: "px-10 py-4 text-base tracking-wide",
  };

  const variantStyles = {
    primary: `
      bg-brand-lime text-brand-charcoal
      hover:shadow-[0_0_30px_rgba(210,248,1,0.3),0_0_60px_rgba(210,248,1,0.1)]
      active:scale-[0.97]
    `,
    secondary: `
      bg-white/[0.06] text-brand-white border border-white/[0.12]
      backdrop-blur-md
      hover:bg-white/[0.1] hover:border-white/20
      hover:shadow-[0_0_24px_rgba(255,255,255,0.05)]
      active:scale-[0.97]
    `,
    ghost: `
      text-brand-white/80 hover:text-brand-white
      hover:bg-white/[0.05]
      active:scale-[0.97]
    `,
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {/* Light sweep effect */}
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute top-[-50%] left-[-100%] w-[60%] h-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] opacity-0 group-hover:opacity-100 group-hover:left-[130%] transition-all duration-700" />
      </span>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
