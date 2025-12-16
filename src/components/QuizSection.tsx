import { useState } from "react";
import { CheckCircle, XCircle, RotateCcw, Award, BookOpen } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Em que ano foi criado o Parque Nacional de Sete Cidades?",
    options: ["1951", "1961", "1971", "1981"],
    correctAnswer: 1,
    explanation: "O parque foi criado em 1961, sendo uma das primeiras unidades de conservação do Nordeste brasileiro.",
  },
  {
    id: 2,
    question: "Qual é a idade estimada das pinturas rupestres encontradas no parque?",
    options: ["1.000 anos", "3.000 anos", "6.000 anos", "10.000 anos"],
    correctAnswer: 2,
    explanation: "As pinturas rupestres do parque são datadas de aproximadamente 6.000 anos, representando um valioso patrimônio arqueológico.",
  },
  {
    id: 3,
    question: "Qual bioma predomina no Parque Nacional de Sete Cidades?",
    options: ["Mata Atlântica", "Cerrado", "Caatinga", "Amazônia"],
    correctAnswer: 1,
    explanation: "O parque está localizado em uma zona de transição, mas o cerrado é o bioma predominante, com suas características árvores retorcidas e vegetação adaptada ao clima semiárido.",
  },
];

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (index: number) => {
    if (showResult) return;
    
    setSelectedAnswer(index);
    setShowResult(true);
    
    if (index === questions[currentQuestion].correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <section className="py-20 bg-gradient-section">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-medium uppercase tracking-widest text-sm mb-4">
              Educação Patrimonial
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
              Teste Seus Conhecimentos
            </h2>
            <p className="text-muted-foreground">
              Aprenda mais sobre o Parque Nacional de Sete Cidades respondendo este quiz educativo
            </p>
          </div>

          <div className="card-natural p-6 md:p-8">
            {!quizCompleted ? (
              <>
                {/* Progress */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-muted-foreground">
                    Pergunta {currentQuestion + 1} de {questions.length}
                  </span>
                  <span className="text-sm font-medium text-primary">
                    Pontuação: {score}/{questions.length}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="h-2 bg-muted rounded-full mb-8">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-300"
                    style={{
                      width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                    }}
                  />
                </div>

                {/* Question */}
                <h3 className="font-display text-xl md:text-2xl text-foreground mb-6">
                  {question.question}
                </h3>

                {/* Options */}
                <div className="space-y-3 mb-6">
                  {question.options.map((option, index) => {
                    let buttonClass =
                      "w-full p-4 text-left rounded-xl border-2 transition-all duration-300 ";

                    if (showResult) {
                      if (index === question.correctAnswer) {
                        buttonClass +=
                          "border-secondary bg-secondary/10 text-foreground";
                      } else if (index === selectedAnswer) {
                        buttonClass +=
                          "border-destructive bg-destructive/10 text-foreground";
                      } else {
                        buttonClass += "border-border bg-muted/30 text-muted-foreground";
                      }
                    } else {
                      buttonClass +=
                        selectedAnswer === index
                          ? "border-primary bg-primary/10 text-foreground"
                          : "border-border hover:border-primary/50 hover:bg-muted/50 text-foreground";
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        disabled={showResult}
                        className={buttonClass}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
                            {String.fromCharCode(65 + index)}
                          </span>
                          <span>{option}</span>
                          {showResult && index === question.correctAnswer && (
                            <CheckCircle className="h-5 w-5 text-secondary ml-auto" />
                          )}
                          {showResult &&
                            index === selectedAnswer &&
                            index !== question.correctAnswer && (
                              <XCircle className="h-5 w-5 text-destructive ml-auto" />
                            )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Feedback */}
                {showResult && (
                  <div
                    className={`p-4 rounded-xl mb-6 animate-fade-in ${
                      isCorrect
                        ? "bg-secondary/10 border border-secondary/30"
                        : "bg-destructive/10 border border-destructive/30"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {isCorrect ? (
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      )}
                      <div>
                        <p className="font-medium text-foreground mb-1">
                          {isCorrect ? "Correto!" : "Resposta incorreta"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {question.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Next Button */}
                {showResult && (
                  <button onClick={nextQuestion} className="btn-terracotta w-full">
                    {currentQuestion < questions.length - 1
                      ? "Próxima Pergunta"
                      : "Ver Resultado"}
                  </button>
                )}
              </>
            ) : (
              /* Quiz Completed */
              <div className="text-center py-8 animate-fade-in">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-6 flex items-center justify-center">
                  <Award className="h-12 w-12 text-primary-foreground" />
                </div>
                
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                  Quiz Concluído!
                </h3>
                
                <p className="text-4xl font-display font-bold text-primary mb-4">
                  {score} / {questions.length}
                </p>
                
                <p className="text-muted-foreground mb-8">
                  {score === questions.length
                    ? "Excelente! Você é um verdadeiro conhecedor do Parque Nacional de Sete Cidades!"
                    : score >= questions.length / 2
                    ? "Muito bem! Continue explorando e aprendendo sobre nosso patrimônio natural."
                    : "Continue estudando! A preservação começa com o conhecimento."}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={resetQuiz}
                    className="btn-terracotta flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="h-5 w-5" />
                    Tentar Novamente
                  </button>
                </div>

                {/* Educational Message */}
                <div className="mt-8 p-6 bg-muted/50 rounded-xl text-left">
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground mb-2">
                        Educação Patrimonial
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        A preservação do Parque Nacional de Sete Cidades depende de todos nós. 
                        Ao visitar, siga as trilhas demarcadas, não toque nas pinturas rupestres 
                        e ajude a manter este patrimônio para as futuras gerações. O conhecimento 
                        é o primeiro passo para a conservação.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
