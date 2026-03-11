"use client";

import { useState } from "react";
import ContactSection from "../components/ContactSection";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    portfolio: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.role) {
      alert("Please fill all required fields.");
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="py-20 px-6 bg-white dark:bg-gray-900 text-center transition-colors duration-300">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
          Application Submitted
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Thank you for applying. We will review your application soon.
        </p>

        <ContactSection />
      </main>
    );
  }

  return (
    <main className="py-20 px-6 bg-white dark:bg-gray-950 transition-colors duration-300">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-black dark:text-white mb-10">
          Apply to Kerna
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Name */}
          <div>
            <label className="block mb-2 font-medium text-black dark:text-white">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg p-3"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium text-black dark:text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg p-3"
              required
            />
          </div>

          {/* Role */}
          <div>
            <label className="block mb-2 font-medium text-black dark:text-white">
              Role Applying For
            </label>
            <select
              name="role"
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg p-3"
              required
            >
              <option value="">Select Role</option>
              <option>Web Development Intern</option>
              <option>Marketing / Sales Intern</option>
              <option>Branding & Research Intern</option>
            </select>
          </div>

          {/* Portfolio */}
          <div>
            <label className="block mb-2 font-medium text-black dark:text-white">
              Portfolio / GitHub / LinkedIn
            </label>
            <input
              type="text"
              name="portfolio"
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg p-3"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-medium text-black dark:text-white">
              Short Message
            </label>
            <textarea
              name="message"
              rows="4"
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg p-3"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition"
          >
            Submit Application
          </button>

        </form>

      </div>

      <ContactSection />

    </main>
  );
}