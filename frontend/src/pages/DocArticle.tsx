import { useParams, Link } from "react-router-dom";
import { articles } from "@/data/content";

const DocArticle = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h1 className="text-2xl font-bold text-foreground">Artigo não encontrado</h1>
        <Link to="/docs" className="mt-4 inline-block text-primary hover:underline">
          Voltar para Docs
        </Link>
      </div>
    );
  }

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return <br key={i} />;
      if (trimmed.startsWith("# "))
        return <h1 key={i} className="text-3xl font-bold text-foreground mt-8 mb-4">{trimmed.slice(2)}</h1>;
      if (trimmed.startsWith("## "))
        return <h2 key={i} className="text-2xl font-bold text-foreground mt-6 mb-3">{trimmed.slice(3)}</h2>;
      if (trimmed.startsWith("- **")) {
        const match = trimmed.match(/^- \*\*(.+?)\*\*:?\s*(.*)$/);
        if (match) return <li key={i} className="ml-4 text-muted-foreground"><span className="font-semibold text-foreground">{match[1]}</span>: {match[2]}</li>;
      }
      if (trimmed.startsWith("- "))
        return <li key={i} className="ml-4 text-muted-foreground">{trimmed.slice(2)}</li>;
      if (/^\d+\./.test(trimmed))
        return <li key={i} className="ml-4 text-muted-foreground list-decimal">{trimmed.replace(/^\d+\.\s*/, "")}</li>;
      return <p key={i} className="text-muted-foreground leading-relaxed">{trimmed}</p>;
    });
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Link to="/docs" className="text-sm text-primary hover:underline">
        Voltar para Docs
      </Link>
      <div className="mt-8 space-y-1">{renderContent(article.content)}</div>
    </div>
  );
};

export default DocArticle;
