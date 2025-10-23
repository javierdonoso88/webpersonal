import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in">
        <div className="inline-block mb-4 px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">
          👋 Bienvenido a mi portfolio profesional
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Hola, soy{" "}
          <span className="gradient-text">
            Javier Donoso
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Preventas Senior SAP Business Data Cloud | Ayudando a nuestros cliente a descubrir el valor de sus datos
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 shadow-glow transition-all hover:scale-105"
          >
            Contactar
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-primary/50 hover:bg-primary/10"
          >
            Ver Experiencia
          </Button>
        </div>

        <div className="mt-16 animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
