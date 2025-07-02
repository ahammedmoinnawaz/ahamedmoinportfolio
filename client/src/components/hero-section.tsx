import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-animated flex items-center justify-center overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        <div className="particle w-2 h-2" style={{ top: "10%", left: "10%", animationDelay: "0s" }}></div>
        <div className="particle w-3 h-3" style={{ top: "20%", left: "80%", animationDelay: "1s" }}></div>
        <div className="particle w-2 h-2" style={{ top: "70%", left: "20%", animationDelay: "2s" }}></div>
        <div className="particle w-4 h-4" style={{ top: "60%", left: "90%", animationDelay: "3s" }}></div>
        <div className="particle w-2 h-2" style={{ top: "30%", left: "60%", animationDelay: "4s" }}></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <div className="animate-fade-in">
          {/* Professional headshot placeholder */}
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
              alt="Ahammed Moin Nawaz - Professional Headshot" 
              className="w-40 h-40 rounded-full mx-auto shadow-2xl border-4 border-white/20"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{personalInfo.name}</h1>
          <h2 className="text-2xl md:text-3xl font-light mb-6">{personalInfo.title}</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {personalInfo.objective}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-royal-blue hover:bg-gray-100 font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
              onClick={() => window.open('mailto:ahammedmoinnawaz@gmail.com?subject=Resume Request', '_blank')}
            >
              Request Resume
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#projects")}
              className="border-2 border-white text-white hover:bg-white hover:text-royal-blue font-semibold transform hover:scale-105 transition-all duration-200"
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce-slow">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
