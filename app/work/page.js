export default function Work() {
  const projects = [
    {
      title: "Local Restaurant Branding",
      industry: "Hospitality",
      description:
        "A complete digital presence for a neighborhood restaurant including branding and website design.",
      problem:
        "The restaurant had no clear brand identity and very little online visibility.",
      solution:
        "We created a strong visual identity, built a responsive website, and optimized their online listings."
    },
    {
      title: "Startup Launch Campaign",
      industry: "Technology Startup",
      description:
        "A launch campaign focused on building awareness and early traction.",
      problem:
        "The startup needed to quickly reach potential users and communicate their value clearly.",
      solution:
        "We developed a marketing strategy, landing page, and social media launch campaign."
    },
    {
      title: "Retail Store Online Presence",
      industry: "Retail",
      description:
        "Improving online visibility and local discovery for a retail brand.",
      problem:
        "Customers struggled to find the store online and their listings were incomplete.",
      solution:
        "We built a modern website and optimized their Google Maps and local business listings."
    }
  ];

  return (
    <main className="py-20 px-6 bg-white dark:bg-gray-950 transition-colors duration-300">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-black dark:text-white mb-6">
          Our Work
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          A selection of projects that demonstrate how strategy,
          design, and execution come together at Kerna.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-black dark:text-white mb-2">
                {project.title}
              </h2>

              <p className="text-sm text-teal-500 mb-3">
                Industry: {project.industry}
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <strong>Problem:</strong> {project.problem}
              </p>

              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Solution:</strong> {project.solution}
              </p>

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}