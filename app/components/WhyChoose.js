export default function WhyChoose() {
  const reasons = [
    {
      title: "Strategy First",
      desc: "Every project begins with a clear strategy to ensure real results."
    },
    {
      title: "Creative Execution",
      desc: "We combine smart thinking with bold design and storytelling."
    },
    {
      title: "Built for Small Businesses",
      desc: "Our solutions are practical, affordable, and designed for growth."
    },
    {
      title: "Fast & Flexible",
      desc: "Lean workflows allow us to move quickly and adapt when needed."
    },
    {
      title: "Long-Term Support",
      desc: "We don’t just launch projects — we help improve and grow them."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl dark:text-amber-50 font-bold text-center mb-12">
          Why Choose Kerna
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 hover:shadow-lg transition"
            >
              <h3 className="text-xl dark:text-amber-50 font-semibold mb-3">
                {reason.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                {reason.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}