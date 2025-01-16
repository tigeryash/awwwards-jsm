import "./App.css";
import About from "./components/About";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Story from "./components/Story";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="overflow-x-hidden relative w-screen min-h-screen bg-zinc-100">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
