function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 mt-24">

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          <div>

            <h1 className="text-3xl font-bold text-cyan-400">
              SkillBridge
            </h1>

            <p className="text-gray-400 mt-5">
              AI-powered skill exchange platform
              for the next generation learners.
            </p>

          </div>

          <div>

            <h2 className="font-bold text-xl mb-5">
              Product
            </h2>

            <div className="flex flex-col gap-3 text-gray-400">
              <p>AI Mentor</p>
              <p>Skill Matching</p>
              <p>Live Collaboration</p>
            </div>

          </div>

          <div>

            <h2 className="font-bold text-xl mb-5">
              Company
            </h2>

            <div className="flex flex-col gap-3 text-gray-400">
              <p>About</p>
              <p>Careers</p>
              <p>Contact</p>
            </div>

          </div>

          <div>

            <h2 className="font-bold text-xl mb-5">
              Social
            </h2>

            <div className="flex flex-col gap-3 text-gray-400">
              <p>Twitter</p>
              <p>LinkedIn</p>
              <p>GitHub</p>
            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-gray-500">
          © 2026 SkillBridge. All rights reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;