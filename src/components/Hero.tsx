import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const whatsappUrl = "https://wa.me/5515981479735?text=Olá%20Gustavo%2C%20quero%20minha%20Landing%20Page%20agora!";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-tech">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">O seu desenvolvedor web</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transforme seu negócio com uma{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Landing Page
            </span>{" "}
            que vende todos os dias
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Sites profissionais e estratégicos criados sob medida para empreendedores e prestadores de serviço.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 shadow-neon-blue animate-glow-pulse text-lg px-8"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                🚀 Quero minha página agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("servicos")}
              className="border-primary/50 hover:bg-primary/10 text-lg px-8"
            >
              Ver portfólio
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-slide-in">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Projetos entregues</div>
            </div>
            <div className="animate-slide-in delay-100">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Clientes satisfeitos</div>
            </div>
            <div className="animate-slide-in delay-200">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24h</div>
              <div className="text-sm text-muted-foreground">Tempo médio de entrega</div>
            </div>
            <div className="animate-slide-in delay-300">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5⭐</div>
              <div className="text-sm text-muted-foreground">Avaliação média</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
