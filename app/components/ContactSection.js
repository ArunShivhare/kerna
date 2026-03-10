export default function ContactSection() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-950">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Contact Info */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              Get in Touch
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Phone:
            </p>

            <p className="text-gray-700 dark:text-gray-200">
              +91 75696 12318
            </p>

            <p className="text-gray-700 dark:text-gray-200 mb-6">
              +91 99496 86160
            </p>

            <p className="text-gray-600 dark:text-gray-300">
              Address:
            </p>

            <p className="text-gray-700 dark:text-gray-200">
              Marripalem, Visakhapatnam,
              Andhra Pradesh
            </p>

          </div>

          {/* Google Map */}
          <div className="w-full h-100">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d282.4389561590316!2d83.24420142282327!3d17.74319497588421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39670b3899bbe9%3A0x3fd6768247180757!2sSai%20Sundar%20Residency!5e0!3m2!1sen!2sin!4v1769022633919!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>

          </div>

        </div>

      </div>

    </section>
  );
}