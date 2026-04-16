import { Trophy } from "lucide-react";
import p1 from "@/assets/premio-1.jpg";
import p2 from "@/assets/premio-2.jpg";

export const Awards = () => {
  return (
    <section id="premios" className="py-14 sm:py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full" />

      <div className="container relative">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs tracking-[0.3em] uppercase text-primary mb-4">
            <Trophy size={14} /> Premiação
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Reconhecimento e <span className="text-gradient-gold">Credibilidade</span>
          </h2>
          <p className="text-muted-foreground">
            Eleita Destaque do Ano 2025 — um reflexo do compromisso com excelência e do carinho dos nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
          {[p1, p2].map((src, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl gold-border shadow-elegant aspect-[3/4] sm:aspect-[4/5]"
            >
              <img
                src={src}
                alt={`Prêmio Destaque do Ano 2025 — Gold SmartPhones (${i + 1})`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8">
                <div className="text-xs tracking-widest uppercase text-primary mb-2">
                  Destaques do Ano · 2025
                </div>
                <div className="font-display text-2xl text-foreground">
                  Gold SmartPhones
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
