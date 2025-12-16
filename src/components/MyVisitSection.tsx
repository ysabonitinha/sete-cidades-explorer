import { useEffect, useState } from "react";
import { Map, Trophy, Clock, Star } from "lucide-react";

const STORAGE_KEY = "sete-cidades-visited";
const TOTAL_POINTS = 8;

const MyVisitSection = () => {
  const [visitedCount, setVisitedCount] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const visited = JSON.parse(saved);
      setVisitedCount(visited.length);
    }
  }, []);

  const progress = (visitedCount / TOTAL_POINTS) * 100;

  const getMessage = () => {
    if (visitedCount === 0) {
      return "Sua aventura está apenas começando! Explore os pontos turísticos e marque sua visita.";
    } else if (visitedCount < TOTAL_POINTS / 2) {
      return `Ótimo progresso! Você já explorou ${visitedCount} de ${TOTAL_POINTS} pontos do parque.`;
    } else if (visitedCount < TOTAL_POINTS) {
      return `Quase lá! Faltam apenas ${TOTAL_POINTS - visitedCount} pontos para completar sua visita.`;
    } else {
      return "Parabéns! Você completou a visita virtual ao Parque Nacional de Sete Cidades!";
    }
  };

  const getLevel = () => {
    if (visitedCount === 0) return "Iniciante";
    if (visitedCount <= 2) return "Explorador";
    if (visitedCount <= 5) return "Aventureiro";
    if (visitedCount < TOTAL_POINTS) return "Descobridor";
    return "Mestre Explorador";
  };

  return (
    <section className="py-20 bg-card">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-medium uppercase tracking-widest text-sm mb-4">
              Sua Jornada
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
              Minha Visita
            </h2>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="card-natural p-4 text-center">
              <Map className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-display font-bold text-foreground">
                {visitedCount}
              </p>
              <p className="text-xs text-muted-foreground">Pontos Visitados</p>
            </div>
            <div className="card-natural p-4 text-center">
              <Trophy className="h-8 w-8 text-accent mx-auto mb-2" />
              <p className="text-2xl font-display font-bold text-foreground">
                {Math.round(progress)}%
              </p>
              <p className="text-xs text-muted-foreground">Concluído</p>
            </div>
            <div className="card-natural p-4 text-center">
              <Clock className="h-8 w-8 text-secondary mx-auto mb-2" />
              <p className="text-2xl font-display font-bold text-foreground">
                {TOTAL_POINTS - visitedCount}
              </p>
              <p className="text-xs text-muted-foreground">Restantes</p>
            </div>
            <div className="card-natural p-4 text-center">
              <Star className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-lg font-display font-bold text-foreground">
                {getLevel()}
              </p>
              <p className="text-xs text-muted-foreground">Seu Nível</p>
            </div>
          </div>

          {/* Message Card */}
          <div className="card-natural p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-6 flex items-center justify-center">
              {visitedCount === TOTAL_POINTS ? (
                <Trophy className="h-10 w-10 text-primary-foreground" />
              ) : (
                <Map className="h-10 w-10 text-primary-foreground" />
              )}
            </div>
            
            <h3 className="font-display text-xl md:text-2xl text-foreground mb-4">
              {visitedCount === TOTAL_POINTS
                ? "Explorador Completo!"
                : `Você já explorou ${visitedCount} de ${TOTAL_POINTS} pontos`}
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              {getMessage()}
            </p>

            {/* Progress Ring */}
            <div className="relative w-32 h-32 mx-auto">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="hsl(var(--muted))"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${progress * 2.83} 283`}
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-2xl font-bold text-foreground">
                  {Math.round(progress)}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyVisitSection;
