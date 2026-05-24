import { motion } from "framer-motion";

const SkillCard = ({ skill, level = 0 }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="glass p-5 rounded-2xl border border-white/10 hover:border-purple-500/30 card-hover transition overflow-hidden group"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold group-hover:text-purple-300 transition">{skill}</h3>
        <span className="text-sm font-bold bg-purple-500/20 px-2 py-1 rounded-lg text-purple-300">{level}%</span>
      </div>

      <div className="mt-3 w-full bg-white/10 h-3 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg shadow-purple-500/50"
        />
      </div>

      <p className="text-xs mt-2 text-gray-400">Keep practicing to improve your skills</p>
    </motion.div>
  );
};

export default SkillCard;