import Hero from "../components/Hero";
import DashboardPreview from "../components/DashboardPreview";
import Features from "../components/Features";
import Trusted from "../components/Trusted";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
import Metrics from "../components/Metrics";
import ScrollReveal from "../components/ScrollReveal";
import TechMarquee from "../components/TechMarquee";

export default function Home() {
  return (
    <div
      className="
      bg-gradient-to-b
      from-blue-50
      via-white
      to-white
      dark:from-zinc-950
      dark:via-zinc-950
      dark:to-zinc-950
      min-h-screen
      overflow-x-hidden
      transition-colors
      duration-300
      "
    >
      {/* HERO */}
      <section className="pt-10 md:pt-16">
        <Hero />
      </section>

     

      {/* DASHBOARD PREVIEW */}
<ScrollReveal
  duration={0.45}
  distance={0}
  scale={1}
>
  <section className="border-t border-slate-200 dark:border-zinc-800">
    <DashboardPreview />
  </section>
</ScrollReveal>

       {/* METRICS */}
      <ScrollReveal
        duration={0.6}
        distance={15}
      >
        <section className="border-t border-slate-200 dark:border-zinc-800">
          <Metrics />
        </section>
      </ScrollReveal>

      {/* FEATURES */}
      <section className="border-t border-slate-200 dark:border-zinc-800">
        <Features />
      </section>

      {/* TRUSTED */}
      <ScrollReveal
        duration={0.7}
        distance={20}
      >
        <section className="border-t border-slate-200 dark:border-zinc-800">
          <Trusted />
        </section>
      </ScrollReveal>

      {/* TECHNOLOGY */}
      <ScrollReveal
        duration={0.8}
        distance={15}
      >
        <section className="border-t border-slate-200 dark:border-zinc-800">
          <TechMarquee />
        </section>
      </ScrollReveal>

      {/* TESTIMONIALS */}
      <section className="border-t border-slate-200 dark:border-zinc-800">
        <Testimonials />
      </section>

      {/* CTA */}
      <ScrollReveal
        duration={1}
        distance={60}
      >
        <section className="border-t border-slate-200 dark:border-zinc-800">
          <CTA />
        </section>
      </ScrollReveal>
    </div>
  );
}