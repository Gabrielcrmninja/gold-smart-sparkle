import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import iphone from "@/assets/iphone-hero.png";

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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs tracking-[0.3em] uppercase text-primary mb-6">
            <Sparkles size={14} className="text-primary" />
            iPhones
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-6">
            <span className="block text-foreground">Novos &amp;</span>
            <span className="block text-gradient-gold animate-shimmer bg-clip-text">Seminovos</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Aparelhos com <span className="text-foreground font-medium">garantia estendida</span>,
            diversos brindes exclusivos e parcelamento nas{" "}
            <span className="text-primary font-medium">melhores condições</span> do mercado.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-gold text-primary-foreground font-semibold shadow-gold hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
            >
              Chamar no WhatsApp
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#beneficios"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-border text-foreground hover:border-primary/60 hover:text-primary transition-all"
            >
              Ver benefícios
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

        <div className="relative h-[420px] sm:h-[520px] lg:h-[640px]">
          {/* Radial backdrop */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.35),transparent_60%)]" />
          {/* Floating ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square rounded-full border border-primary/20 animate-glow-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] aspect-square rounded-full border border-primary/30" />

          <img
            src={iphone}
            alt="iPhone 17 Pro Max laranja"
            width={1024}
            height={1024}
            className="relative z-10 w-full h-full object-contain animate-float drop-shadow-[0_40px_60px_hsl(43_74%_52%/0.35)]"
          />

          {/* Floating badges */}
          <div className="absolute top-8 right-2 sm:right-8 glass-card rounded-2xl px-4 py-3 animate-float-slow shadow-elegant">
            <div className="text-[10px] tracking-widest text-muted-foreground uppercase">Lançamento</div>
            <div className="font-display text-lg text-gradient-gold">iPhone 17</div>
          </div>
          <div
            className="absolute bottom-12 left-2 sm:left-4 glass-card rounded-2xl px-4 py-3 animate-float-slow shadow-elegant"
            style={{ animationDelay: "1s" }}
          >
            <div className="text-[10px] tracking-widest text-muted-foreground uppercase">Em até</div>
            <div className="font-display text-lg text-gradient-gold">12x sem juros</div>
          </div>
        </div>
      </div>
    </section>
  );
};
