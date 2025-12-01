import React from "react";

export default function Contact() {
  return (
    <div className="bg-white text-[#0C244A]">

      {/* HERO SECTION */}
      <section className="px-8 py-20 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg">
            We'd love to hear from you! Whether you have questions, feedback, or suggestions, our team is here to help.
          </p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-16 px-8">
        <div className="container mx-auto max-w-3xl bg-gray-50 p-10 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-xl focus:outline-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-xl focus:outline-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border rounded-xl focus:outline-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Other Ways to Reach Us</h2>
          <p className="text-gray-600 mb-2">Email: support@learnmate.com</p>
          <p className="text-gray-600 mb-2">Phone: +94 77 123 4567</p>
          <p className="text-gray-600 mb-2">Address: Uva Wellassa University, Badulla, Sri Lanka</p>
        </div>
      </section>

    </div>
  );
}
