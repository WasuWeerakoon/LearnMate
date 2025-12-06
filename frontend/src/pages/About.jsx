import React from "react";

export default function AboutUs() {
  return (
    <div className="bg-white text-[#0C244A]">

      {/* HERO SECTION */}
      <section className="px-8 py-20 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">About LearnMate</h1>
          <p className="text-gray-600 text-lg">
            LearnMate is a modern educational platform created to support students 
            by providing simple, accessible, and high-quality learning resources 
            such as notes, tutorials, and past papers.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 px-8">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-10 items-center">
          
          <img 
            src="/about.png" 
            alt="About LearnMate" 
            className="rounded-xl w-full shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              We are a team of passionate learners and developers focused on improving 
              the way students study. Our goal is to centralize all essential learning 
              materials into one simple, user-friendly platform so that students can 
              save time and study smarter.
            </p>
          </div>

        </div>
      </section>

      {/* MISSION & VISION SECTION */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-8">

          {/* MISSION */}
          <div className="bg-white p-8 rounded-xl shadow border">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To simplify education by offering high-quality, easy-to-understand 
              learning resources that help students score higher and truly understand 
              their subjects.
            </p>
          </div>

          {/* VISION */}
          <div className="bg-white p-8 rounded-xl shadow border">
            <div className="text-5xl mb-4">🌟</div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become the most trusted academic support platform for students 
              by delivering accurate, engaging, and up-to-date learning materials.
            </p>
          </div>

        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-10">What We Offer</h2>

        <div className="container mx-auto grid md:grid-cols-3 gap-8">

          <div className="bg-gray-50 p-8 rounded-xl shadow border text-center 
                          transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white cursor-pointer">
            <div className="text-4xl mb-3">📘</div>
            <h3 className="text-xl font-semibold mb-2">Well-Organized Notes</h3>
            <p className="text-gray-600">
              Clear, structured notes to simplify complex lessons.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow border text-center 
                          transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white cursor-pointer">
            <div className="text-4xl mb-3">🎥</div>
            <h3 className="text-xl font-semibold mb-2">Video Tutorials</h3>
            <p className="text-gray-600">
              Step-by-step explanations for easy understanding.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow border text-center 
                          transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white cursor-pointer">
            <div className="text-4xl mb-3">📄</div>
            <h3 className="text-xl font-semibold mb-2">Past Papers</h3>
            <p className="text-gray-600">
              Access real exam questions to improve exam performance.
            </p>
          </div>

        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-16 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Our Values</h2>

        <div className="container mx-auto grid md:grid-cols-3 gap-8">

          <div className="p-6 rounded-xl bg-white border shadow text-center 
                          transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
            <h3 className="text-xl font-semibold mb-2">✔ Quality</h3>
            <p className="text-gray-600">Accurate and reliable learning content.</p>
          </div>

          <div className="p-6 rounded-xl bg-white border shadow text-center 
                          transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
            <h3 className="text-xl font-semibold mb-2">✔ Simplicity</h3>
            <p className="text-gray-600">Easy navigation and user-friendly design.</p>
          </div>

          <div className="p-6 rounded-xl bg-white border shadow text-center 
                          transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
            <h3 className="text-xl font-semibold mb-2">✔ Support</h3>
            <p className="text-gray-600">We help students learn at their own pace.</p>
          </div>

        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>

        <div className="container mx-auto grid md:grid-cols-3 gap-10">

          <div className="text-center">
            <img 
              src="/team1.jpg" 
              className="w-40 h-40 object-cover rounded-full mx-auto shadow" 
            />
            <h3 className="text-xl font-semibold mt-4">Wasana Weerakon</h3>
            <p className="text-gray-600">Founder / Developer</p>
          </div>

          <div className="text-center">
            <img 
              src="/team2.jpg" 
              className="w-40 h-40 object-cover rounded-full mx-auto shadow" 
            />
            <h3 className="text-xl font-semibold mt-4">Team Member</h3>
            <p className="text-gray-600">UI/UX Designer</p>
          </div>

          <div className="text-center">
            <img 
              src="/team3.jpg" 
              className="w-40 h-40 object-cover rounded-full mx-auto shadow" 
            />
            <h3 className="text-xl font-semibold mt-4">Team Member</h3>
            <p className="text-gray-600">Content Writer</p>
          </div>

        </div>
      </section>

    </div>
  );
}
