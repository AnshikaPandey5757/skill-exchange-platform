import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const links = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Chat", path: "/chat" },
    { name: "AI Mentor", path: "/ai-mentor" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold tracking-wide cursor-pointer group"
        >
          <Link to="/">
            <span className="group-hover:text-purple-400 transition">SkillBridge</span>
            <span className="text-purple-400 group-hover:text-blue-400 transition"> AI</span>
          </Link>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          {links.map((link, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }}>
              <Link
                className="hover:text-white hover:text-purple-400 transition relative group"
                to={link.path}
              >
                {link.name}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 w-0 group-hover:w-full transition-all duration-300"
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex gap-3 items-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
            title="Toggle theme"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </motion.button>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/login" className="px-4 py-2 text-sm hover:text-purple-300 transition">
              Login
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/signup" className="btn-glow text-sm">
              Get Started
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl hover:text-purple-400 transition"
        >
          {open ? "✕" : "☰"}
        </motion.button>
      </div>

      {/* Mobile Dropdown */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-6 py-4 flex flex-col gap-3 text-gray-300 border-t border-white/10">
          {links.map((link, i) => (
            <motion.div key={i} initial={{ x: -20 }} animate={{ x: 0 }} transition={{ delay: i * 0.1 }}>
              <Link
                to={link.path}
                className="block hover:text-purple-400 hover:translate-x-2 transition-all"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <div className="flex gap-2 mt-3 pt-3 border-t border-white/10">
            <Link to="/login" className="flex-1 px-3 py-2 text-sm text-center hover:text-purple-400 transition" onClick={() => setOpen(false)}>
              Login
            </Link>
            <Link to="/signup" className="flex-1 px-3 py-2 text-sm text-center bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg" onClick={() => setOpen(false)}>
              Sign Up
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;