import { Instagram, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                GUSTAVO WENRY
              </div>
              <p className="text-sm text-muted-foreground">
                O seu desenvolvedor web especializado em Landing Pages de alta conversão.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Navegação</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#inicio" className="hover:text-primary transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-primary transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#planos" className="hover:text-primary transition-colors">
                    Planos
                  </a>
                </li>
                <li>
                  <a href="#depoimentos" className="hover:text-primary transition-colors">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-primary transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://instagram.com/wenry_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                    @wenry_
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5515981479735"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    (15) 98147-9735
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:wenrygustavo@gmail.com"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    wenrygustavo@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground mb-2">
              © 2025 Gustavo Wenry — Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground">
              Desenvolvido por Gustavo Wenry | O seu desenvolvedor web
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
