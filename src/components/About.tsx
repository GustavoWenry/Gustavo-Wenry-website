import { Code2, Zap, Target } from "lucide-react";
import profileImage from "@/assets/gustavo-profile.png";

const About = () => {
  return (
    <section id="sobre" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-30"></div>
                <img
                  src={profileImage}
                  alt="Gustavo Wenry - Desenvolvedor Web"
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>

            <div className="animate-slide-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Quem é{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Gustavo Wenry?
                </span>
              </h2>

              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Sou desenvolvedor web especializado em Landing Pages de alta
                conversão. Já ajudei diversos empreendedores a se posicionarem
                no digital com páginas rápidas, otimizadas e focadas em
                resultados.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      Experiência com React, Node.js, Java Script e Tailwind
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Tecnologias modernas para sites rápidos e responsivos
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      Foco total em SEO e performance
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Seu site bem posicionado no Google com carregamento
                      ultrarrápido
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      Atendimento estratégico e personalizado
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Cada projeto pensado para gerar resultados reais
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
