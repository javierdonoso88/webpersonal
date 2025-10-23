import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Opción 1: Formspree (reemplaza 'YOUR_FORM_ID' con tu ID de Formspree)
      const response = await fetch('https://formspree.io/f/meoryepb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "¡Mensaje enviado!",
          description: "Gracias por contactarme. Te responderé pronto.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      // Fallback: usar mailto si Formspree falla
      const subject = `Mensaje de ${formData.name}`;
      const body = `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`;
      const mailtoLink = `mailto:javier.donoso.diez@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      window.location.href = mailtoLink;
      
      toast({
        title: "¡Redirigiendo a tu email!",
        description: "Se abrirá tu cliente de email con el mensaje pre-llenado.",
      });
    }
  };

  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:javier.donoso.diez@proton.me" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/javierdonosod/" },
  //  { icon: Github, label: "GitHub", href: "https://github.com" },
  //  { icon: Twitter, label: "Twitter", href: "https://twitter.com" }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Quieres saber <span className="gradient-text">más?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hablemos!
          </p>
        </div>

        <Card className="p-8 border-border bg-card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Tu nombre"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-muted border-border focus:border-primary"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-muted border-border focus:border-primary"
              />
            </div>
            <div>
              <Textarea
                placeholder="Tu mensaje"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="bg-muted border-border focus:border-primary min-h-[150px]"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
            >
              Enviar Mensaje
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-center text-muted-foreground mb-4">O encuéntrame en:</p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
