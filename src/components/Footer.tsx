import { Mountain, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-brown text-sand">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Mountain className="h-8 w-8 text-terracotta-light" />
            <div>
              <h3 className="font-display text-lg font-semibold">
                Parque Nacional de Sete Cidades
              </h3>
              <p className="text-sm text-sand/70">
                Piauí, Brasil — Patrimônio Natural
              </p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-sand/70 flex items-center gap-1 justify-center md:justify-end">
              Feito com <Heart className="h-4 w-4 text-terracotta-light" /> para educação patrimonial
            </p>
            <p className="text-xs text-sand/50 mt-1">
              Visita virtual interativa © 2024
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-sand/20 text-center">
          <p className="text-sm text-sand/60 max-w-2xl mx-auto">
            Este site é uma experiência educativa virtual. Para informações oficiais sobre visitas, 
            consulte o ICMBio — Instituto Chico Mendes de Conservação da Biodiversidade.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
