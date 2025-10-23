import { PresentationIcon, BarChart3, Lightbulb } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: PresentationIcon,
      title: "Preventa Técnica",
      description: "Demostración de soluciones de analítica e inteligencia artificial con tecnologías SAP adaptadas a necesidades de negocio"
    },
    {
      icon: BarChart3,
      title: "Análisis de Datos",
      description: "Diseño de arquitecturas de datos y soluciones analíticas que impulsan la toma de decisiones estratégicas"
    },
    {
      icon: Lightbulb,
      title: "Soporte en los procesos de venta",
      description: "Implicación en los procesos de venta, desde la presentación de la solución hasta la entrega del producto final"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="gradient-text">Mí</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Especialista en preventas SAP con expertise en soluciones de analítica empresarial, ayudando a organizaciones a descubrir el valor de sus datos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
