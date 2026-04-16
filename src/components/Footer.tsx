import { Link } from "react-router-dom";
import { Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpg";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/40 pt-16 pb-8 mt-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Gold SmartPhones"
                className="h-12 w-12 rounded-full object-cover border border-primary/40"
              />
              <div>
                <div className="font-display text-xl font-bold text-gradient-gold">Gold</div>
                <div className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
                  SmartPhones
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Sua loja premium de iPhones com garantia, brindes exclusivos e o melhor atendimento.
            </p>
          </div>

          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Empresa</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground font-medium">Gold SmartPhones</strong>
              </li>
              <li>CNPJ: 00.000.000/0001-00</li>
              <li>Rua Exemplo, 123 — Centro</li>
              <li>contato@goldsmartphones.com</li>
            </ul>
          </div>

          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Conecte-se</div>
            <div className="flex gap-3 mb-6">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-primary hover:bg-gradient-gold hover:text-primary-foreground transition-all"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://instagram.com"
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
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Gold SmartPhones. Todos os direitos reservados.</p>
          <p className="tracking-widest uppercase">Premium · Original · Garantido</p>
        </div>
      </div>
    </footer>
  );
};
