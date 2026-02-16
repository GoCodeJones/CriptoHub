import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { api } from '../services/api';
import type { Post as PostType } from '../types/index';

const Post = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      try {
        const data = await api.getPost(slug);
        setPost(data);
      } catch (error) {
        console.error('Erro ao carregar post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-16 text-center">
        <p className="text-muted-foreground">Carregando...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h1 className="mb-4 text-2xl font-bold text-foreground">Post não encontrado</h1>
        <Link to="/" className="text-primary hover:underline">
          Voltar para Home
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Link to="/" className="mb-8 inline-block text-sm text-primary hover:underline">
        ← Voltar
      </Link>
      
      <article>
        <h1 className="mb-4 text-4xl font-bold text-foreground">{post.title}</h1>
        
        <div className="mb-6 flex items-center gap-4 text-sm text-muted-foreground">
          <time>
            {new Date(post.date).toLocaleDateString('pt-BR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <div className="flex gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => <h1 className="mb-4 mt-8 text-3xl font-bold text-foreground">{children}</h1>,
              h2: ({ children }) => <h2 className="mb-3 mt-6 text-2xl font-bold text-foreground">{children}</h2>,
              h3: ({ children }) => <h3 className="mb-2 mt-4 text-xl font-semibold text-foreground">{children}</h3>,
              p: ({ children }) => <p className="mb-4 leading-relaxed text-muted-foreground">{children}</p>,
              ul: ({ children }) => <ul className="mb-4 ml-6 list-disc space-y-2 text-muted-foreground">{children}</ul>,
              ol: ({ children }) => <ol className="mb-4 ml-6 list-decimal space-y-2 text-muted-foreground">{children}</ol>,
              li: ({ children }) => <li className="text-muted-foreground">{children}</li>,
              strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
};

export default Post;