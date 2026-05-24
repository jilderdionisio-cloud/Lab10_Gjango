import Card from "@/components/Card";

function App() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-20 text-center text-6xl font-black tracking-wide text-white">
          Cine<span className="text-red-500">SpoilerS</span> 🎬
        </h1>

        <section className="flex flex-wrap justify-center gap-8">
          <Card
            title="Naomi Veliz"
            description="Frontend Developer"
          />

          <Card
            title="CineSpoilerS"
            description="E-commerce de tickets de cine"
          />

          <Card
            title="Estrenos 2026"
            description="Compra tickets para los mejores estrenos"
          />
        </section>
      </div>
    </main>
  );
}

export default App;