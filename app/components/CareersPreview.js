import Link from "next/link";

export default function CareersPreview() {
  const roles = [
    {
      title: "Web Development Intern",
      desc: "Work on modern websites, UI components, and frontend performance."
    },
    {
      title: "Marketing / Sales Intern",
      desc: "Help businesses grow through smart outreach and marketing strategy."
    },
    {
      title: "Branding & Research Intern",
      desc: "Support brand research, competitor analysis, and visual identity."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          Join Our Team
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {roles.map((role, index) => (
            <Link
              href="/careers"
              key={index}
              className="block p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {role.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                {role.desc}
              </p>

              <span className="text-teal-500 mt-4 inline-block">
                Learn More →
              </span>
            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}