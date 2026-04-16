import { Address } from "@/components/Address";
import { Awards } from "@/components/Awards";
import { Benefits } from "@/components/Benefits";
import { ClientsCarousel } from "@/components/ClientsCarousel";
import { FAQ } from "@/components/FAQ";
import { Feedbacks } from "@/components/Feedbacks";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ParallaxBackground } from "@/components/ParallaxBackground";

const Index = () => {
  return (
    <main className="relative min-h-screen z-0">
      <ParallaxBackground />
      <Navbar />
      <Hero />
      <ClientsCarousel />
      <Benefits />
      <Feedbacks />
      <FAQ />
      <Awards />
      <Address />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
