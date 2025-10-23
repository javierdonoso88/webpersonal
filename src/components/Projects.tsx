import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Implementación SAP S/4HANA",
      description: "Migración completa de SAP ECC a S/4HANA para empresa multinacional del sector retail",
      tags: ["S/4HANA", "MM", "SD", "Migration"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
    },
    {
      title: "Optimización Cadena de Suministro",
      description: "Implementación de módulos MM y WM con integración EDI para mejorar la gestión logística",
      tags: ["SAP MM", "SAP WM", "EDI", "Logistics"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop"
    },
    {
      title: "Sistema Financiero Integrado",
      description: "Configuración de módulos FI/CO con reportes personalizados y consolidación financiera",
      tags: ["SAP FI", "SAP CO", "Reporting", "ABAP"],
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop"
    },
    {
      title: "Proyecto SAP Ariba",
      description: "Implementación de SAP Ariba para automatización de procesos de compras y gestión de proveedores",
      tags: ["SAP Ariba", "Procurement", "SRM"],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop"
    },
    {
      title: "SAP SuccessFactors HR",
      description: "Despliegue completo de SuccessFactors para gestión de talento y nómina en empresa de 5000+ empleados",
      tags: ["SuccessFactors", "HR", "Payroll", "Cloud"],
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=500&fit=crop"
    },
    {
      title: "SAP Analytics Cloud",
      description: "Desarrollo de dashboards ejecutivos y reportes predictivos con SAC e integración BW/4HANA",
      tags: ["SAP SAC", "BW/4HANA", "Analytics", "BI"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proyectos <span className="gradient-text">Destacados</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Algunos de mis trabajos más recientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-glow transition-all duration-300 border-border bg-card"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-4 pb-4">
                  <button className="p-2 bg-primary rounded-full hover:bg-primary/90 transition-colors">
                    <ExternalLink className="w-5 h-5 text-primary-foreground" />
                  </button>
                  <button className="p-2 bg-card rounded-full hover:bg-muted transition-colors">
                    <Github className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-muted hover:bg-primary/20 border border-border"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
