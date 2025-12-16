import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-sete-cidades.jpg";

interface HeroSectionProps {
  onStartVisit: () => void;
}

const HeroSection = ({ onStartVisit }: HeroSectionProps) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Vista aérea do Parque Nacional de Sete Cidades"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <span className="mb-4 inline-block rounded-full border border-sand/30 bg-sand/10 px-4 py-2 text-sm font-medium uppercase tracking-widest text-sand opacity-0 animate-fade-up">
          Patrimônio Natural do Brasil
        </span>
        
        <h1 className="font-display mb-6 max-w-5xl text-4xl font-bold leading-tight text-sand opacity-0 animate-fade-up delay-100 md:text-6xl lg:text-7xl">
          Parque Nacional de Sete Cidades
        </h1>
        
        <p className="mb-8 max-w-2xl text-lg text-sand/80 opacity-0 animate-fade-up delay-200 md:text-xl">
          Uma viagem pela história da natureza — onde rochas contam histórias de milhões de anos
        </p>

        <button
          onClick={onStartVisit}
          className="group flex flex-col items-center gap-4 opacity-0 animate-fade-up delay-300"
        >
          <span className="btn-terracotta flex items-center gap-2 text-lg">
            Iniciar Visita Interativa
          </span>
          <ChevronDown className="h-6 w-6 animate-bounce text-sand" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
