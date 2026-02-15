import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-black border-b border-yellow-600 px-8 py-4">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-yellow-500 font-bold text-xl">
          CriptoHub
        </Link>

        <div className="flex gap-6 text-sm font-semibold">
          <Link href="/materials" className="hover:text-yellow-500">
            Materials
          </Link>
          <Link href="/projects" className="hover:text-yellow-500">
            Projects
          </Link>
          <Link href="/support" className="hover:text-yellow-500">
            Support
          </Link>
          <Link href="/collaborate" className="hover:text-yellow-500">
            Collaborate
          </Link>
        </div>
      </div>
    </nav>
  );
}
