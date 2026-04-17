import { Address } from "@/components/Address";
import { Awards } from "@/components/Awards";
import { Benefits } from "@/components/Benefits";
import { ClientsCarousel } from "@/components/ClientsCarousel";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { FAQ } from "@/components/FAQ";
import { Feedbacks } from "@/components/Feedbacks";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      <CursorSpotlight />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Awards />
        <Benefits />
        <Feedbacks />
        <ClientsCarousel />
        <FAQ />
        <Address />
        <Footer />
      </div>
      <FloatingWhatsApp />
    </main>
      <Awards />
      <Benefits />
      <Feedbacks />
      <ClientsCarousel />
      <FAQ />
      <Address />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
