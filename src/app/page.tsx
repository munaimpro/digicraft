import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import Process from "@/components/home/Process";

export default function Home() {
  return (
      <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100 selection:bg-amber-500/20">
        {/* Hero banner with slider */}
        <Hero />

        {/* 1. Directory Categories */}
        <Categories />

        {/* 2. Operational Flow (How it Works) */}
        <Process />

        {/* 3. Featured products */}
        <FeaturedProducts />

        {/* 4. Statistics counter matrix */}
        <Statistics />

        {/* 5. Quality Standards (Why choose us) */}
        <Standards />

        {/* 6. Vetted developer reviews and testimonials */}
        <Testimonials />

        {/* 7. Accordion expandable FAQ list */}
        <FAQ />

        {/* 8. Newsletter box drop subscription */}
        <Newsletter />
      </div>
    );
}
