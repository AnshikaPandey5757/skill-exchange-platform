import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-72 min-h-screen bg-slate-900 border-r border-slate-800 p-8">

      <h1 className="text-4xl font-bold text-cyan-400">
        SkillBridge
      </h1>

      <div className="mt-16 flex flex-col gap-8 text-lg">

        <Link
          className="hover:text-cyan-400 transition"
          to="/dashboard"
        >
          Dashboard
        </Link>

        <Link
          className="hover:text-cyan-400 transition"
          to="/profile"
        >
          Profile
        </Link>

        <Link
          className="hover:text-cyan-400 transition"
          to="/chat"
        >
          Chat
        </Link>

        <Link
          className="hover:text-cyan-400 transition"
          to="/ai-mentor"
        >
          AI Mentor
        </Link>

      </div>

    </div>
  );
}

export default Sidebar;