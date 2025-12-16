import { useState, useEffect } from "react";
import { Check, MapPin } from "lucide-react";
import pedraTartaruga from "@/assets/pedra-tartaruga.jpg";
import arcoTriunfo from "@/assets/arco-triunfo.jpg";
import biblioteca from "@/assets/biblioteca.jpg";
import cabecaDomPedro from "@/assets/cabeca-dom-pedro.jpg";

interface TouristPoint {
  id: string;
  name: string;
  description: string;
  image: string;
}

const touristPoints: TouristPoint[] = [
  {
    id: "tartaruga",
    name: "Pedra da Tartaruga",
    description: "Formação rochosa que reproduz perfeitamente a silhueta de uma tartaruga gigante",
    image: pedraTartaruga,
  },
  {
    id: "arco",
    name: "Arco do Triunfo",
    description: "Impressionante arco natural que lembra o famoso monumento parisiense",
    image: arcoTriunfo,
  },
  {
    id: "biblioteca",
    name: "A Biblioteca",
    description: "Formações que parecem prateleiras repletas de livros antigos",
    image: biblioteca,
  },
  {
    id: "dom-pedro",
    name: "Cabeça de Dom Pedro I",
    description: "Perfil rochoso que lembra o rosto do imperador brasileiro",
    image: cabecaDomPedro,
  },
  {
    id: "elefante",
    name: "Pedra do Elefante",
    description: "Formação que reproduz a silhueta de um elefante",
    image: pedraTartaruga,
  },
  {
    id: "mapa",
    name: "Mapa do Brasil",
    description: "Rocha que apresenta contornos similares ao mapa brasileiro",
    image: arcoTriunfo,
  },
  {
    id: "americano",
    name: "O Americano",
    description: "Figura rochosa que lembra um índio americano",
    image: biblioteca,
  },
  {
    id: "tres-reis",
    name: "Os Três Reis Magos",
    description: "Conjunto de três formações alinhadas",
    image: cabecaDomPedro,
  },
];

const STORAGE_KEY = "sete-cidades-visited";

const TouristPointsSection = () => {
  const [visitedPoints, setVisitedPoints] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setVisitedPoints(JSON.parse(saved));
    }
  }, []);

  const toggleVisited = (id: string) => {
    setVisitedPoints((prev) => {
      const newVisited = prev.includes(id)
        ? prev.filter((p) => p !== id)
        : [...prev, id];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newVisited));
      return newVisited;
    });
  };

  const progress = (visitedPoints.length / touristPoints.length) * 100;

  return (
    <section className="py-20 bg-gradient-section">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-medium uppercase tracking-widest text-sm mb-4">
            Sua Aventura
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            Pontos Turísticos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Marque os pontos que você já visitou e acompanhe seu progresso na exploração do parque
          </p>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto mb-4">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Progresso da visita</span>
              <span>{Math.round(progress)}% concluído</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              {visitedPoints.length} de {touristPoints.length} pontos visitados
            </p>
          </div>
        </div>

        {/* Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {touristPoints.map((point) => {
            const isVisited = visitedPoints.includes(point.id);
            return (
              <div
                key={point.id}
                className={`card-natural overflow-hidden cursor-pointer transition-all duration-300 ${
                  isVisited ? "ring-2 ring-secondary" : ""
                }`}
                onClick={() => toggleVisited(point.id)}
              >
                <div className="relative h-40">
                  <img
                    src={point.image}
                    alt={point.name}
                    className={`w-full h-full object-cover transition-all duration-300 ${
                      isVisited ? "grayscale-0" : "grayscale"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 transition-colors duration-300 ${
                      isVisited ? "bg-secondary/20" : "bg-muted/50"
                    }`}
                  />
                  
                  {/* Checkbox */}
                  <div
                    className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isVisited
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-background/80 text-muted-foreground"
                    }`}
                  >
                    {isVisited ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <MapPin className="h-4 w-4" />
                    )}
                  </div>
                </div>

                <div className="p-4">
                  <h3
                    className={`font-display font-semibold mb-1 transition-colors ${
                      isVisited ? "text-secondary" : "text-foreground"
                    }`}
                  >
                    {point.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {point.description}
                  </p>
                  <p className="text-xs text-primary mt-2 font-medium">
                    {isVisited ? "✓ Visitado" : "Clique para marcar"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TouristPointsSection;
