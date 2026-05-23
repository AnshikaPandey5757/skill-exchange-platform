import { motion } from "framer-motion";

function SkillCard({ title, level, students }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-lg"
    >
      <h1 className="text-2xl font-bold text-cyan-400">
        {title}
      </h1>

      <p className="mt-4 text-gray-400">
        Level: {level}
      </p>

      <p className="mt-2 text-gray-500">
        {students} learners connected
      </p>

      <button className="mt-6 bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-xl transition">
        Explore
      </button>
    </motion.div>
  );
}

export default SkillCard;