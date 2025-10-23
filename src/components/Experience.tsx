import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const Experience = () => {
  const companies = [
    {
      name: "SAP España",
      role: "Preventa Especialista en Analytics",
      period: "2022 - Actualidad",
      description: "Liderar demos y workshops de soluciones analíticas de SAP para clientes enterprise. Diseño de arquitecturas de soluciones BI/Analytics.",
      achievements: [
        "Realización de pruebas de concepto y demostraciones técnicas",
        "Capacitación de partners y clientes respecto a las soluciones SAP BDC",
        "Especialización en SAP Business Data Cloud"
      ],
      //logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop"
      logo: "https://news.sap.com/spain/files/2024/02/21/PICASSO-1024x462-1.jpg"
    },
    {
      name: "Keytree",
      role: "Specialist Lead",
      period: "2021 - 2022",
      description: "Lider del equipo de SAP Analytics dando soporte a los clientes de Keytree",
      achievements: [
        "Responsable del equipo de analítica de Keytree",
        "Implementación de soluciones de analítica de SAP",
        "Proyecto de SAP Analytics Cloud Planning"
      ],
      logo: "https://img.europapress.es/fotoweb/fotonoticia_20200930174945_1200.jpg"
    },
    {
      name: "SDG Group",
      role: "Senior SAP Analytics Consultant",
      period: "2015 - 2021",
      description: "Desarrollo e implementación de soluciones de reporting y analytics para grandes corporaciones, migraciones BW a BW/4HANA.",
      achievements: [
        "Gestión de equipos multidisciplinares y multitecnológicos",
        "Lider de proyectos complejos de integración de múltiples fuentes de datosd",
        "Amplio conocimiento técnico de las soluciones SAP: SAP Hana, SAP BW, SAP BO Suite y SAP Analytics Cloud"
      ],
      //logo: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=200&h=200&fit=crop"
      logo: "https://www.sdggroup.com/hubfs/Imported_Blog_Media/SDG_Group_oficinas_1280x720.jpg"
    },
    {
      name: "Stratesys",
      role: "ABAP Developer",
      period: "2013 - 2015",
      description: "Analista programador en el módulo funcional RRHH: PA, PY, OM, PD, entre otros, para un gran cliente del sector energético",
      achievements: [
        "Responsable de la gestión, desarrollo y mantenimiento de roles de SAP R3 mediante objetos de RR. HH",
        "Programación ABAP y tareas funcionales",
        "Relación directa con el cliente para la gestión de requisitos y su formación"
      ],
      logo: "https://www.stratesys-ts.com/wp-content/uploads/2020/08/Art-vuelta-segura-a-la-oficina-1006x606.jpg"
    },
    {
      name: "Roadmap Consulting",
      role: "ABAP Developer",
      period: "2010 - 2013",
      description: "Desarrollador ABAP en multiples clientes y módulos funcionales de SAP R3",
      achievements: [
        "Programador ABAP en diferentes módulos funcionales de SAP R3",
        "Colaborador en grandes implantaciones de sistemas",
        "Instructor de certificación SAP Development Associate ABAP with SAP NetWeaver 7.31"
      ],
      logo: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=200&h=200&fit=crop"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experiencia <span className="gradient-text">Profesional</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Mi trayectoria en el mundo SAP
          </p>
        </div>

        <div className="space-y-8">
          {companies.map((company, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-glow transition-all duration-300 border-border bg-card"
            >
              <div className="md:flex">
                <div className="md:w-48 h-48 md:h-auto relative overflow-hidden bg-muted">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="w-5 h-5 text-primary" />
                        <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                          {company.name}
                        </h3>
                      </div>
                      <p className="text-lg text-primary font-medium mb-2">
                        {company.role}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{company.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {company.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">Logros destacados:</p>
                    <ul className="space-y-1">
                      {company.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
