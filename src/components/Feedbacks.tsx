import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const feedbacks = [
  {
    name: "Mariana S.",
    text: "Atendimento impecável! Comprei meu iPhone 15 Pro com garantia estendida e ainda recebi vários brindes. Loja de confiança!",
    rating: 5,
  },
  {
    name: "Rafael L.",
    text: "Melhor preço da região e parcelamento sem complicação. Saí da loja com o aparelho na hora e super bem atendido.",
    rating: 5,
  },
  {
    name: "Juliana P.",
    text: "Já é a terceira vez que compro na Gold. Sempre produtos originais, com nota fiscal e equipe muito atenciosa.",
    rating: 5,
  },
  {
    name: "Lucas M.",
    text: "Comprei um seminovo e parecia novo de fábrica. Garantia de verdade, recomendo de olhos fechados!",
    rating: 5,
  },
];

export const Feedbacks = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="feedbacks" className="py-14 sm:py-22 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.08),transparent_50%)]" />

      <div className="container relative">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-block text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Depoimentos
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            O que nossos <span className="text-gradient-gold">clientes dizem</span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <button
            onClick={scrollPrev}
            aria-label="Anterior"
            className="hidden md:flex absolute -left-4 lg:-left-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full glass-card items-center justify-center text-primary hover:bg-gradient-gold hover:text-primary-foreground transition-all hover:scale-110"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Próximo"
            className="hidden md:flex absolute -right-4 lg:-right-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full glass-card items-center justify-center text-primary hover:bg-gradient-gold hover:text-primary-foreground transition-all hover:scale-110"
          >
            <ChevronRight size={22} />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {feedbacks.map((f, i) => (
                <div key={i} className="flex-[0_0_100%] md:flex-[0_0_80%] px-4 md:px-6">
                  <div className="glass-card rounded-3xl p-8 sm:p-12 relative">
                    <Quote
                      className="absolute top-6 right-6 w-12 h-12 text-primary/20"
                      strokeWidth={1}
                    />
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: f.rating }).map((_, s) => (
                        <Star
                          key={s}
                          size={18}
                          className="fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <p className="font-display text-xl sm:text-2xl text-foreground/95 leading-relaxed mb-8 italic">
                      “{f.text}”
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center font-bold text-primary-foreground">
                        {f.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{f.name}</div>
                        <div className="text-xs text-muted-foreground tracking-wider uppercase">
                          Cliente verificado
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile arrows + dots */}
          <div className="flex md:hidden items-center justify-center gap-3 mt-8">
            <button
              onClick={scrollPrev}
              aria-label="Anterior"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-primary"
            >
              <ChevronLeft size={18} />
            </button>
            {feedbacks.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === selectedIndex ? "bg-gradient-gold w-8" : "bg-muted w-2"
                }`}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
            <button
              onClick={scrollNext}
              aria-label="Próximo"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-primary"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
