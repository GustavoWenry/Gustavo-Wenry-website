import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  const plans = [
    {
      name: "Start",
      price: "R$ 497",
      description: "Página simples com CTA para WhatsApp",
      features: [
        "Design profissional",
        "Botão WhatsApp integrado",
        "Responsivo (mobile + desktop)",
        "Domínio personalizado",
        "Entrega em 3 dias",
      ],
      highlighted: false,
    },
    {
      name: "Profissional",
      price: "R$ 997",
      description: "Página completa com copy e design de alta conversão",
      features: [
        "Tudo do plano Start",
        "Copywriting profissional",
        "Design premium personalizado",
        "SEO básico otimizado",
        "Formulário de contato",
        "2 revisões incluídas",
        "Entrega em 5 dias",
      ],
      highlighted: true,
      badge: "Mais Vendido",
    },
    {
      name: "Premium",
      price: "R$ 1.497",
      description: "Página com SEO, Google Analytics e acompanhamento mensal",
      features: [
        "Tudo do plano Profissional",
        "SEO avançado",
        "Google Analytics configurado",
        "Integração com Facebook Pixel",
        "Acompanhamento mensal",
        "Suporte prioritário",
        "Revisões ilimitadas (30 dias)",
        "Entrega em 7 dias",
      ],
      highlighted: false,
    },
  ];

  const whatsappUrl = "https://wa.me/5515981479735?text=Olá%20Gustavo%2C%20quero%20contratar%20um%20plano!";

  return (
    <section id="planos" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Planos e{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Pacotes
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Escolha o plano ideal para o seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-card/50 backdrop-blur-sm border-border transition-all duration-300 animate-fade-in ${
                  plan.highlighted
                    ? "md:scale-110 border-primary shadow-neon-blue"
                    : "hover:border-primary/50"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-primary to-secondary px-4 py-1 rounded-full flex items-center gap-2 shadow-neon-blue">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-sm font-bold">{plan.badge}</span>
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full ${
                      plan.highlighted
                        ? "bg-primary hover:bg-primary/90 shadow-neon-blue"
                        : "bg-muted hover:bg-muted/80"
                    }`}
                  >
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      Escolher {plan.name}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Todos os planos incluem hospedagem gratuita por 1 ano 🎉
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
