const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/40">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between">

        <div>
          <h2 className="text-lg font-bold">
            SkillBridge <span className="text-purple-400">AI</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Learn. Connect. Grow with AI-powered mentorship.
          </p>
        </div>

        <div className="flex gap-10 mt-6 md:mt-0 text-sm text-gray-400">
          <div className="flex flex-col gap-2">
            <p className="text-white">Product</p>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-white">Company</p>
            <a href="#">About</a>
            <a href="#">Careers</a>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-white">Support</p>
            <a href="#">Help</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 py-4">
        © {new Date().getFullYear()} SkillBridge AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;