import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import macbook from "@/assets/parallax-macbook.png";
import airpods from "@/assets/parallax-airpods.png";
import watch from "@/assets/parallax-watch.png";
import ipad from "@/assets/parallax-ipad.png";
import iphoneBlack from "@/assets/parallax-iphone-black.png";
import homepod from "@/assets/parallax-homepod.png";

type Item = {
  src: string;
  alt: string;
  /** vertical position in vh units, can exceed 100 (multiple "screens") */
  top: number;
  /** horizontal position in % of viewport width */
  left: number;
  /** rendered size in px */
  size: number;
  /** depth: 0 = far (less movement, more blur), 1 = near (more movement) */
  depth: number;
  /** base rotation in deg */
  rotate: number;
  /** floating animation delay */
  delay: number;
  opacity: number;
};

const items: Item[] = [
  // Hero area (0–100vh)
  { src: macbook, alt: "", top: 12, left: 78, size: 280, depth: 0.9, rotate: -8, delay: 0, opacity: 0.18 },
  { src: airpods, alt: "", top: 70, left: 8, size: 140, depth: 0.6, rotate: 12, delay: 0.5, opacity: 0.22 },
  { src: watch, alt: "", top: 35, left: 3, size: 120, depth: 0.4, rotate: -15, delay: 1, opacity: 0.18 },

  // Clients / Benefits (100–220vh)
  { src: ipad, alt: "", top: 130, left: 70, size: 320, depth: 0.85, rotate: 14, delay: 0.2, opacity: 0.16 },
  { src: iphoneBlack, alt: "", top: 175, left: 12, size: 200, depth: 0.7, rotate: -10, delay: 1.2, opacity: 0.2 },
  { src: homepod, alt: "", top: 215, left: 85, size: 150, depth: 0.5, rotate: 0, delay: 0.8, opacity: 0.18 },

  // Feedbacks (220–320vh)
  { src: airpods, alt: "", top: 250, left: 5, size: 110, depth: 0.3, rotate: -20, delay: 0.4, opacity: 0.14 },
  { src: watch, alt: "", top: 290, left: 88, size: 140, depth: 0.65, rotate: 18, delay: 1.5, opacity: 0.2 },
  { src: macbook, alt: "", top: 330, left: 60, size: 240, depth: 0.5, rotate: -6, delay: 0.6, opacity: 0.13 },

  // FAQ / Awards (320–440vh)
  { src: iphoneBlack, alt: "", top: 380, left: 8, size: 180, depth: 0.8, rotate: 8, delay: 0.9, opacity: 0.18 },
  { src: ipad, alt: "", top: 420, left: 75, size: 260, depth: 0.45, rotate: -12, delay: 1.1, opacity: 0.14 },
  { src: homepod, alt: "", top: 460, left: 18, size: 130, depth: 0.55, rotate: 0, delay: 0.3, opacity: 0.18 },

  // Address / Footer area (480–600vh)
  { src: watch, alt: "", top: 500, left: 80, size: 110, depth: 0.4, rotate: 22, delay: 0.7, opacity: 0.16 },
  { src: airpods, alt: "", top: 540, left: 30, size: 130, depth: 0.6, rotate: -18, delay: 1.3, opacity: 0.18 },
  { src: macbook, alt: "", top: 580, left: 65, size: 220, depth: 0.75, rotate: 6, delay: 0.5, opacity: 0.15 },
];

export const ParallaxBackground = () => {
  const isMobile = useIsMobile();

  // Mouse position normalized to -1..1
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 20, mass: 0.8 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20, mass: 0.8 });

  const [docHeight, setDocHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => setDocHeight(document.documentElement.scrollHeight);
    updateHeight();
    window.addEventListener("resize", updateHeight);
    const ro = new ResizeObserver(updateHeight);
    ro.observe(document.body);
    return () => {
      window.removeEventListener("resize", updateHeight);
      ro.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [isMobile, mouseX, mouseY]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at top, hsl(0 0% 9%) 0%, hsl(0 0% 4%) 60%, hsl(0 0% 2%) 100%)",
      }}
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      {/* Ambient golden glow */}
      <div className="absolute top-[20%] -left-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[160px]" />
      <div className="absolute top-[80%] -right-40 w-[700px] h-[700px] rounded-full bg-primary-glow/5 blur-[180px]" />
      <div className="absolute top-[150%] left-1/3 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[140px]" />

      {/* Items container — full document height so items "stick" in space as user scrolls */}
      <div
        className="absolute inset-x-0 top-0"
        style={{ height: docHeight ? `${docHeight}px` : "100vh" }}
      >
        {items.map((item, i) => (
          <ParallaxItem
            key={i}
            item={item}
            springX={springX}
            springY={springY}
            isMobile={isMobile}
          />
        ))}
      </div>

      {/* Vignette for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/60" />
    </div>
  );
};

const ParallaxItem = ({
  item,
  springX,
  springY,
  isMobile,
}: {
  item: Item;
  springX: ReturnType<typeof useSpring>;
  springY: ReturnType<typeof useSpring>;
  isMobile: boolean;
}) => {
  const amplitude = 60 * item.depth; // px max travel
  const x = useTransform(springX, (v) => v * amplitude);
  const y = useTransform(springY, (v) => v * amplitude);

  const blur = (1 - item.depth) * 4; // far items slightly blurred

  return (
    <motion.div
      className="absolute will-change-transform"
      style={{
        top: `${item.top}vh`,
        left: `${item.left}%`,
        width: item.size,
        height: item.size,
        x: isMobile ? 0 : x,
        y: isMobile ? 0 : y,
        opacity: item.opacity,
        filter: `blur(${blur}px)`,
      }}
      animate={{
        y: isMobile ? [0, -16, 0] : undefined,
        rotate: [item.rotate - 2, item.rotate + 2, item.rotate - 2],
      }}
      transition={{
        duration: 6 + item.delay * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: item.delay,
      }}
    >
      <motion.img
        src={item.src}
        alt=""
        loading="lazy"
        decoding="async"
        className="w-full h-full object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)]"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4 + item.delay,
          repeat: Infinity,
          ease: "easeInOut",
          delay: item.delay * 0.5,
        }}
      />
    </motion.div>
  );
};
