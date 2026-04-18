import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import iphone from "@/assets/iphone-hero.png";
import newLogo from "@/assets/logo-gold.png";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-primary-glow/10 blur-[140px]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div className="animate-fade-up">

          {/* Logo Principal: Ajustada para ficar maior e bem alinhada */}
          {/* Logo Principal - Ajuste Premium */}
          <div className="mb-2 animate-fade-up">
            <img
              src={newLogo}
              alt="Go Id! SmartPhones"
              className="w-40 sm:w-52 md:w-60 object-contain drop-shadow-xl -ml-2"
            />
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6">
            <span className="block text-foreground">Novos &amp;</span>
            <span className="inline-block text-gradient-gold animate-shimmer bg-clip-text pb-3 pr-4">Seminovos</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Aparelhos com <span className="text-foreground font-medium">garantia estendida</span>,
            diversos brindes exclusivos e parcelamento nas{" "}
            <span className="text-primary font-medium">melhores condições</span> do mercado.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="https://wa.me/33984185744"
              target="_blank"
              rel="noopener noreferrer"
              className="font-action group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-gold text-primary-foreground font-semibold shadow-gold hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
            >
              Chamar no WhatsApp
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <ShieldCheck size={16} className="text-primary" />
              Garantia estendida
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Sparkles size={16} className="text-primary" />
              Brindes exclusivos
            </div>
          </div>
        </div>

        {/* Lado do iPhone */}
        <div className="relative h-[420px] sm:h-[520px] lg:h-[640px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.35),transparent_60%)]" />
          <img
            src={iphone}
            alt="iPhone"
            className="relative z-10 w-[90%] h-[90%] mx-auto object-contain animate-float"
          />
        </div>
      </div>
    </section>
  );
};