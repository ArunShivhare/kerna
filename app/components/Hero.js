import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full py-24 px-6 text-center bg-linear-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-950">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl dark:text-amber-50 md:text-5xl font-bold mb-6">
          Where Strategy Meets Spark.
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          We help small businesses grow with smart strategy, bold design,
          and marketing that actually works.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            href="/contact"
            className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
          >
            Work With Kerna
          </Link>

          <Link
            href="/careers"
            className="px-6 py-3 border dark:text-white border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Join as an Intern
          </Link>

        </div>

      </div>

    </section>
  );
}