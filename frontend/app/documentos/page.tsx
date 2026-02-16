"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Document {
  id: string;
  title: string;
  slug: string;
  description: string;
}

export default function DocumentosPage() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDocuments() {
      try {
        const res = await fetch("http://localhost:8080/api/documents");
        const data = await res.json();
        setDocuments(data);
      } catch (error) {
        console.error("Erro ao carregar documentos:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchDocuments();
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
      <h1 className="text-5xl font-bold text-yellow-400 mb-4 text-center">Documentos</h1>
      <p className="text-gray-300 text-center mb-12 text-lg">Documentação completa sobre criptomoedas e blockchain</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((doc) => (
          <Link key={doc.id} href={`/documentos/${doc.slug}`} className="bg-gray-900 border-2 border-yellow-400 rounded-lg p-6 hover:border-yellow-300 transition-colors">
            <h2 className="text-2xl font-bold text-yellow-400 mb-3">{doc.title}</h2>
            <p className="text-gray-300">{doc.description}</p>
            <div className="mt-4 text-yellow-400 font-medium">Ler documento</div>
          </Link>
        ))}
      </div>
    </div>
  );
}