import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const Privacy = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-36 pb-20">
        <div className="container max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Voltar para a página inicial
          </Link>

          <div className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Documento Legal</div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Política de <span className="text-gradient-gold">Privacidade</span>
          </h1>
          <p className="text-muted-foreground mb-12">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>

          <div className="space-y-10 text-foreground/90 leading-relaxed">
            <section>
              <h2 className="font-display text-2xl font-semibold mb-3 text-gradient-gold">
                1. Introdução
              </h2>
              <p>
                A Gold SmartPhones valoriza a privacidade de seus clientes e visitantes. Esta política
                descreve como coletamos, usamos e protegemos suas informações pessoais quando você
                utiliza nossos serviços ou visita nossa loja.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3 text-gradient-gold">
                2. Informações que coletamos
              </h2>
              <p className="mb-3">Podemos coletar os seguintes tipos de informação:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Nome, e-mail e telefone fornecidos voluntariamente</li>
                <li>Dados de pagamento durante uma transação (processados de forma segura)</li>
                <li>Informações de navegação no site (cookies, IP, dispositivo)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3 text-gradient-gold">
                3. Uso das informações
              </h2>
              <p>
                Utilizamos seus dados para processar pedidos, oferecer atendimento personalizado,
                emitir notas fiscais, garantir cobertura de garantia e enviar comunicações
                relacionadas aos nossos produtos e serviços.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3 text-gradient-gold">
                4. Compartilhamento de dados
              </h2>
              <p>
                Não vendemos suas informações. Podemos compartilhá-las apenas com parceiros essenciais
                à operação (processadoras de pagamento, transportadoras) ou quando exigido por lei.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3 text-gradient-gold">
                5. Cookies
              </h2>
              <p>
                Utilizamos cookies para melhorar sua experiência de navegação, lembrar preferências e
                analisar o uso do site. Você pode desativá-los nas configurações do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3 text-gradient-gold">
                6. Seus direitos (LGPD)
              </h2>
              <p>
                De acordo com a Lei Geral de Proteção de Dados, você tem direito de acessar, corrigir,
                excluir ou portar seus dados pessoais. Para exercer esses direitos, entre em contato
                conosco.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3 text-gradient-gold">
                7. Segurança
              </h2>
              <p>
                Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso
                não autorizado, perda ou alteração indevida.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3 text-gradient-gold">
                8. Contato
              </h2>
              <p>
                Para dúvidas sobre esta política, escreva para{" "}
                <a
                  href="mailto:contato@goldsmartphones.com"
                  className="text-primary hover:underline"
                >
                  contato@goldsmartphones.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Privacy;
