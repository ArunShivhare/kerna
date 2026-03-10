import Link from "next/link";

export default function Careers() {
  const roles = [
    {
      title: "Web Development Intern",
      description:
        "Work on modern marketing websites, UI components, and frontend improvements.",
      skills: [
        "HTML, CSS, JavaScript",
        "Basic React or Next.js knowledge",
        "Responsive design understanding",
        "Git & version control basics"
      ]
    },
    {
      title: "Marketing / Sales Intern",
      description:
        "Support outreach campaigns and help small businesses grow through marketing strategy.",
      skills: [
        "Communication skills",
        "Basic marketing understanding",
        "Research and outreach ability",
        "Interest in business growth"
      ]
    },
    {
      title: "Branding & Research Intern",
      description:
        "Assist in brand research, competitor analysis, and identity development.",
      skills: [
        "Research skills",
        "Creative thinking",
        "Basic branding understanding",
        "Attention to detail"
      ]
    }
  ];

  return (
    <main className="py-20 px-6 bg-white dark:bg-gray-950 transition-colors duration-300">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-black dark:text-white mb-6">
          Careers at Kerna
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Join a small team focused on strategy, creativity, and real-world impact.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {roles.map((role, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-black dark:text-white mb-3">
                {role.title}
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {role.description}
              </p>

              <h3 className="font-semibold text-black dark:text-white mb-2">
                Skills Required
              </h3>

              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 mb-4">
                {role.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>

              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                <strong>Duration:</strong> 12 weeks
              </p>

              <Link
                href="/contact"
                className="inline-block px-5 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
              >
                Apply Now
              </Link>

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}