import { useRef } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CitiesSection from "@/components/CitiesSection";
import ArchaeologySection from "@/components/ArchaeologySection";
import TouristPointsSection from "@/components/TouristPointsSection";
import FaunaFloraSection from "@/components/FaunaFloraSection";
import MyVisitSection from "@/components/MyVisitSection";
import QuizSection from "@/components/QuizSection";
import Footer from "@/components/Footer";

const sections = [
  { id: "sobre", label: "Sobre" },
  { id: "cidades", label: "As Cidades" },
  { id: "arqueologia", label: "Arqueologia" },
  { id: "pontos", label: "Pontos Turísticos" },
  { id: "biodiversidade", label: "Fauna & Flora" },
  { id: "minha-visita", label: "Minha Visita" },
  { id: "quiz", label: "Quiz" },
];

const Index = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  const handleStartVisit = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation sections={sections} />
      
      <section id="hero">
        <HeroSection onStartVisit={handleStartVisit} />
      </section>
      
      <section id="sobre" ref={aboutRef}>
        <AboutSection />
      </section>
      
      <section id="cidades">
        <CitiesSection />
      </section>
      
      <section id="arqueologia">
        <ArchaeologySection />
      </section>
      
      <section id="pontos">
        <TouristPointsSection />
      </section>
      
      <section id="biodiversidade">
        <FaunaFloraSection />
      </section>
      
      <section id="minha-visita">
        <MyVisitSection />
      </section>
      
      <section id="quiz">
        <QuizSection />
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
