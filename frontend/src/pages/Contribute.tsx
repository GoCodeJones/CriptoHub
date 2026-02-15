const Contribute = () => (
  <div className="mx-auto max-w-6xl px-6 py-16 space-y-8">
    <h1 className="text-4xl font-bold text-foreground">Contribuir</h1>
    <p className="text-muted-foreground leading-relaxed max-w-2xl">
      Se o CriptoHub te ajudou de alguma forma, considere apoiar o projeto.
      Qualquer contribuição ajuda a manter o conteúdo atualizado e acessível
      para todos.
    </p>
    <div className="space-y-3">
      <p className="text-sm font-medium text-foreground">Endereço BTC:</p>
      <div className="rounded-xl bg-secondary p-4">
        <code className="text-sm font-mono text-primary break-all">
          bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
        </code>
      </div>
    </div>
  </div>
);

export default Contribute;
