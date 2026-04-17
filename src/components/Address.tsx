import { Clock, MapPin, Phone } from "lucide-react";

export const Address = () => {
  return (
    <section id="contato" className="py-14 sm:py-20 relative">
      <div className="container">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div className="font-action inline-block text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Visite-nos
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Nossa <span className="text-gradient-gold">loja</span>
          </h2>
          <p className="text-muted-foreground">
            Venha conhecer pessoalmente nosso showroom e atendimento exclusivo.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-5">
            <div className="glass-card rounded-2xl p-6 flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-gold-soft border border-primary/30 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs tracking-widest uppercase text-primary mb-1">Endereço</div>
                <p className="text-foreground leading-relaxed">
                  Rua Arthur Bernardes, 146
                  <br />
                  Ipanema — MG
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-gold-soft border border-primary/30 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs tracking-widest uppercase text-primary mb-1">Contato</div>
                <a
                  href="https://wa.me/33984185744"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors block"
                >
                  WhatsApp: (33) 98418-5744
                </a>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-gold-soft border border-primary/30 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs tracking-widest uppercase text-primary mb-1">Horário</div>
                <p className="text-foreground leading-relaxed">
                  Seg — Sáb · 09h às 19h
                  <br />
                  Domingo · Fechado
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/33984185744"
              target="_blank"
              rel="noopener noreferrer"
              className="font-action block text-center w-full px-6 py-4 rounded-full bg-gradient-gold text-primary-foreground font-semibold shadow-gold-sm hover:shadow-gold transition-all hover:-translate-y-0.5"
            >
              Falar no WhatsApp
            </a>
          </div>

          <div className="lg:col-span-3 rounded-3xl overflow-hidden gold-border shadow-elegant aspect-square lg:aspect-auto min-h-[400px]">
            <iframe
              title="Localização Gold SmartPhones"
              src="https://www.google.com/maps?q=Rua+Arthur+Bernardes,+146,+Ipanema,+MG&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
