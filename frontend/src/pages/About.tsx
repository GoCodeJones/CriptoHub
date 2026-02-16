const About = () => {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="flex flex-col items-center gap-8">
        <div className="h-48 w-48 rounded-2xl border-4 border-primary bg-muted">
          <img src="https://via.placeholder.com/300" alt="Autor" className="h-full w-full object-cover" />
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-foreground text-center">Sobre o Autor</h1>
          
          <div className="space-y-4 text-muted-foreground">
            <p>Olá! Meu nome é Seu Nome e sou apaixonado por criptomoedas.</p>
            <p>Criei o CriptoHub para compartilhar conhecimento sobre cripto.</p>
          </div>

          <div className="flex gap-4 justify-center">
            <a href="https://github.com/GoCodeJones" className="border border-border px-6 py-2 rounded-2xl">GitHub</a>
            <a href="mailto:contato@exemplo.com" className="border border-border px-6 py-2 rounded-2xl">Email</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;