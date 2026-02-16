import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <section className="text-center mb-20">
        <h1 className="text-6xl font-bold text-yellow-400 mb-6">
          CriptoHub
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          Plataforma educacional descentralizada sobre Bitcoin, blockchain e criptomoedas. 
          Conteúdo essencial, documentação completa e colaboração aberta para quem busca 
          liberdade financeira e conhecimento sobre o futuro do dinheiro.
        </p>
        <Link
          href="/essenciais"
          className="inline-block bg-yellow-400 text-black font-bold px-8 py-4 rounded hover:bg-yellow-300 transition-colors text-lg"
        >
          Começar Aprendizado
        </Link>
      </section>

      <section className="mb-20">
        <h2 className="text-4xl font-bold text-yellow-400 mb-8 text-center">
          O que é o CriptoHub?
        </h2>
        <div className="bg-gray-900 border-2 border-yellow-400 rounded-lg p-8 max-w-4xl mx-auto">
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            O CriptoHub é uma iniciativa de educação livre e descentralizada sobre criptomoedas. 
            Aqui você encontra conteúdo curado, documentação técnica e recursos essenciais para 
            entender o ecossistema cripto de forma profunda.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Acreditamos na soberania individual, na descentralização do conhecimento e no poder 
            transformador das tecnologias blockchain. Este é um espaço livre de censura, 
            construído pela comunidade e para a comunidade.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Todo o conteúdo é open-source e você pode contribuir através do GitHub. 
            Juntos, construímos uma base de conhecimento sólida e acessível para todos.
          </p>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-4xl font-bold text-yellow-400 mb-8 text-center">
          Sobre o Autor
        </h2>
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 rounded-full bg-gray-800 border-4 border-yellow-400 mb-6 overflow-hidden">
            <img src="PLACEHOLDER_AUTHOR_IMAGE" alt="Foto do Autor" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">PLACEHOLDER_AUTHOR_NAME</h3>
          <p className="text-gray-300 text-center max-w-2xl mb-6 leading-relaxed">PLACEHOLDER_AUTHOR_DESCRIPTION</p>
          
          <div className="flex space-x-6">
            <a href="PLACEHOLDER_TWITTER_URL" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">Twitter</a>
            <a href="PLACEHOLDER_GITHUB_URL" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">GitHub</a>
            <a href="PLACEHOLDER_LINKEDIN_URL" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">LinkedIn</a>
            <a href="PLACEHOLDER_YOUTUBE_URL" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">YouTube</a>
          </div>
        </div>
      </section>
    </div>
  );
}