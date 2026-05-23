import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <Link
          to="/"
          className="text-3xl font-bold text-cyan-400"
        >
          SkillBridge
        </Link>

        <div className="flex gap-8 items-center">

          <Link
            to="/"
            className="hover:text-cyan-400 transition"
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            className="hover:text-cyan-400 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/chat"
            className="hover:text-cyan-400 transition"
          >
            Chat
          </Link>

          <Link
            to="/login"
            className="
              bg-cyan-500
              hover:bg-cyan-600
              px-5
              py-2
              rounded-xl
              transition
            "
          >
            Login
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;