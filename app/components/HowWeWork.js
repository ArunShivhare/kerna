export default function HowWeWork() {
  const steps = [
    {
      title: "Discover",
      desc: "We learn about your business, goals, audience, and challenges."
    },
    {
      title: "Strategize",
      desc: "We craft a clear marketing strategy tailored to your needs."
    },
    {
      title: "Build",
      desc: "Our team executes the strategy with design, content, and technology."
    },
    {
      title: "Launch & Improve",
      desc: "We launch the solution and continuously improve performance."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-950">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          How We Work
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 text-center border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition"
            >
              <div className="text-teal-500 text-2xl font-bold mb-3">
                {index + 1}
              </div>

              <h3 className="font-semibold text-lg mb-2">
                {step.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}