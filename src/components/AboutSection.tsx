import { useState } from "react";
import { ChevronDown, MapPin, Calendar, Ruler } from "lucide-react";

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const stats = [
    { icon: MapPin, label: "Localização", value: "Piauí, Brasil" },
    { icon: Calendar, label: "Criado em", value: "1961" },
    { icon: Ruler, label: "Área Total", value: "6.221 ha" },
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-primary font-medium uppercase tracking-widest text-sm mb-4">
            Sobre o Parque
          </span>
          
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
            Um Tesouro Geológico e Cultural
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            O Parque Nacional de Sete Cidades é uma das mais importantes unidades de conservação do Brasil, 
            localizado no nordeste do estado do Piauí. Suas formações rochosas, esculpidas ao longo de 
            milhões de anos pela erosão, criam paisagens surreais que desafiam a imaginação.
          </p>

          {/* Expandable Content */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-out ${
              isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="text-muted-foreground leading-relaxed space-y-4 pb-6">
              <p>
                Criado em 1961, o parque abriga um dos mais importantes acervos de pinturas rupestres 
                pré-históricas das Américas, com registros que datam de até 6.000 anos. Estas inscrições 
                misteriosas continuam intrigando arqueólogos e visitantes de todo o mundo.
              </p>
              <p>
                A vegetação do parque é característica do cerrado, com árvores retorcidas, gramíneas 
                e uma rica biodiversidade de fauna e flora. O clima semiárido e a geologia única criaram 
                um ecossistema singular, onde a vida se adaptou às condições extremas.
              </p>
              <p>
                As "sete cidades" são conjuntos de formações rochosas que, devido à sua disposição e 
                formas peculiares, receberam esse nome dos primeiros exploradores. Cada "cidade" 
                apresenta monumentos naturais que lembram figuras humanas, animais e construções antigas.
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex items-center gap-2 mx-auto text-primary font-medium hover:text-primary/80 transition-colors"
          >
            {isExpanded ? "Ler menos" : "Ler mais sobre o parque"}
            <ChevronDown
              className={`h-5 w-5 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="card-natural p-6 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">
                  {stat.label}
                </p>
                <p className="text-xl font-display font-semibold text-foreground">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
