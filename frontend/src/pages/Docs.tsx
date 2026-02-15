import { Link } from "react-router-dom";
import { articles } from "@/data/content";

const Docs = () => (
  <div className="mx-auto max-w-6xl px-6 py-16 space-y-8">
    <h1 className="text-4xl font-bold text-foreground">DOCS</h1>
    <div className="space-y-4">
      {articles.map((article) => (
        <div
          key={article.slug}
          className="flex items-center justify-between rounded-2xl border border-border p-6 transition-colors hover:border-primary"
        >
          <div>
            <h2 className="text-lg font-semibold text-foreground">{article.title}</h2>
            <p className="text-sm text-muted-foreground">{article.description}</p>
          </div>
          <Link
            to={`/docs/${article.slug}`}
            className="shrink-0 rounded-2xl bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Abrir
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default Docs;
