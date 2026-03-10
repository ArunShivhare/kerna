import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import HowWeWork from "./components/HowWeWork";
import WhyChoose from "./components/WhyChoose";
import WorkPreview from "./components/WorkPreview";
import CareersPreview from "./components/CareersPreview";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <HowWeWork />
      <WhyChoose />
      <WorkPreview />
      <CareersPreview />
      <ContactSection />
    </>
  );
}
