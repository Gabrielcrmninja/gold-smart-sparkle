import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  color: string;
}

export const CursorSpotlight = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const target = useRef({ x: 0, y: 0 });
  const outer = useRef({ x: 0, y: 0 });
  const inner = useRef({ x: 0, y: 0 });
  const particles = useRef<Particle[]>([]);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    // Inicialização no centro da tela
    target.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    outer.current = { ...target.current };
    inner.current = { ...target.current };

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;

      // Criação do "Fairy Dust" (partículas)
      for (let i = 0; i < 6; i++) {
        particles.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 1.6,
          vy: (Math.random() - 0.5) * 1.6,
          life: 1.0,
          size: Math.random() * 2.8 + 0.8,
          color: `hsla(${40 + Math.random() * 12}, 95%, 75%, `,
        });
      }
    };

    const tick = () => {
      // 1. Suavização do movimento (Eased Interpolation)
      outer.current.x += (target.current.x - outer.current.x) * 0.05;
      outer.current.y += (target.current.y - outer.current.y) * 0.05;
      inner.current.x += (target.current.x - inner.current.x) * 0.12;
      inner.current.y += (target.current.y - inner.current.y) * 0.12;

      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${outer.current.x - 350}px, ${outer.current.y - 350}px, 0)`;
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${inner.current.x - 150}px, ${inner.current.y - 150}px, 0)`;
      }

      // 2. Renderização do Fairy Dust no Canvas
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");

      if (canvas && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particles.current.length; i++) {
          const p = particles.current[i];
          p.x += p.vx;
          p.y += p.vy;
          p.life -= 0.015;

          if (p.life <= 0) {
            particles.current.splice(i, 1);
            i--;
            continue;
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
          ctx.fillStyle = p.color + p.life * 0.8 + ")";

          if (p.size > 1.5) {
            ctx.shadowBlur = 8 * p.life;
            ctx.shadowColor = "rgba(255, 230, 150, 0.5)";
          } else {
            ctx.shadowBlur = 0;
          }
          ctx.fill();
        }
      }

      frame.current = requestAnimationFrame(tick);
    };

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", handleResize);
    handleResize();
    frame.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", handleResize);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden hidden md:block">
      {/* Camada das partículas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-10" />

      {/* Brilho Externo (Glow Suave) */}
      <div
        ref={outerRef}
        className="absolute w-[700px] h-[700px] rounded-full will-change-transform opacity-50"
        style={{
          background:
            "radial-gradient(circle, hsl(43 74% 52% / 0.07) 0%, hsl(43 74% 52% / 0.02) 40%, transparent 75%)",
          filter: "blur(30px)",
        }}
      />

      {/* Brilho Interno (Destaque Central) */}
      <div
        ref={innerRef}
        className="absolute w-[300px] h-[300px] rounded-full will-change-transform mix-blend-screen opacity-35"
        style={{
          background:
            "radial-gradient(circle, hsl(45 95% 70% / 0.10) 0%, hsl(43 74% 52% / 0.035) 50%, transparent 70%)",
        }}
      />
    </div>
  );
};
