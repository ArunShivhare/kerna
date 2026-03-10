import Link from "next/link";

export default function WorkPreview() {
  const projects = [
    {
      title: "Local Restaurant Branding",
      desc: "Complete website and brand identity for a neighborhood restaurant."
    },
    {
      title: "Startup Launch Campaign",
      desc: "Digital marketing strategy and social media launch for a startup."
    },
    {
      title: "Retail Store Online Presence",
      desc: "Website and local SEO setup to improve visibility and customer reach."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-950">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl dark:text-amber-50 font-bold text-center mb-12">
          Sample Work
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (
            <Link
              href="/work"
              key={index}
              className="block p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition"
            >
              <h3 className="text-xl dark:text-amber-50 font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                {project.desc}
              </p>

              <span className="text-teal-500 mt-4 inline-block">
                View Details →
              </span>
            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}