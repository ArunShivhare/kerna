export default function About() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-950">

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-8">
          About Kerna
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Kerna is a lean, strategy-driven PR and marketing agency built for small businesses
          that want to look professional, move fast, and grow without burning money.
          We combine clear strategy with creative execution to help local brands build a
          strong digital presence — from websites and branding to social media and content.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">

          <div>
            <h3 className="font-semibold text-lg mb-2">Mission</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To make smart, affordable marketing accessible to small businesses
              and help them punch above their weight.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Who We Work With</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Local businesses, startups, and independent brands.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">What We Solve</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Confusing marketing, weak online presence, and scattered branding.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}