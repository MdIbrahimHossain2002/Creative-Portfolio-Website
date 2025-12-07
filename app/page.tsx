import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import TailwindCSS from "./components/TailwindCSS";
import Development from "./components/Development";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <TailwindCSS />
      <Development/>
      <Footer />
    </div>
  );
}
