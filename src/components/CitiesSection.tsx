import { useState } from "react";
import { X, ChevronRight, Mountain } from "lucide-react";
import heroImage from "@/assets/hero-sete-cidades.jpg";
import pedraTartaruga from "@/assets/pedra-tartaruga.jpg";
import arcoTriunfo from "@/assets/arco-triunfo.jpg";
import biblioteca from "@/assets/biblioteca.jpg";

interface City {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
}

const cities: City[] = [
  {
    id: 1,
    name: "Primeira Cidade",
    subtitle: "Portal de Entrada",
    description: "A Primeira Cidade é o ponto de partida da jornada pelo parque. Aqui encontramos as primeiras formações rochosas impressionantes, incluindo a famosa Pedra do Cachorro e o Portal de Entrada, uma estrutura natural que parece marcar a transição para outro mundo.",
    image: heroImage,
    highlights: ["Pedra do Cachorro", "Portal Natural", "Vista Panorâmica"],
  },
  {
    id: 2,
    name: "Segunda Cidade",
    subtitle: "O Arco do Triunfo",
    description: "A Segunda Cidade abriga uma das formações mais fotografadas do parque: o Arco do Triunfo. Esta impressionante estrutura natural lembra o famoso monumento parisiense e é testemunha do poder da erosão ao longo de milhões de anos.",
    image: arcoTriunfo,
    highlights: ["Arco do Triunfo", "Formações Colunares", "Mirantes"],
  },
  {
    id: 3,
    name: "Terceira Cidade",
    subtitle: "A Biblioteca",
    description: "Conhecida como a Biblioteca, esta cidade apresenta formações que lembram prateleiras repletas de livros antigos. As camadas horizontais de arenito criaram essa ilusão fascinante que encanta visitantes e geólogos.",
    image: biblioteca,
    highlights: ["A Biblioteca", "Estratificação Rochosa", "Fósseis"],
  },
  {
    id: 4,
    name: "Quarta Cidade",
    subtitle: "Pedra da Tartaruga",
    description: "A estrela desta cidade é a incrível Pedra da Tartaruga, uma formação que reproduz com perfeição a silhueta de uma tartaruga gigante. É um dos cartões-postais mais emblemáticos do parque.",
    image: pedraTartaruga,
    highlights: ["Pedra da Tartaruga", "Trilha Ecológica", "Fauna Local"],
  },
  {
    id: 5,
    name: "Quinta Cidade",
    subtitle: "Cabeça de Dom Pedro I",
    description: "Esta cidade é famosa pela formação que lembra o perfil do imperador Dom Pedro I. A semelhança é tão impressionante que se tornou objeto de lendas e especulações sobre civilizações antigas.",
    image: heroImage,
    highlights: ["Cabeça de Dom Pedro I", "Vista do Vale", "Pinturas Rupestres"],
  },
  {
    id: 6,
    name: "Sexta Cidade",
    subtitle: "O Elefante",
    description: "A Sexta Cidade apresenta formações que lembram animais diversos, sendo a mais famosa a Pedra do Elefante. O conjunto forma um verdadeiro zoológico de pedra natural.",
    image: arcoTriunfo,
    highlights: ["Pedra do Elefante", "Formações Zoomórficas", "Cânions"],
  },
  {
    id: 7,
    name: "Sétima Cidade",
    subtitle: "Mirante Final",
    description: "A última cidade oferece uma vista panorâmica de todo o parque. É o ponto culminante da visita, onde se pode contemplar a grandiosidade deste patrimônio natural brasileiro.",
    image: biblioteca,
    highlights: ["Mirante Principal", "Vista 360°", "Pôr do Sol"],
  },
];

const CitiesSection = () => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (city: City) => {
    setSelectedCity(city);
    setCurrentIndex(cities.findIndex((c) => c.id === city.id));
  };

  const closeModal = () => {
    setSelectedCity(null);
  };

  const nextCity = () => {
    const nextIndex = (currentIndex + 1) % cities.length;
    setCurrentIndex(nextIndex);
    setSelectedCity(cities[nextIndex]);
  };

  return (
    <section className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-medium uppercase tracking-widest text-sm mb-4">
            Explore as Formações
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            As Sete Cidades
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada "cidade" é um conjunto único de formações rochosas esculpidas pela natureza ao longo de milhões de anos
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <button
              key={city.id}
              onClick={() => openModal(city)}
              className="card-natural group text-left overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-1 text-xs text-sand/80 uppercase tracking-wide">
                    <Mountain className="h-3 w-3" />
                    Cidade {city.id}
                  </span>
                  <h3 className="font-display text-xl text-sand font-semibold">
                    {city.name}
                  </h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {city.subtitle} — {city.description.slice(0, 80)}...
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCity && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brown/80 backdrop-blur-sm animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl bg-card rounded-2xl overflow-hidden shadow-strong animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
            >
              <X className="h-5 w-5 text-foreground" />
            </button>

            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 md:h-full min-h-[300px]">
                <img
                  src={selectedCity.image}
                  alt={selectedCity.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20 md:to-card/50" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <span className="inline-block text-primary text-sm font-medium uppercase tracking-wide mb-2">
                  Cidade {selectedCity.id} de 7
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                  {selectedCity.name}
                </h3>
                <p className="text-primary font-medium mb-4">
                  {selectedCity.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {selectedCity.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground uppercase tracking-wide mb-3">
                    Destaques
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCity.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Next Button */}
                <button
                  onClick={nextCity}
                  className="btn-olive flex items-center gap-2 w-full justify-center"
                >
                  Próximo Ponto
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CitiesSection;
