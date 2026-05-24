import { motion } from "framer-motion";

const MatchCard = ({ user, matchScore = 80 }) => {
  const getScoreColor = (score) => {
    if (score >= 90) return "from-green-500 to-emerald-500";
    if (score >= 75) return "from-blue-500 to-cyan-500";
    return "from-yellow-500 to-orange-500";
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="glass p-5 rounded-2xl border border-white/10 hover:border-green-500/30 card-hover transition group"
    >
      <div className="flex justify-between items-center mb-3">
        <div className="flex-1">
          <h3 className="font-semibold group-hover:text-green-300 transition">{user}</h3>
          <p className="text-xs text-gray-500 mt-1">AI Compatible Match</p>
        </div>
        <motion.span
          whileHover={{ scale: 1.1 }}
          className={`text-lg font-bold bg-gradient-to-r ${getScoreColor(matchScore)} bg-clip-text text-transparent`}
        >
          {matchScore}%
        </motion.span>
      </div>

      <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${matchScore}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r ${getScoreColor(matchScore)} rounded-full shadow-lg`}
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 hover:border-green-500/50 transition-all font-medium text-sm"
      >
        View Profile
      </motion.button>
    </motion.div>
  );
};

export default MatchCard;