import AboutContent from "@/components/about/AboutContent";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-1 bg-zinc-950 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AboutContent />
        </div>
      </main>

    </div>
  );
}

export default AboutPage;