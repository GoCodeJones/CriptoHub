import { Link } from "react-router-dom";
import { Linkedin, Github, FileText } from "lucide-react";
import authorPhoto from "@/assets/author.jpg";

const Index = () => (
  <div className="bg-black text-white">
    <div className="mx-auto max-w-6xl px-8 py-24 space-y-32">

      {/* HERO */}
      <section className="relative border-l-4 border-yellow-400 pl-10 py-16">
        <h1 className="text-7xl font-extrabold tracking-tight leading-none text-yellow-400">
          Cripto<span className="text-white">Hub</span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg text-neutral-400 leading-relaxed">
          Educação técnica sobre Bitcoin e criptografia.
          Sem marketing. Sem idolatria. Só fundamentos.
        </p>

        <Link
          to="/materials"
          className="inline-block mt-10 border border-yellow-400 px-10 py-3 font-semibold text-yellow-400 hover:bg-yellow-400 hover:text-black transition-none"
        >
          COMEÇAR →
        </Link>
      </section>

      {/* SOBRE O PROJETO */}
      <section className="border-t border-yellow-500/20 pt-20">
        <h2 className="text-2xl font-bold uppercase tracking-wider text-yellow-400 mb-12">
          Sobre o Projeto
        </h2>

        <div className="max-w-4xl space-y-6 text-neutral-400 leading-relaxed">
          <p>
            O CriptoHub nasce da insatisfação com superficialidade.
            Aqui não existe explicação rápida nem promessa fácil.
          </p>

          <p>
            Bitcoin não é tendência. É arquitetura.
            E arquitetura exige estudo.
          </p>

          <p>
            Se busca hype, este não é o lugar.
            Se busca estrutura, documentação e clareza técnica — continue.
          </p>
        </div>
      </section>

      {/* AUTOR */}
      <section className="border-t border-yellow-500/20 pt-20">
        <h2 className="text-2xl font-bold uppercase tracking-wider text-yellow-400 mb-16">
          Autor
        </h2>

        <div className="grid md:grid-cols-[260px_1fr] gap-20 items-start">

          {/* FOTO REDONDA */}
          <div className="w-60 h-60 rounded-full border-4 border-yellow-400 overflow-hidden">
            <img
              src={authorPhoto}
              alt="Jhonatan Eduardo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* TEXTO */}
          <div className="space-y-8 text-neutral-400 leading-relaxed">
            <h3 className="text-xl tracking-widest font-semibold text-white">
              JHONATAN EDUARDO
            </h3>

            <p>
              Desenvolvedor orientado por arquitetura de sistemas,
              descentralização e análise estrutural.
              Prefere código auditável a discursos populares.
            </p>

            <p>
              Criou o CriptoHub para organizar fundamentos antes que
              narrativa vire verdade absoluta.
            </p>

            <p className="text-yellow-400 font-medium">
              Entender &gt; Opinar.
            </p>

            <div className="flex gap-10 pt-8 border-t border-yellow-500/20 text-sm">
              <a
                href="https://www.linkedin.com/in/devjhonataneduardo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>

              <a
                href="https://substack.com/@jhonatangeronimo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <FileText size={16} />
                Substack
              </a>

              <a
                href="https://github.com/GoCodeJones"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  </div>
);

export default Index;
