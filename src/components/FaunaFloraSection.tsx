import { useState } from "react";
import { Leaf, Bird } from "lucide-react";
import loboGuara from "@/assets/fauna-lobo-guara.jpg";
import floraIpe from "@/assets/flora-ipe.jpg";

type FilterType = "all" | "fauna" | "flora";

interface Species {
  id: number;
  name: string;
  scientificName: string;
  description: string;
  type: "fauna" | "flora";
  image: string;
}

const species: Species[] = [
  {
    id: 1,
    name: "Lobo-guará",
    scientificName: "Chrysocyon brachyurus",
    description: "O maior canídeo da América do Sul, símbolo do cerrado brasileiro",
    type: "fauna",
    image: loboGuara,
  },
  {
    id: 2,
    name: "Ipê-amarelo",
    scientificName: "Handroanthus albus",
    description: "Árvore símbolo do Brasil, floresce espetacularmente entre julho e setembro",
    type: "flora",
    image: floraIpe,
  },
  {
    id: 3,
    name: "Seriema",
    scientificName: "Cariama cristata",
    description: "Ave terrestre conhecida por seu canto característico que ecoa pelo cerrado",
    type: "fauna",
    image: loboGuara,
  },
  {
    id: 4,
    name: "Pequizeiro",
    scientificName: "Caryocar brasiliense",
    description: "Árvore típica do cerrado, produz o famoso pequi usado na culinária regional",
    type: "flora",
    image: floraIpe,
  },
  {
    id: 5,
    name: "Tatu-bola",
    scientificName: "Tolypeutes tricinctus",
    description: "Endêmico da caatinga, capaz de se enrolar completamente em uma bola",
    type: "fauna",
    image: loboGuara,
  },
  {
    id: 6,
    name: "Buriti",
    scientificName: "Mauritia flexuosa",
    description: "Palmeira que indica presença de água, suas veredas são oásis no cerrado",
    type: "flora",
    image: floraIpe,
  },
  {
    id: 7,
    name: "Ema",
    scientificName: "Rhea americana",
    description: "A maior ave das Américas, não voa mas corre a até 60 km/h",
    type: "fauna",
    image: loboGuara,
  },
  {
    id: 8,
    name: "Cagaita",
    scientificName: "Eugenia dysenterica",
    description: "Frutífera nativa com frutos doces e ácidos, importante na alimentação da fauna",
    type: "flora",
    image: floraIpe,
  },
];

const FaunaFloraSection = () => {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredSpecies = species.filter(
    (s) => filter === "all" || s.type === filter
  );

  return (
    <section className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-medium uppercase tracking-widest text-sm mb-4">
            Biodiversidade
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            Fauna e Flora do Cerrado
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            O parque abriga uma rica diversidade de espécies típicas do cerrado brasileiro
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-3 flex-wrap">
            <button
              onClick={() => setFilter("all")}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                filter === "all"
                  ? "bg-primary text-primary-foreground shadow-medium"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFilter("fauna")}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                filter === "fauna"
                  ? "bg-primary text-primary-foreground shadow-medium"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              <Bird className="h-4 w-4" />
              Fauna
            </button>
            <button
              onClick={() => setFilter("flora")}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                filter === "flora"
                  ? "bg-primary text-primary-foreground shadow-medium"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              <Leaf className="h-4 w-4" />
              Flora
            </button>
          </div>
        </div>

        {/* Species Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSpecies.map((item, index) => (
            <div
              key={item.id}
              className="card-natural overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                      item.type === "fauna"
                        ? "bg-primary/90 text-primary-foreground"
                        : "bg-secondary/90 text-secondary-foreground"
                    }`}
                  >
                    {item.type === "fauna" ? (
                      <Bird className="h-3 w-3" />
                    ) : (
                      <Leaf className="h-3 w-3" />
                    )}
                    {item.type === "fauna" ? "Fauna" : "Flora"}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {item.name}
                </h3>
                <p className="text-xs text-primary italic mb-2">
                  {item.scientificName}
                </p>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaunaFloraSection;
