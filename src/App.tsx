import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <main className="h-screen bg-primary overflow-hidden text-primary-text w-full relative">
      <Header/>
      <Hero />
    </main>
  );
}

export default App;
