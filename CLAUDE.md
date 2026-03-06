# CLAUDE.md — Frontend Website Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- The main project is a **Next.js 14** app inside `aura-landing/`. Start the dev server: `cd aura-landing && npx next dev -p 3000`
- Dev server runs at `http://localhost:3000`
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- Puppeteer is installed at `C:/Users/nateh/AppData/Local/Temp/puppeteer-test/`. Chrome cache is at `C:/Users/nateh/.cache/puppeteer/`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Pick a custom brand color and derive from it.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color

---

## Current Project Architecture

### Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS (custom config)
- **Animation:** Framer Motion
- **Smooth Scroll:** @studio-freight/lenis
- **Fonts:** Clash Display (display/headings via Fontshare CDN), General Sans (body via Fontshare CDN)

### Brand System (from `brand_assets/Brand Guidelines- The Great Og.pdf`)
- **Brand Name:** Aura
- **Logo:** Sparkle/star icon in rounded square + "aura" wordmark
- **Vibrant Blue:** `#0367FC`
- **Click Lime:** `#D2F801` (primary accent)
- **Click White:** `#FFFFFF`
- **Black Charcoal:** `#161616` (primary background)
- **Display Font:** Clash Display (headings, bold/dramatic)
- **Body Font:** General Sans (closest free match to Gilroy)

### Directory Structure
```
aura-landing/                          # Next.js 14 project root
├── public/
│   └── videos/
│       ├── hero-globe.mp4             # Hero section background (globe)
│       └── astronaut.mp4             # Integrations section background
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Root layout (font CDN links, metadata)
│   │   ├── page.tsx                   # Main page — assembles all sections (client component)
│   │   ├── globals.css                # Global styles: CSS vars, noise texture, glass utilities, scrollbar, accordion, Lenis, orbit-spin keyframes
│   │   └── vortex-demo/
│   │       └── page.tsx               # Vortex effect demo page
│   ├── components/
│   │   ├── SmoothScroll.tsx           # Lenis smooth scroll provider wrapper
│   │   ├── layout/
│   │   │   ├── Navbar.tsx             # Sticky blur navbar + mobile hamburger menu (AnimatePresence)
│   │   │   └── Footer.tsx             # Dark footer: 4 link columns, social icons, bottom bar
│   │   ├── sections/
│   │   │   ├── Hero.tsx               # Full-screen hero: globe video bg, mouse-reactive parallax gradients, glow halo, scroll indicator
│   │   │   ├── SocialProof.tsx        # Testimonial cards (3) + stat cards (4) with scroll animations
│   │   │   ├── Features.tsx           # 6 glass feature cards in 3-col grid with SVG icons
│   │   │   ├── Integrations.tsx       # Orbital integrations: 7 concentric solid glowing rings (teal→blue→pink gradient), SVG glow filters, 9 orbiting icon tiles (Notion, Stripe, Vercel, GitHub, AWS, Slack, Figma, Shopify, Linear) with ring-colored borders, grid-centered Aura logo with layered lime glow, CSS grid background overlay, container query sizing
│   │   │   ├── ModularFeatures.tsx    # 6 module cards in 3-col grid with lime/blue color indicators
│   │   │   ├── ProductPreview.tsx     # Dashboard mockup: browser chrome, stats row, animated bar chart, floating status cards
│   │   │   ├── ClientFeedback.tsx     # Video testimonial block with play button and glass container
│   │   │   ├── Pricing.tsx            # 2 pricing cards (Starter $29, Enterprise $99 highlighted in lime)
│   │   │   ├── FAQ.tsx                # 5 accordion items with AnimatePresence expand/collapse
│   │   │   ├── Blog.tsx               # 3 blog cards with category badges and hover effects
│   │   │   └── FinalCTA.tsx           # Cinematic CTA: multi-layered glow bg, grid pattern, headline + buttons
│   │   └── ui/
│   │       ├── GlassCard.tsx          # Reusable glassmorphism card: backdrop-blur, rim light, hover glow/lift
│   │       ├── Button.tsx             # Primary (lime) / secondary (glass) / ghost variants with hover scale
│   │       ├── SectionHeading.tsx     # Reusable section header: label badge + h2 + subtitle with staggered animations
│   │       ├── VideoBackground.tsx    # Video element with autoplay/loop/muted + dark gradient overlay + vignette + parallax
│   │       └── vortex.tsx             # Vortex animation UI component
│   ├── lib/
│   │   └── utils.ts                   # Utility functions (cn classname merger)
│   └── hooks/
│       ├── useLenis.ts                # Custom hook: initializes Lenis smooth scroll with spring easing
│       └── useMouseParallax.ts        # Custom hook: tracks mouse position for parallax offset
├── tailwind.config.ts                 # Custom brand colors, font families, glow-pulse/float keyframes
├── next.config.mjs                    # Default Next.js config
├── tsconfig.json                      # TypeScript config with @/* path alias
└── package.json                       # Dependencies: next, react, framer-motion, @studio-freight/lenis
```

### Key Design Patterns
- **All section components** use Framer Motion `whileInView` for scroll-triggered animations with `once: true`
- **Glass cards** use `bg-white/[0.04] backdrop-blur-xl border-white/[0.08]` with hover states shifting to lime-tinted borders/shadows
- **Cinematic lighting** achieved via layered `blur-[120px]` gradient divs with low-opacity brand colors
- **Page composition:** `page.tsx` is a client component wrapping all sections inside `<SmoothScroll>` provider
- **Easing curve:** `[0.23, 1, 0.32, 1]` (spring-like) used consistently across all Framer Motion transitions
- **Noise texture:** SVG-based noise filter applied globally via `noise-bg` class on `<body>`
- **Section spacing:** Consistent `py-28 md:py-36` across all sections for luxurious whitespace
- **Orbital animation:** Integrations section uses CSS `orbit-spin` keyframes with container query units (`cqi`) for responsive radius. 7 rings total (3 main + 4 decorative) with SVG glow filters and teal→blue→pink color gradient. Icons counter-rotate to stay upright, have ring-colored borders, and each ring orbits at a different speed/direction. Center logo uses grid centering with layered lime glow halos. Background includes CSS grid overlay.

### Brand Assets Location
```
brand_assets/
├── Brand Guidelines- The Great Og.pdf   # Full brand guidelines (color palette, typography, logo specs)
├── Hero Video-black and white globe.mp4  # Copied to public/videos/hero-globe.mp4
└── Astronaut BR.mp4                      # Available but not currently used (Integrations section uses orbital animation instead)
```
