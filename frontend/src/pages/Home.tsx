import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../services/api';
import type { PostSummary } from '../types/index';

const Home = () => {
  const [posts, setPosts] = useState<PostSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await api.getPosts();
        setPosts(data);
      } catch (error) {
        console.error('Erro ao carregar posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-muted-foreground">Carregando posts...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mb-8 text-4xl font-bold text-foreground">
        Blog sobre Criptomoedas
      </h1>
      
      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/post/${post.slug}`}
            className="block rounded-2xl border border-border p-6 transition-colors hover:border-primary"
          >
            <h2 className="mb-2 text-2xl font-semibold text-foreground">
              {post.title}
            </h2>
            <p className="mb-3 text-sm text-muted-foreground">
              {new Date(post.date).toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;