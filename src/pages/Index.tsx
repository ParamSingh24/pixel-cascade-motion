
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import CaseStudySection from "@/components/CaseStudySection";
import ClientShowcase from "@/components/ClientShowcase";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import ServicesSection from "@/components/ServicesSection";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      {/* Dark/Light Mode Toggle */}
      <Button
        onClick={toggleDarkMode}
        variant="outline"
        size="icon"
        className="fixed top-6 right-6 z-50 bg-white dark:bg-black border-gray-300 dark:border-gray-700"
      >
        {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>

      {/* Hero Section */}
      <HeroSection />
      
      {/* Case Study Section */}
      <CaseStudySection />
      
      {/* Client Showcase */}
      <ClientShowcase />
      
      {/* Projects Carousel */}
      <ProjectsCarousel />
      
      {/* Services Section */}
      <ServicesSection />

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Index;
