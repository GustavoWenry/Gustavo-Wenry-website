import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "João Victor",
      role: "Filmmaker e Fotógrafo",
      content:
        "Melhor investimento que fiz para meu negócio.Depois que meu site ficou pronto, veio diversas pessoas falando que me encontraram através de pesquisarem no Google!",
      rating: 5,
      avatar: "JV",
    },
    {
      name: "Mariana Tavares",
      role: "Lash Designer e Extensionista de Cílios",
      content: "Exelente profissional! Agregou muito valor ao meu negócio.",
      rating: 5,
      avatar: "MT",
    },
    {
      name: "Ana Paula",
      role: "Dentista",
      content:
        "Profissional excepcional! Entregou antes do prazo e o resultado superou minhas expectativas.",
      rating: 5,
      avatar: "AP",
    },
    {
      name: "Gabriele Tainara",
      role: "Personal Trainer",
      content: "Atendimento incrível, site ficou do jeitinho que eu queria.",
      rating: 5,
      avatar: "GT",
    },
    {
      name: "Maria Luiza",
      role: "Empresária",
      content:
        "A atualização do nosso site modernizou muito a nossa presença online. O novo layout é elogiado frequentemente por parceiros e clientes, e a equipe interna consegue gerenciar o conteúdo sem dificuldades. O projeto foi conduzido com muito profissionalismo.",
      rating: 5,
      avatar: "ML",
    },
    {
      name: "Geovane Lima",
      role: "Marketing Digital",
      content:
        "O site capturou perfeitamente a atmosfera que eu queria passar: profissionalismo e acolhimento. Agora consigo me comunicar melhor com a minha audiência e centralizar meu trabalho em um único lugar. A experiência de construir isso foi bem fluida.",
      rating: 5,
      avatar: "GL",
    },
  ];

  return (
    <section id="depoimentos" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              O que meus{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                clientes dizem
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Veja como transformei negócios de empreendedores como você
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
