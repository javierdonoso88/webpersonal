const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Javier Donoso. Todos los derechos reservados.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Diseñado y desarrollado con ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
