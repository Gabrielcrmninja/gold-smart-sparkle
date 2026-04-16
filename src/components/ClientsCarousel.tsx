import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useRef, useState } from "react";
import c1 from "@/assets/cliente-1.png";
import c2 from "@/assets/cliente-2.png";
import c3 from "@/assets/cliente-3.png";
import c4 from "@/assets/cliente-4.png";
import c5 from "@/assets/cliente-5.png";
import c6 from "@/assets/cliente-6.png";

const images = [c1, c2, c3, c4, c5, c6];
const TWEEN_FACTOR = 1.2;

export const ClientsCarousel = () => {
  const autoplay = useRef(
    Autoplay({ delay: 2800, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      dragFree: false,
      containScroll: false,
    },
    [autoplay.current, ClassNames({ snapped: "is-snapped" })]
  );
  const [tweenValues, setTweenValues] = useState<number[]>([]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = engine.scrollBody.direction() !== 0;

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;
      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return Math.max(0.55, Math.min(1, tweenValue));
    });
    setTweenValues(styles);
    void slidesInView;
    void isScrollEvent;
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll();
    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <section id="clientes" className="py-20 sm:py-28 relative overflow-hidden">
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
      </div>

      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex gap-4 sm:gap-6 px-4 py-8" style={{ perspective: "1200px" }}>
          {[...images, ...images].map((src, i) => {
            const scale = tweenValues[i % images.length] ?? 0.7;
            const rotate = (1 - scale) * 35;
            const opacity = 0.4 + scale * 0.6;
            return (
              <div
                key={i}
                className="flex-[0_0_70%] sm:flex-[0_0_42%] md:flex-[0_0_32%] lg:flex-[0_0_24%] relative"
                style={{
                  transform: `scale(${scale}) rotateY(${rotate}deg)`,
                  opacity,
                  transition: "transform 0.4s ease, opacity 0.4s ease",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative overflow-hidden rounded-2xl gold-border shadow-elegant aspect-[3/4]">
                  <img
                    src={src}
                    alt={`Cliente Gold SmartPhones ${(i % images.length) + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover pointer-events-none"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
