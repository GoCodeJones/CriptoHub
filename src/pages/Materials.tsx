import { Link } from "react-router-dom";
import VideoCarousel from "@/components/VideoCarousel";
import { articles, externalResources } from "@/data/content";

const Materials = () => (
  <div className="mx-auto max-w-6xl px-6 py-16 space-y-20">
    <h1 className="text-4xl font-bold text-foreground">MATERIAIS</h1>

    {/* Vídeos */}
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Vídeos</h2>
      <VideoCarousel />
    </section>

    {/* Leitura Obrigatória */}
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">
        Leitura Obrigatória
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <div
            key={article.slug}
            className="rounded-2xl border border-border p-6 space-y-4 hover:border-primary transition-colors"
          >
            <h3 className="text-lg font-semibold text-foreground">
              {article.title}
            </h3>

            <p className="text-sm text-muted-foreground">
              {article.description}
            </p>

            <Link
              to={`/docs/${article.slug}`}
              className="inline-block rounded-2xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Ler
            </Link>
          </div>
        ))}
      </div>
    </section>

    {/* Materiais Complementares */}
    {externalResources.map((group) => (
      <section key={group.category} className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">
          {group.category}
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {group.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-border p-6 space-y-4 hover:border-primary transition-colors"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {link.title}
              </h3>

              <p className="text-sm text-muted-foreground">
                {link.description}
              </p>

              <span className="inline-block text-sm font-medium text-primary">
                Acessar →
              </span>
            </a>
          ))}
        </div>
      </section>
    ))}
  </div>
);

export default Materials;