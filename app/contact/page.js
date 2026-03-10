"use client";

import { useState } from "react";

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
      <main className="py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Application Submitted
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Thank you for applying. We will review your application soon.
        </p>
      </main>
    );
  }

  return (
    <main className="py-20 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-10">
          Apply to Kerna
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Name */}
          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3"
              required
            />
          </div>

          {/* Role */}
          <div>
            <label className="block mb-2 font-medium">
              Role Applying For
            </label>
            <select
              name="role"
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3"
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
            <label className="block mb-2 font-medium">
              Portfolio / GitHub / LinkedIn
            </label>
            <input
              type="text"
              name="portfolio"
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-medium">
              Short Message
            </label>
            <textarea
              name="message"
              rows="4"
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3"
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

    </main>
  );
}