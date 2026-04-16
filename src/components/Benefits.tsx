import { ShieldCheck, Gift, CreditCard } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Garantia Estendida",
    desc: "Cobertura adicional para que você use seu iPhone com total tranquilidade por muito mais tempo.",
  },
  {
    icon: Gift,
    title: "Brindes Exclusivos",
    desc: "Capa, película, carregador e acessórios premium acompanham a sua compra como cortesia.",
  },
  {
    icon: CreditCard,
    title: "Parcelamento Facilitado",
    desc: "Condições especiais em até 12x, com aprovação rápida e sem complicações no pagamento.",
  },
];

export const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 sm:py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full" />

      <div className="container relative">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-block text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Por que Gold?
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Uma experiência <span className="text-gradient-gold">premium</span>
          </h2>
          <p className="text-muted-foreground">
            Comprar seu iPhone na Gold é mais do que adquirir um aparelho — é receber um atendimento de excelência.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="group relative glass-card rounded-3xl p-8 lg:p-10 hover:-translate-y-2 transition-all duration-500 hover:shadow-gold-sm"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-gold-soft border border-primary/30 mb-6 group-hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-gold opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
                <b.icon className="relative w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>

              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{b.desc}</p>

              <div className="mt-6 text-xs tracking-widest text-primary/70 uppercase">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
