import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import HowWeWork from "./components/HowWeWork";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <HowWeWork />
    </>
  );
}
