import Card from './components/Card'

function App() {
  return (
    <main className="app">
      <h1 className="app-title">CineSpoilerS 🎬</h1>

      <section className="cards-container">
        <Card
          title="Adriana Chinchayhuara"
          description="Frontend Developer"
        />

        <Card
          title="CineSpoilerS"
          description="E-commerce de tickets de cine"
        />
      </section>
    </main>
  )
}

export default App