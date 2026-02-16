export default function Footer() {
  return (
    <footer className="bg-black border-t-2 border-yellow-400 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            CriptoHub - Educação descentralizada sobre criptomoedas
          </p>
          <p className="text-gray-500 text-xs mt-2">
            {new Date().getFullYear()} - Conteúdo livre e colaborativo
          </p>
        </div>
      </div>
    </footer>
  );
}