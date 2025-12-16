import { useState } from "react";
import { Volume2, ZoomIn, X, Info } from "lucide-react";
import pinturasRupestres from "@/assets/pinturas-rupestres.jpg";

interface Painting {
  id: number;
  title: string;
  description: string;
  tooltip: string;
  image: string;
}

const paintings: Painting[] = [
  {
    id: 1,
    title: "Figuras Antropomórficas",
    description: "Representações humanas estilizadas, possivelmente relacionadas a rituais ou celebrações",
    tooltip: "Datadas de aproximadamente 6.000 anos atrás, estas figuras são das mais antigas da região",
    image: pinturasRupestres,
  },
  {
    id: 2,
    title: "Cenas de Caça",
    description: "Ilustrações de caçadores perseguindo animais do cerrado primitivo",
    tooltip: "Mostram técnicas de caça coletiva utilizadas pelos povos pré-históricos",
    image: pinturasRupestres,
  },
  {
    id: 3,
    title: "Símbolos Geométricos",
    description: "Padrões abstratos cujo significado ainda intriga os arqueólogos",
    tooltip: "Alguns pesquisadores sugerem que podem representar constelações ou mapas",
    image: pinturasRupestres,
  },
  {
    id: 4,
    title: "Animais do Cerrado",
    description: "Representações de fauna local como veados, tatus e aves",
    tooltip: "Indicam a rica biodiversidade que existia na região há milhares de anos",
    image: pinturasRupestres,
  },
];

const ArchaeologySection = () => {
  const [zoomedImage, setZoomedImage] = useState<Painting | null>(null);
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleListen = () => {
    setIsPlaying(true);
    // Simulated audio narration
    const utterance = new SpeechSynthesisUtterance(
      "As pinturas rupestres do Parque Nacional de Sete Cidades são um tesouro arqueológico de valor inestimável. Datadas de até 6.000 anos, estas inscrições pré-históricas representam cenas do cotidiano dos povos que habitavam a região, incluindo caçadas, rituais e representações da fauna local."
    );
    utterance.lang = "pt-BR";
    utterance.rate = 0.9;
    utterance.onend = () => setIsPlaying(false);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <section className="py-20 bg-card">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary font-medium uppercase tracking-widest text-sm mb-4">
              Patrimônio Arqueológico
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
              Pinturas Rupestres Milenares
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              O Parque Nacional de Sete Cidades abriga um dos mais importantes sítios de arte rupestre 
              do Brasil. As pinturas, datadas de até 6.000 anos, representam um registro valioso das 
              civilizações que habitaram a região durante a pré-história.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Os pigmentos utilizados, extraídos de minerais locais, criaram cores vibrantes que 
              resistiram ao tempo. Estudiosos de todo o mundo visitam o parque para estudar estes 
              testemunhos silenciosos de nossa história.
            </p>

            <button
              onClick={handleListen}
              disabled={isPlaying}
              className={`btn-terracotta flex items-center gap-2 ${
                isPlaying ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              <Volume2 className={`h-5 w-5 ${isPlaying ? "animate-pulse" : ""}`} />
              {isPlaying ? "Reproduzindo..." : "Ouvir Explicação"}
            </button>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-2 gap-4">
            {paintings.map((painting) => (
              <div
                key={painting.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveTooltip(painting.id)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <div className="card-natural overflow-hidden">
                  <div className="relative h-40 md:h-48">
                    <img
                      src={painting.image}
                      alt={painting.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-brown/0 group-hover:bg-brown/40 transition-colors flex items-center justify-center">
                      <button
                        onClick={() => setZoomedImage(painting)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity p-3 bg-sand rounded-full"
                      >
                        <ZoomIn className="h-5 w-5 text-brown" />
                      </button>
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-medium text-foreground text-sm">
                        {painting.title}
                      </h4>
                      <Info className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {painting.description}
                    </p>
                  </div>
                </div>

                {/* Tooltip */}
                {activeTooltip === painting.id && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-brown text-sand text-sm rounded-lg shadow-strong z-20 animate-fade-in">
                    <p>{painting.tooltip}</p>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-brown" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brown/90 backdrop-blur-sm animate-fade-in"
          onClick={() => setZoomedImage(null)}
        >
          <div className="relative max-w-4xl w-full animate-scale-in">
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute -top-12 right-0 p-2 text-sand hover:text-sand/80"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={zoomedImage.image}
              alt={zoomedImage.title}
              className="w-full h-auto rounded-xl"
            />
            <div className="mt-4 text-center">
              <h3 className="font-display text-2xl text-sand mb-2">
                {zoomedImage.title}
              </h3>
              <p className="text-sand/80">{zoomedImage.tooltip}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ArchaeologySection;
