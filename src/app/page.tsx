import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-zinc-200">

      {/* HERO */}
      <section className="border-b border-yellow-700 px-8 py-24 text-center">
        <h1 className="text-6xl font-serif font-bold text-yellow-500 tracking-wide">
          CriptoHub
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-zinc-400 leading-relaxed">
          An open-source educational platform dedicated to Bitcoin,
          Blockchain, and the philosophy of decentralization.
          A structured hub for knowledge, critical thinking, and technical sovereignty.
        </p>
      </section>

      {/* ABOUT PROJECT */}
      <section className="px-8 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif font-semibold text-yellow-500 mb-6">
          About the Project
        </h2>

        <p className="text-zinc-300 leading-relaxed mb-6">
          CriptoHub was created with one primary objective: to transmit
          structured and reliable knowledge about Bitcoin and blockchain
          technologies. In a landscape full of speculation and noise,
          this hub prioritizes clarity, technical depth, and intellectual rigor.
        </p>

        <p className="text-zinc-400 leading-relaxed">
          Beyond tutorials and materials, the project aims to cultivate
          a community grounded in responsibility, sovereignty, and
          open collaboration. Knowledge here is not consumed passively —
          it is studied, questioned, and applied.
        </p>
      </section>

      {/* AUTHOR */}
      <section className="border-t border-yellow-700 px-8 py-20 bg-black">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          
          <div className="w-48 h-48 relative">
            <Image
              src="/jones.jpg"
              alt="Jones - Author of CriptoHub"
              fill
              className="object-cover rounded-full border-2 border-yellow-600"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-3xl font-serif font-semibold text-yellow-500 mb-4">
              About the Author
            </h2>

            <p className="text-zinc-300 leading-relaxed mb-4">
              I am Jones, a software engineer and cryptography enthusiast.
              I contribute to open-source projects related to blockchain
              infrastructure and decentralized systems.
            </p>

            <div className="flex gap-6 text-sm font-semibold mb-6">
              <Link
                href="https://substack.com/@jhonatangeronimo"
                target="_blank"
                className="hover:text-yellow-500"
              >
                Substack
              </Link>

              <Link
                href="https://github.com/GoCodeJones"
                target="_blank"
                className="hover:text-yellow-500"
              >
                GitHub
              </Link>

              <Link
                href="https://www.linkedin.com/in/devjhonataneduardo/"
                target="_blank"
                className="hover:text-yellow-500"
              >
                LinkedIn
              </Link>
            </div>

            <blockquote className="border-l-4 border-yellow-600 pl-6 text-zinc-400 italic">
              “A liberdade descrita nestas páginas não é coletiva,
              não é escalável por decreto e não é confortável.
              Ela é individual, técnica e condicional à responsabilidade pessoal.”
            </blockquote>
          </div>
        </div>
      </section>

    </main>
  );
}
