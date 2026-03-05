"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const posts = [
  {
    category: "Product",
    title: "Introducing Aura 2.0: A new era of web design",
    excerpt:
      "Our biggest release yet brings AI-powered layouts, real-time collaboration, and 300% faster builds.",
    date: "Mar 1, 2025",
    readTime: "5 min read",
  },
  {
    category: "Engineering",
    title: "How we achieved sub-50ms load times globally",
    excerpt:
      "A deep dive into our edge infrastructure, intelligent caching, and the architecture behind Aura's speed.",
    date: "Feb 22, 2025",
    readTime: "8 min read",
  },
  {
    category: "Design",
    title: "The death of generic templates",
    excerpt:
      "Why every website should feel custom-built, and how AI is making personalized design accessible to everyone.",
    date: "Feb 15, 2025",
    readTime: "4 min read",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-brand-lime/[0.02] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          label="Blog"
          title="Latest from the team"
          subtitle="Insights on design, engineering, and the future of the web."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <GlassCard key={i} delay={i * 0.1} className="overflow-hidden">
              <div className="relative z-10">
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-br from-brand-charcoal-light to-brand-charcoal-lighter relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-lime/[0.04] to-brand-blue/[0.04] mix-blend-multiply" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 text-[10px] font-gilroy font-semibold tracking-[0.15em] uppercase text-brand-lime bg-brand-lime/10 border border-brand-lime/20 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-clash font-semibold text-base text-brand-white mb-3 leading-tight tracking-tight group-hover:text-brand-lime transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-sm font-gilroy text-white/40 leading-[1.7] mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-[11px] font-gilroy text-white/25">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
