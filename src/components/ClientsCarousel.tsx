import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useRef } from "react";
import c1 from "@/assets/cliente-1.png";
import c2 from "@/assets/cliente-2.png";
import c3 from "@/assets/cliente-3.png";
import c4 from "@/assets/cliente-4.png";
import c5 from "@/assets/cliente-5.png";
import c6 from "@/assets/cliente-6.png";

const images = [c1, c2, c3, c4, c5, c6];

export const ClientsCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 2500, stopOnInteraction: false }));
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [autoplay.current]
  );

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

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5 sm:gap-7 px-4">
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="flex-[0_0_70%] sm:flex-[0_0_38%] md:flex-[0_0_28%] lg:flex-[0_0_20%] relative group"
            >
              <div className="relative overflow-hidden rounded-2xl gold-border shadow-elegant aspect-[3/4]">
                <img
                  src={src}
                  alt={`Cliente Gold SmartPhones ${(i % images.length) + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
