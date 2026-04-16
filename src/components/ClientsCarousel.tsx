import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import c1 from "@/assets/cliente-1.png";
import c2 from "@/assets/cliente-2.png";
import c3 from "@/assets/cliente-3.png";
import c4 from "@/assets/cliente-4.png";
import c5 from "@/assets/cliente-5.png";
import c6 from "@/assets/cliente-6.png";
import f1 from "@/assets/feedback-1.jpg";
import f2 from "@/assets/feedback-2.jpg";
import f3 from "@/assets/feedback-3.jpg";
import f4 from "@/assets/feedback-4.jpg";
import f5 from "@/assets/feedback-5.jpg";
import f6 from "@/assets/feedback-6.jpg";
import f7 from "@/assets/feedback-7.jpg";

// Embaralhado: clientes + feedbacks intercalados
const images = [c1, f1, c2, f2, c3, f3, c4, f4, c5, f5, c6, f6, f7];

export const ClientsCarousel = () => {
  const autoplay = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
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
    <section id="clientes" className="py-14 sm:py-20 relative overflow-hidden">
      <div className="container">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div className="inline-block text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Clientes Felizes
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Quem confia, <span className="text-gradient-gold">recomenda</span>
          </h2>
          <p className="text-muted-foreground">
            Centenas de clientes satisfeitos saindo da loja com o seu novo iPhone.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {images.map((src, i) => (
                <div
                  key={i}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.3333%] min-w-0 px-3"
                >
                  <div className="relative overflow-hidden rounded-2xl gold-border shadow-elegant aspect-[3/4]">
                    <img
                      src={src}
                      alt={`Cliente Gold SmartPhones ${i + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            aria-label="Cliente anterior"
            className="absolute left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-elegant flex items-center justify-center"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Próximo cliente"
            className="absolute right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-elegant flex items-center justify-center"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                aria-label={`Ir para slide ${index + 1}`}
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
