import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `block px-3 py-2 rounded-lg transition ${
      isActive ? "bg-purple-600" : "hover:bg-white/10"
    }`;

  return (
    <div className="h-screen w-64 fixed glass p-6 flex flex-col gap-4">

      <h1 className="text-xl font-bold mb-6">SkillBridge AI</h1>

      <NavLink to="/dashboard" className={linkClass}>
        Dashboard
      </NavLink>

      <NavLink to="/profile" className={linkClass}>
        Profile
      </NavLink>

      <NavLink to="/chat" className={linkClass}>
        Chat
      </NavLink>

      <NavLink to="/ai-mentor" className={linkClass}>
        AI Mentor
      </NavLink>

    </div>
  );
};

export default Sidebar;