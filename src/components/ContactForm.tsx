import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    business: "",
    needs: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message
    const message = `Olá Gustavo, acabei de visitar seu site e quero uma Landing Page!
Meu nome é ${formData.name}, meu número é ${formData.whatsapp}, sou do nicho ${formData.business} e estou buscando ${formData.needs}.`;

    const whatsappUrl = `https://wa.me/5515981479735?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Show success message
    toast({
      title: "Redirecionando para WhatsApp! 🚀",
      description:
        "Seus dados foram enviados. Continue a conversa no WhatsApp.",
    });

    // Note: Email sending requires backend setup with Lovable Cloud
    // This would be implemented via an edge function
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contato" className="py-16 sm:py-20 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl sm:max-w-2xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6">
              Pronto para{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                começar?
              </span>
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground">
              Preencha o formulário e vamos conversar sobre seu projeto
            </p>
          </div>
          ```
          <Card className="bg-card/50 backdrop-blur-sm border-border animate-fade-in p-4 sm:p-6 md:p-8">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl md:text-2xl">
                Fale comigo agora
              </CardTitle>
              <CardDescription className="text-sm sm:text-base md:text-lg">
                Envie seus dados e continue a conversa diretamente no WhatsApp
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="name" className="text-sm sm:text-base">
                    Nome completo *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background/50 text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="whatsapp" className="text-sm sm:text-base">
                    WhatsApp *
                  </Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    placeholder="(15) 98147-9735"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="bg-background/50 text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="email" className="text-sm sm:text-base">
                    E-mail *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background/50 text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="business" className="text-sm sm:text-base">
                    Nicho ou tipo de negócio *
                  </Label>
                  <Input
                    id="business"
                    name="business"
                    placeholder="Ex: Arquitetura, Coach, Dentista..."
                    required
                    value={formData.business}
                    onChange={handleChange}
                    className="bg-background/50 text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="needs" className="text-sm sm:text-base">
                    O que você precisa? *
                  </Label>
                  <Textarea
                    id="needs"
                    name="needs"
                    placeholder="Landing Page, site completo, reformulação..."
                    required
                    value={formData.needs}
                    onChange={handleChange}
                    className="bg-background/50 min-h-[80px] sm:min-h-[100px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 shadow-neon-blue text-base sm:text-lg md:text-xl"
                  size="lg"
                >
                  Enviar meus dados para Gustavo 🚀
                  <Send className="ml-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </Button>

                <p className="text-xs sm:text-sm text-muted-foreground text-center">
                  Ao enviar, você será redirecionado para o WhatsApp para
                  continuar a conversa
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
        ```
      </div>
    </section>
  );
};

export default ContactForm;
