import { Link } from "react-router-dom";
import { Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-gold.png";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/40 pt-16 pb-8 mt-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container">
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* LOGO AJUSTADA */}
          <div>
            <div className="flex items-center mb-4">
              <a href="#hero" className="group inline-block ml-2">
                <img
                  src={logo}
                  alt="Gold SmartPhones"
                  className="h-14 sm:h-16 object-contain transition-transform duration-300 origin-left group-hover:scale-150"
                />
              </a>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Sua loja premium de iPhones com garantia, brindes exclusivos e o melhor atendimento.
            </p>
          </div>

          {/* EMPRESA */}
          <div>
            <div className="font-action text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Empresa
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground font-medium">
                  H. Oliveira Alves
                </strong>
              </li>
              <li>CNPJ: 43.083.804/0001-04</li>
              <li>Rua Arthur Bernardes, 146 — Ipanema/MG</li>
              <li>WhatsApp: (33) 98418-5744</li>
            </ul>
          </div>

          {/* CONECTE-SE */}
          <div>
            <div className="font-action text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Conecte-se
            </div>

            <div className="flex gap-3 mb-6">
              <a
                href="https://wa.me/33984185744"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-primary hover:bg-gradient-gold hover:text-primary-foreground transition-all"
              >
                <MessageCircle size={18} />
              </a>

              <a
                href="https://www.instagram.com/flavianaiphones"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-primary hover:bg-gradient-gold hover:text-primary-foreground transition-all"
              >
                <Instagram size={18} />
              </a>
            </div>

            <Link
              to="/politica-de-privacidade"
              className="font-action text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>

        {/* RODAPÉ FINAL */}
        <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Gold SmartPhones. Todos os direitos reservados.
          </p>
          <p className="tracking-widest uppercase">
            Premium · Original · Garantido
          </p>
        </div>
      </div>
    </footer>
  );
};