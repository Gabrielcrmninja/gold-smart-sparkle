import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/40 py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="container flex items-center justify-between">
        {/* Lado Esquerdo: Vazio ou apenas um espaçador agora que a logo saiu */}
        <a href="#hero" className="flex items-center gap-3 group">
          {/* Logo removida daqui */}
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-action text-sm text-muted-foreground hover:text-primary transition-colors relative group"
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
          className="font-action hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-gold text-primary-foreground text-sm font-semibold shadow-gold-sm hover:shadow-gold transition-all hover:-translate-y-0.5"
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
    </header>
  );
};