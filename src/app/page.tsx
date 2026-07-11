import Hero from "@/components/home/Hero";

export default function Home() {
  return (
      <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100 selection:bg-amber-500/20">
        {/* Hero Carousal */}
        <Hero></Hero>
        
      </div>
    );
}
