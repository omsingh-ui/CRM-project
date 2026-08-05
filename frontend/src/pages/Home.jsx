import Hero from "../components/Hero";
import DashboardPreview from "../components/DashboardPreview";
import Features from "../components/Features";
import Trusted from "../components/Trusted";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
import Metrics from "../components/Metrics";
import ScrollReveal from "../components/ScrollReveal";
import TechMarquee from "../components/TechMarquee";

export default function Home(){

return (

<div
className="
bg-gradient-to-b
from-blue-50
to-white
dark:from-zinc-950
dark:to-zinc-950
transition
min-h-screen
overflow-x-hidden
"
>


{/* HERO */}

<section className="pt-10 md:pt-16">

<Hero />

</section>



{/* METRICS */}

<ScrollReveal>

<section  className="border-t border-slate-200 dark:border-zinc-800 pt-2">

<Metrics />

</section>

</ScrollReveal>



{/* DASHBOARD PREVIEW */}

<ScrollReveal>

<section className="border-t border-slate-200 dark:border-zinc-800 pt-2">

<DashboardPreview />

</section>

</ScrollReveal>



{/* FEATURES */}

<ScrollReveal>

<section className="border-t border-slate-200 dark:border-zinc-800 pt-2">

<Features />

</section>

</ScrollReveal>



{/* TRUSTED */}

<section  className="border-t border-slate-200 dark:border-zinc-800 pt-2">

  <Trusted />

</section>



{/* TECHNOLOGY MARQUEE */}

<ScrollReveal>

<section className="border-t border-slate-200 dark:border-zinc-800 pt-2">

  <TechMarquee />

</section>

</ScrollReveal>


{/* TESTIMONIALS */}

<ScrollReveal>

<section className="border-t border-slate-200 dark:border-zinc-800 pt-2">

<Testimonials />

</section>

</ScrollReveal>



{/* CTA */}

<ScrollReveal>

<section className="border-t border-slate-200 dark:border-zinc-800 pt-2">

<CTA />

</section>

</ScrollReveal>



</div>

);

}