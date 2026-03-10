export default function Services() {
  const services = [
    {
      title: "Website Design, SEO & Hosting",
      desc: "Professional websites built for speed, visibility, and long-term growth."
    },
    {
      title: "eCommerce Website Development",
      desc: "Modern online stores designed to convert visitors into customers."
    },
    {
      title: "Branding & Visual Identity",
      desc: "Create strong brand identities with logos, colors, and design systems."
    },
    {
      title: "Social Media Management",
      desc: "Strategic social media planning and management to grow your audience."
    },
    {
      title: "Content Creation",
      desc: "Engaging content that tells your story and builds trust with customers."
    },
    {
      title: "Market Analysis & Strategy",
      desc: "Research-driven strategies to position your business effectively."
    },
    {
      title: "Online Profile Setup & Handholding",
      desc: "Complete setup for Google Maps, local listings, and platform guidance."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl dark:text-amber-50 font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 hover:shadow-lg transition"
            >
              <h3 className="text-xl dark:text-amber-50 font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}