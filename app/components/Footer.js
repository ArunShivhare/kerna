import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300 py-12 px-6 transition-colors duration-300">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Brand Description */}
        <div>
          <h3 className="text-xl font-bold text-black dark:text-white mb-4">
            Kerna
          </h3>

          <p>
            Kerna is a strategy-driven PR and marketing agency helping
            small businesses grow through smart strategy, bold design,
            and practical execution.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold text-black dark:text-white mb-4">
            Navigation
          </h4>

          <ul className="space-y-2">

            <li>
              <Link href="/" className="hover:text-teal-500">
                Home
              </Link>
            </li>

            <li>
              <Link href="/work" className="hover:text-teal-500">
                Work
              </Link>
            </li>

            <li>
              <Link href="/careers" className="hover:text-teal-500">
                Careers
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-teal-500">
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-black dark:text-white mb-4">
            Contact
          </h4>

          <p>+91 75696 12318</p>
          <p className="mb-4">+91 99496 86160</p>

          <p>
            Marripalem, Visakhapatnam,
            Andhra Pradesh
          </p>
        </div>

        {/* Social Placeholders */}
        <div>
          <h4 className="text-lg font-semibold text-black dark:text-white mb-4">
            Follow Us
          </h4>

          <div className="flex flex-col gap-4">

            <a
              href="#"
              className="hover:text-teal-500 transition"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="hover:text-teal-500 transition"
            >
              Twitter
            </a>

            <a
              href="#"
              className="hover:text-teal-500 transition"
            >
              Instagram
            </a>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10 border-t border-gray-300 dark:border-gray-700 pt-6">
        © {new Date().getFullYear()} Kerna. All rights reserved.
      </div>

    </footer>
  );
}