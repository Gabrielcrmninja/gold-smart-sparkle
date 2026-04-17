import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const links = [
  { label: "Início", href: "#hero" },
  { label: "Clientes", href: "#clientes" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Depoimentos", href: "#feedbacks" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-gold blur-lg opacity-40 group-hover:opacity-70 transition-opacity" />
            <img
              src={logo}
              alt="Gold SmartPhones"
              className="relative h-10 w-10 rounded-full object-cover border border-primary/40"
            />
          </div>
          <div className="leading-tight">
            <div className="font-display text-base sm:text-lg font-bold text-gradient-gold">Gold</div>
            <div className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">SmartPhones</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-gold group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/33984185744"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-gold text-primary-foreground text-sm font-semibold shadow-gold-sm hover:shadow-gold transition-all hover:-translate-y-0.5"
        >
          WhatsApp
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden absolute top-full inset-x-0 bg-background/95 backdrop-blur-xl border-b border-border/40">
          <div className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-muted-foreground hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/33984185744"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex justify-center items-center gap-2 px-5 py-3 rounded-full bg-gradient-gold text-primary-foreground text-sm font-semibold"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
