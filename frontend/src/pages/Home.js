import React from "react";

export default function Home() {
  return (
    <div className="bg-white text-[#0C244A]">

      {/* HERO SECTION */}
      <section className="px-8 py-20 bg-gray-50">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>
            <h1 className="text-4xl font-bold leading-tight">
              Unlock Your Potential<br />with LearnMate
            </h1>

            <p className="text-gray-600 mt-4 text-lg">
              Access high-quality tutorials, comprehensive notes, and past papers easily.
            </p>

            <div className="mt-6 flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold">
                Explore Courses
              </button>

              <button className="border border-blue-500 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-semibold">
                View Tutorials
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <img
            src="/home.png"
            alt="Hero"
            className="w-full drop-shadow-md"
          />
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          Key Features
        </h2>

        <div className="container mx-auto grid md:grid-cols-3 gap-8">

          <div className="bg-gray-50 p-8 rounded-xl shadow-sm border text-center">
            <div className="text-4xl mb-4">📘</div>
            <h3 className="text-xl font-bold mb-2">Comprehensive Notes</h3>
            <p className="text-gray-600">Structured study materials for your success.</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-sm border text-center">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-bold mb-2">Expert Tutorials</h3>
            <p className="text-gray-600">Learn from experienced educators.</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-sm border text-center">
            <div className="text-4xl mb-4">📄</div>
            <h3 className="text-xl font-bold mb-2">Past Papers Archive</h3>
            <p className="text-gray-600">Practice with real exam papers.</p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="py-16 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose LearnMate?
        </h2>

        <div className="container mx-auto grid md:grid-cols-3 gap-8">

          <div className="p-6 bg-white border shadow-sm rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">🔥 Easy to Use</h3>
            <p className="text-gray-600">
              Clean and fast interface for all students.
            </p>
          </div>

          <div className="p-6 bg-white border shadow-sm rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">📚 Everything in One Place</h3>
            <p className="text-gray-600">
              Notes, tutorials, past papers — all organized neatly.
            </p>
          </div>

          <div className="p-6 bg-white border shadow-sm rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">🚀 Always Updated</h3>
            <p className="text-gray-600">
              New resources added regularly.
            </p>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Students Say
        </h2>

        <div className="container mx-auto grid md:grid-cols-3 gap-8">

          <div className="bg-gray-50 border p-6 shadow-sm rounded-xl">
            <p className="text-gray-600">
              “LearnMate helped me understand subjects easily. Very student-friendly UI!”
            </p>
            <h4 className="mt-4 font-bold">– Kavindu (ICT Student)</h4>
          </div>

          <div className="bg-gray-50 border p-6 shadow-sm rounded-xl">
            <p className="text-gray-600">
              “Best platform for finding notes and past papers!”
            </p>
            <h4 className="mt-4 font-bold">– Nisansa</h4>
          </div>

          <div className="bg-gray-50 border p-6 shadow-sm rounded-xl">
            <p className="text-gray-600">
              “Tutorials are clear and well-structured. Helped me score better.”
            </p>
            <h4 className="mt-4 font-bold">– Akila</h4>
          </div>

        </div>
      </section>

    </div>
  );
}
