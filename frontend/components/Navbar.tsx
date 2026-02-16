"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/essenciais", label: "Essenciais" },
    { href: "/documentos", label: "Documentos" },
    { href: "/colaboracao", label: "Colaboração" },
    { href: "/contribuir", label: "Como Contribuir" },
  ];

  return (
    <nav className="bg-black border-b-2 border-yellow-400 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link href="/" className="flex items-center text-yellow-400 font-bold text-xl">
              CriptoHub
            </Link>
          </div>
          <div className="flex space-x-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex items-center px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-yellow-400 border-b-2 border-yellow-400"
                    : "text-gray-300 hover:text-yellow-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}