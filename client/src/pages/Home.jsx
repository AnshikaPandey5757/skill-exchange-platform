import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl"></div>

        <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-20 flex justify-between items-center px-8 md:px-20 py-6 border-b border-white/10 backdrop-blur-xl">

        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center font-extrabold text-black text-xl shadow-lg shadow-cyan-500/40">
            S
          </div>

          <h1 className="text-3xl font-extrabold tracking-wide">
            Skill<span className="text-cyan-400">Mentor</span>
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-10 text-gray-300">
          <a href="#features" className="hover:text-cyan-400 transition">
            Features
          </a>

          <a href="#mentors" className="hover:text-cyan-400 transition">
            Mentors
          </a>

          <a href="#community" className="hover:text-cyan-400 transition">
            Community
          </a>

          <a href="#pricing" className="hover:text-cyan-400 transition">
            AI Tools
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="px-5 py-2 rounded-xl border border-white/10 hover:bg-white/10 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold hover:scale-105 transition duration-300 shadow-xl shadow-cyan-500/40"
          >
            Get Started
          </Link>
        </div>

      </nav>

      {/* HERO */}
      <section className="relative z-10 px-8 md:px-20 pt-28 pb-32">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm mb-8">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></span>
              AI Powered Learning Ecosystem
            </div>

            <h1 className="text-6xl lg:text-7xl font-black leading-tight">

              Build Skills With
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}
                AI Mentors
              </span>

              <br />

              & Real Experts

            </h1>

            <p className="mt-8 text-gray-400 text-xl leading-relaxed max-w-2xl">
              Accelerate your growth through personalized AI learning paths,
              real-time mentorship, collaborative communities, and intelligent
              career guidance — all in one platform.
            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                to="/signup"
                className="px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold text-lg hover:scale-105 transition duration-300 shadow-2xl shadow-cyan-500/40"
              >
                Start Learning
              </Link>

              <Link
                to="/ai-mentor"
                className="px-10 py-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition text-lg font-semibold"
              >
                Explore AI Mentor
              </Link>

            </div>

            {/* Trusted */}
            <div className="mt-16">
              <p className="text-gray-500 mb-5">
                Trusted by learners from
              </p>

              <div className="flex flex-wrap gap-8 text-gray-400 text-lg font-semibold">
                <span>Google</span>
                <span>Microsoft</span>
                <span>Amazon</span>
                <span>Meta</span>
                <span>Netflix</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            {/* Main Card */}
            <div className="bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-2xl shadow-2xl">

              <div className="flex justify-between items-center mb-8">

                <div>
                  <h2 className="text-2xl font-bold">
                    AI Learning Dashboard
                  </h2>

                  <p className="text-gray-400 mt-2">
                    Personalized learning insights
                  </p>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-cyan-400/20 flex items-center justify-center text-3xl">
                  🤖
                </div>

              </div>

              {/* Progress */}
              <div className="space-y-6">

                <div className="bg-[#111827] p-5 rounded-2xl">
                  <div className="flex justify-between mb-3">
                    <span>Web Development</span>
                    <span className="text-cyan-400">85%</span>
                  </div>

                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-cyan-400 h-3 rounded-full w-[85%]"></div>
                  </div>
                </div>

                <div className="bg-[#111827] p-5 rounded-2xl">
                  <div className="flex justify-between mb-3">
                    <span>System Design</span>
                    <span className="text-purple-400">72%</span>
                  </div>

                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-purple-400 h-3 rounded-full w-[72%]"></div>
                  </div>
                </div>

                <div className="bg-[#111827] p-5 rounded-2xl">
                  <div className="flex justify-between mb-3">
                    <span>DSA Preparation</span>
                    <span className="text-blue-400">91%</span>
                  </div>

                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-blue-400 h-3 rounded-full w-[91%]"></div>
                  </div>
                </div>

              </div>

              {/* Mini Cards */}
              <div className="grid grid-cols-2 gap-5 mt-8">

                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 rounded-2xl text-black">
                  <h3 className="text-4xl font-black">10K+</h3>
                  <p className="font-semibold mt-2">
                    Active Learners
                  </p>
                </div>

                <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-4xl font-black text-cyan-400">
                    500+
                  </h3>

                  <p className="text-gray-400 mt-2">
                    Industry Mentors
                  </p>
                </div>

              </div>

            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5 animate-bounce">
              🚀 Career Growth
            </div>

            <div className="absolute -bottom-8 -left-8 bg-cyan-400 text-black font-bold rounded-2xl p-5 shadow-xl shadow-cyan-500/40">
              ⚡ AI Powered
            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="relative z-10 px-8 md:px-20 py-28"
      >

        <div className="text-center mb-20">

          <h2 className="text-5xl font-black">
            Everything You Need To
            <span className="text-cyan-400"> Grow Faster</span>
          </h2>

          <p className="mt-6 text-gray-400 text-xl">
            Modern tools built for modern learners.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {[
            {
              icon: "🤖",
              title: "AI Learning Paths",
              desc: "Personalized AI-generated roadmaps for every career path."
            },
            {
              icon: "💬",
              title: "Live Mentorship",
              desc: "Connect instantly with experienced mentors and peers."
            },
            {
              icon: "📊",
              title: "Progress Analytics",
              desc: "Track learning growth with smart dashboards and insights."
            },
            {
              icon: "🎯",
              title: "Skill Matching",
              desc: "Find mentors and opportunities tailored to your goals."
            },
            {
              icon: "🌐",
              title: "Learning Community",
              desc: "Collaborate with learners worldwide in real-time."
            },
            {
              icon: "🚀",
              title: "Career Acceleration",
              desc: "Prepare for interviews, internships, and tech careers."
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-[30px] p-10 hover:border-cyan-400 hover:-translate-y-3 transition duration-300 backdrop-blur-xl"
            >

              <div className="text-6xl mb-6 group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="text-3xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="relative z-10 px-8 md:px-20 pb-32">

        <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-[40px] p-16 text-center shadow-2xl">

          <h2 className="text-6xl font-black max-w-4xl mx-auto leading-tight">
            Your Future Starts With One Skill
          </h2>

          <p className="mt-8 text-xl text-white/90 max-w-2xl mx-auto">
            Join the next generation of learners building careers with AI-driven mentorship.
          </p>

          <Link
            to="/signup"
            className="inline-block mt-12 px-12 py-5 bg-black text-white rounded-2xl text-xl font-bold hover:scale-105 transition"
          >
            Join SkillMentor
          </Link>

        </div>

      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-10 text-center text-gray-500">
        © 2026 SkillMentor • AI Mentorship & Learning Platform
      </footer>

    </div>
  );
};

export default Home;