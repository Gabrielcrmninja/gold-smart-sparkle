import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

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
  const autoplay = useRef(
    Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [autoplay.current]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="feedbacks" className="py-14 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.08),transparent_50%)]" />

      <div className="container relative">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div className="font-action inline-block text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Depoimentos
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            O que nossos <span className="text-gradient-gold">clientes dizem</span>
          </h2>
          <p className="text-muted-foreground">
            Histórias reais de quem escolheu a Gold para a sua nova experiência iPhone.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {feedbacks.map((f, i) => (
                <div
                  key={i}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.3333%] min-w-0 px-3"
                >
                  <div className="relative glass-card rounded-2xl gold-border shadow-elegant p-8 h-full flex flex-col">
                    <Quote
                      className="absolute top-5 right-5 w-10 h-10 text-primary/20"
                      strokeWidth={1}
                    />
                    <div className="flex gap-1 mb-5">
                      {Array.from({ length: f.rating }).map((_, s) => (
                        <Star key={s} size={16} className="fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-foreground/95 leading-relaxed mb-6 italic flex-1">
                      “{f.text}”
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                      <div className="w-11 h-11 rounded-full bg-gradient-gold flex items-center justify-center font-action font-bold text-primary-foreground">
                        {f.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-action font-semibold text-foreground text-sm">
                          {f.name}
                        </div>
                        <div className="font-action text-[10px] text-muted-foreground tracking-[0.2em] uppercase">
                          Cliente verificado
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            aria-label="Depoimento anterior"
            className="absolute left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-elegant flex items-center justify-center"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Próximo depoimento"
            className="absolute right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-elegant flex items-center justify-center"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                aria-label={`Ir para depoimento ${index + 1}`}
                className={`h-2 rounded-full transition-all ${
                  index === selectedIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
