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

<section className="mt-10 md:mt-16">

<Metrics />

</section>

</ScrollReveal>



{/* DASHBOARD PREVIEW */}

<ScrollReveal>

<section className="mt-16 md:mt-24">

<DashboardPreview />

</section>

</ScrollReveal>



{/* FEATURES */}

<ScrollReveal>

<section className="mt-16 md:mt-24">

<Features />

</section>

</ScrollReveal>



{/* TRUSTED */}

<section className="mt-12 md:mt-20">

  <Trusted />

</section>



{/* TECHNOLOGY MARQUEE */}

<ScrollReveal>

<section className="mt-12">

  <TechMarquee />

</section>

</ScrollReveal>


{/* TESTIMONIALS */}

<ScrollReveal>

<section className="mt-16 md:mt-24">

<Testimonials />

</section>

</ScrollReveal>



{/* CTA */}

<ScrollReveal>

<section className="mt-16 md:mt-24">

<CTA />

</section>

</ScrollReveal>



</div>

);

}