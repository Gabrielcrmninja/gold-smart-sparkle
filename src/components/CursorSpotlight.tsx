import { useEffect, useRef } from "react";

export const CursorSpotlight = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const outer = useRef({ x: 0, y: 0 });
  const inner = useRef({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    target.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    outer.current = { ...target.current };
    inner.current = { ...target.current };

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const tick = () => {
      // eased interpolation — outer slower, inner faster
      outer.current.x += (target.current.x - outer.current.x) * 0.08;
      outer.current.y += (target.current.y - outer.current.y) * 0.08;
      inner.current.x += (target.current.x - inner.current.x) * 0.18;
      inner.current.y += (target.current.y - inner.current.y) * 0.18;

      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${outer.current.x - 350}px, ${outer.current.y - 350}px, 0)`;
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${inner.current.x - 150}px, ${inner.current.y - 150}px, 0)`;
      }
      frame.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    frame.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden hidden md:block">
      {/* Outer soft glow */}
      <div
        ref={outerRef}
        className="absolute w-[700px] h-[700px] rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle, hsl(43 74% 52% / 0.18) 0%, hsl(43 74% 52% / 0.06) 35%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />
      {/* Inner sharper highlight */}
      <div
        ref={innerRef}
        className="absolute w-[300px] h-[300px] rounded-full will-change-transform mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle, hsl(45 95% 70% / 0.22) 0%, hsl(43 74% 52% / 0.08) 40%, transparent 70%)",
        }}
      />
    </div>
  );
};
