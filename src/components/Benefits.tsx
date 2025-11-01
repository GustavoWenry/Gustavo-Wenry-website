import { TrendingUp, MessageCircle, Zap, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Aumente suas vendas todos os dias",
      description: "Landing Pages otimizadas para converter visitantes em clientes reais",
      color: "primary",
    },
    {
      icon: MessageCircle,
      title: "Gere contatos automáticos pelo WhatsApp",
      description: "Integração inteligente que direciona leads direto para seu WhatsApp",
      color: "secondary",
    },
    {
      icon: Zap,
      title: "Sites rápidos, bonitos e otimizados",
      description: "Design moderno com carregamento ultrarrápido em qualquer dispositivo",
      color: "primary",
    },
    {
      icon: BarChart3,
      title: "Acompanhe resultados com Google Analytics",
      description: "Métricas completas para você entender o comportamento dos visitantes",
      color: "secondary",
    },
  ];

  return (
    <section id="servicos" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Por que ter uma{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Landing Page?
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Descubra como uma Landing Page profissional pode transformar seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-neon-blue animate-fade-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                        benefit.color === "primary"
                          ? "from-primary/20 to-primary/5"
                          : "from-secondary/20 to-secondary/5"
                      } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon
                        className={`w-8 h-8 ${
                          benefit.color === "primary" ? "text-primary" : "text-secondary"
                        }`}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
