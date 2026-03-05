"use client";

import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import Features from "@/components/sections/Features";
import Integrations from "@/components/sections/Integrations";
import ModularFeatures from "@/components/sections/ModularFeatures";
import ProductPreview from "@/components/sections/ProductPreview";
import ClientFeedback from "@/components/sections/ClientFeedback";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Blog from "@/components/sections/Blog";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Integrations />
        <ModularFeatures />
        <ProductPreview />
        <ClientFeedback />
        <Pricing />
        <FAQ />
        <Blog />
        <FinalCTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
