import { Link } from "react-router-dom";
import VideoCarousel from "@/components/VideoCarousel";
import { articles } from "@/data/content";

const Materials = () => (
  <div className="mx-auto max-w-6xl px-6 py-16 space-y-16">
    <h1 className="text-4xl font-bold text-foreground">MATERIAIS</h1>

    {/* Carrossel de Vídeos */}
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Vídeos</h2>
      <VideoCarousel />
    </section>

    {/* Leitura Obrigatória */}
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Leitura Obrigatória</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <div
            key={article.slug}
            className="rounded-2xl border border-border p-6 transition-colors hover:border-primary space-y-4"
          >
            <h3 className="text-lg font-semibold text-foreground">{article.title}</h3>
            <p className="text-sm text-muted-foreground">{article.description}</p>
            <div className="flex gap-3">
              <Link
                to={`/docs/${article.slug}`}
                className="rounded-2xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Ler
              </Link>
              <button className="rounded-2xl border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary">
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Materials;
