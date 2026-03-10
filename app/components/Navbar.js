"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-black dark:text-white"
        >
          Kerna
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-200">

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

          <ThemeToggle />

        </div>

      </div>
    </nav>
  );
}