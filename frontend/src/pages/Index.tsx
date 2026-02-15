import { Link } from "react-router-dom";
import { Linkedin, Github, FileText } from "lucide-react";
import authorPhoto from "@/assets/author.jpg";

const Index = () => (
  <div className="mx-auto max-w-6xl px-6 py-16 space-y-24">
    {/* Hero */}
    <section className="text-center space-y-6">
      <h1 className="text-6xl font-bold tracking-tight text-foreground">
        Cripto<span className="text-primary">Hub</span>
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
        Seu hub educacional sobre Bitcoin e criptomoedas. Conteúdo técnico,
        direto ao ponto, sem enrolação.
      </p>
      <Link
        to="/materials"
        className="inline-block rounded-2xl bg-primary px-8 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
      >
        Começar
      </Link>
    </section>

    {/* Sobre o Projeto */}
    <section className="space-y-4">
      <h2 className="text-3xl font-bold text-foreground">Sobre o Projeto</h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          O CriptoHub é um projeto educacional focado em Bitcoin e nos
          fundamentos técnicos por trás das criptomoedas. O objetivo é oferecer
          conteúdo de qualidade, organizado e acessível para quem quer entender
          de verdade como essa tecnologia funciona.
        </p>
        <p>
          Aqui você encontra artigos técnicos, vídeos selecionados e materiais
          de leitura obrigatória — tudo curado para quem leva o assunto a sério.
        </p>
      </div>
    </section>

    {/* Sobre o Autor */}
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground">Sobre o Autor</h2>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="shrink-0 rounded-full p-1 bg-primary">
          <img
            src={authorPhoto}
            alt="Jhonatan Eduardo"
            className="w-40 h-40 rounded-full object-cover"
          />
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p className="text-lg font-medium text-foreground">Jhonatan Eduardo</p>
          <p>
            Desenvolvedor web com interesse profundo em Bitcoin e sistemas
            descentralizados. Acredita que educação técnica de qualidade é o
            primeiro passo para a adoção consciente de criptomoedas.
          </p>
          <p>
            Criou o CriptoHub para compilar e organizar o conhecimento essencial
            que todo entusiasta deveria ter antes de mergulhar no mundo cripto.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="https://www.linkedin.com/in/devjhonataneduardo/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary hover:underline"><Linkedin size={18} /> LinkedIn</a>
            <a href="https://substack.com/@jhonatangeronimo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary hover:underline"><FileText size={18} /> Substack</a>
            <a href="https://github.com/GoCodeJones" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary hover:underline"><Github size={18} /> GitHub</a>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
