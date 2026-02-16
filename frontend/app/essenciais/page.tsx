"use client";

import { useEffect, useState } from "react";
import VideoCarousel from "@/components/VideoCarousel";

interface Video {
  id: string;
  title: string;
  youtube_url: string;
  thumbnail: string;
}

interface Article {
  id: string;
  title: string;
  description: string;
  url: string;
  image_url: string;
}

export default function EssenciaisPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [videosRes, articlesRes] = await Promise.all([
          fetch("http://localhost:8080/api/videos"),
          fetch("http://localhost:8080/api/articles"),
        ]);
        const videosData = await videosRes.json();
        const articlesData = await articlesRes.json();
        setVideos(videosData);
        setArticles(articlesData);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center text-yellow-400 text-2xl">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-5xl font-bold text-yellow-400 mb-4 text-center">Essenciais</h1>
      <p className="text-gray-300 text-center mb-12 text-lg">Conteúdo fundamental para começar sua jornada no mundo cripto</p>
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-yellow-400 mb-8">Vídeos Recomendados</h2>
        <VideoCarousel videos={videos} />
      </section>
      <section>
        <h2 className="text-3xl font-bold text-yellow-400 mb-8">Artigos para Leitura</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <a key={article.id} href={article.url} target="_blank" rel="noopener noreferrer" className="bg-gray-900 border-2 border-yellow-400 rounded-lg overflow-hidden hover:border-yellow-300 transition-colors">
              <div className="h-48 bg-gray-800"><img src={article.image_url} alt={article.title} className="w-full h-full object-cover" /></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">{article.title}</h3>
                <p className="text-gray-300 text-sm">{article.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}