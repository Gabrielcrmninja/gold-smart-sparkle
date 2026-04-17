import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Os aparelhos têm garantia?",
    a: "Sim! Todos os iPhones, novos ou seminovos, contam com garantia estendida da Gold SmartPhones, além da garantia oficial Apple quando aplicável. Você compra com total segurança.",
  },
  {
    q: "Vocês trabalham com iPhones novos?",
    a: "Trabalhamos com aparelhos novos lacrados e seminovos premium, todos rigorosamente revisados. Temos sempre as últimas linhas em estoque, incluindo lançamentos.",
  },
  {
    q: "Aceitam parcelamento?",
    a: "Sim! Parcelamos em até 18x sem juros no cartão de crédito, e oferecemos diversas outras formas de pagamento como Pix, débito e financiamento.",
  },
  {
    q: "Os iPhones seminovos são originais?",
    a: "100% originais e desbloqueados de fábrica. Cada aparelho passa por uma checagem técnica completa antes de ser disponibilizado para venda.",
  },
  {
    q: "Quais brindes vêm com a compra?",
    a: "Cada compra inclui um kit de brindes exclusivos: capa, película de proteção e acessórios selecionados. Os brindes podem variar conforme o modelo.",
  },
  {
    q: "Vocês emitem nota fiscal?",
    a: "Sim, todas as vendas são acompanhadas de nota fiscal eletrônica para sua total segurança e comprovação de garantia.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-14 sm:py-20 relative">
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <div className="font-action inline-block text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Dúvidas Frequentes
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Tudo que você precisa <span className="text-gradient-gold">saber</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass-card rounded-2xl border-0 px-6 data-[state=open]:shadow-gold-sm transition-shadow"
            >
              <AccordionTrigger className="text-left text-base sm:text-lg font-medium hover:text-primary hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm sm:text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
