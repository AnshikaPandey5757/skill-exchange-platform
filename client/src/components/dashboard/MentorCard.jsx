import { motion } from "framer-motion";

const MentorCard = ({ name, expertise, rating = 4.5 }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="glass p-5 rounded-2xl border border-white/10 hover:border-blue-500/30 card-hover transition group"
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <h3 className="text-lg font-bold group-hover:text-blue-300 transition">{name}</h3>
          <p className="text-xs text-gray-500 mt-1">Expert Mentor</p>
        </div>
        <motion.span
          whileHover={{ scale: 1.1 }}
          className="text-yellow-400 text-lg font-bold flex items-center gap-1"
        >
          ⭐ {rating}
        </motion.span>
      </div>

      <p className="text-sm text-gray-400 mt-2 line-clamp-2">{expertise}</p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-blue-600/50 transition-all font-medium"
      >
        🤝 Connect
      </motion.button>
    </motion.div>
  );
};

export default MentorCard;