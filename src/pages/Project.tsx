const Project = () => (
  <div className="mx-auto max-w-6xl px-6 py-16 space-y-8">
    <h1 className="text-4xl font-bold text-foreground">Projeto</h1>
    <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl">
      <p>
        O CriptoHub é um projeto open source. Se você é desenvolvedor e quer
        contribuir com código, correções ou novos conteúdos, fique à vontade.
      </p>
      <p>
        Abra uma issue, envie um pull request ou entre em contato diretamente.
        Toda contribuição é bem-vinda.
      </p>
    </div>
    <a
      href="https://github.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-2xl bg-primary px-8 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
    >
      Enviar contribuição
    </a>
  </div>
);

export default Project;
