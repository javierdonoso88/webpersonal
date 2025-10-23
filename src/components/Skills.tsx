import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "SAP Analytics",
      skills: ["SAP Business Data Cloud", "SAP Datasphere", "SAP Analytics Cloud", "BW/4HANA", "SAP HANA"]
    },
    {
      category: "Tecnologías BI",
      skills: ["Data Modeling", "CDS Views", "Visualization", "ABAP", "SQL", "ETL", "Data Warehouse"]
    },
    {
      category: "Preventa",
      skills: ["Demos Técnicas", "Workshops", "Proof of Concept", "Arquitecturas Solución", "Eventos", "RFP/RFI"]
    },
    {
      category: "Metodologías",
      skills: ["Design Thinking", "Agile SAFe", "Value Discovery", "Business Cases", "Storytelling", "Presentaciones Ejecutivas"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Habilidades & <span className="gradient-text">Tecnologías</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Herramientas y tecnologías que domino
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 gradient-text">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default border border-border"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
