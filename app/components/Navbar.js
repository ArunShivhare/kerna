"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <Link href="/" className="text-xl font-bold">
          Kerna
        </Link>

        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-teal-500">
            Home
          </Link>

          <Link href="/work" className="hover:text-teal-500">
            Work
          </Link>

          <Link href="/careers" className="hover:text-teal-500">
            Careers
          </Link>

          <Link href="/contact" className="hover:text-teal-500">
            Contact
          </Link>
        </div>

      </div>
    </nav>
  );
}