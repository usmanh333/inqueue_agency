// src/App.js
import React from "react";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./TestimonialsSection";

const Main = () => {
  return (
    <div className="py-24">
      <main className="flex flex-col gap-5 justify-center">
         <HeroSection />
        <ProjectsSection />
        <ServicesSection />
        <TestimonialsSection />
      </main>
    </div>
  );
};

export default Main;
