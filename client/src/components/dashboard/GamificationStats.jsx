import { motion } from "framer-motion";
import { useGamification } from "../../context/GamificationContext";

const GamificationStats = () => {
  const { xp, streak, badges, level } = useGamification();

  const xpForNextLevel = (level * 500);
  const currentXP = xp % 500;
  const xpProgress = (currentXP / 500) * 100;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Main Stats Grid */}
      <div className="grid md:grid-cols-4 gap-4">
        {/* Level */}
        <motion.div
          variants={itemVariants}
          className="glass rounded-2xl p-6 border border-white/10 text-center"
        >
          <div className="text-5xl mb-2 animate-bounce">⭐</div>
          <p className="text-gray-400 text-sm mb-2">Level</p>
          <p className="text-3xl font-bold text-yellow-400">{level}</p>
        </motion.div>

        {/* XP */}
        <motion.div
          variants={itemVariants}
          className="glass rounded-2xl p-6 border border-white/10 text-center"
        >
          <div className="text-5xl mb-2">⚡</div>
          <p className="text-gray-400 text-sm mb-2">Total XP</p>
          <p className="text-3xl font-bold text-blue-400">{xp.toLocaleString()}</p>
        </motion.div>

        {/* Streak */}
        <motion.div
          variants={itemVariants}
          className="glass rounded-2xl p-6 border border-white/10 text-center"
        >
          <div className="text-5xl mb-2 animate-pulse">🔥</div>
          <p className="text-gray-400 text-sm mb-2">Streak</p>
          <p className="text-3xl font-bold text-red-400">{streak} days</p>
        </motion.div>

        {/* Badges */}
        <motion.div
          variants={itemVariants}
          className="glass rounded-2xl p-6 border border-white/10 text-center"
        >
          <div className="text-5xl mb-2">🏆</div>
          <p className="text-gray-400 text-sm mb-2">Badges</p>
          <p className="text-3xl font-bold text-purple-400">{badges.length}</p>
        </motion.div>
      </div>

      {/* Level Progress */}
      <motion.div
        variants={itemVariants}
        className="glass rounded-2xl p-6 border border-white/10"
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold flex items-center gap-2">
            <span>📈</span> Progress to Level {level + 1}
          </h3>
          <span className="text-sm text-purple-400 font-semibold">{currentXP}/500 XP</span>
        </div>
        <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${xpProgress}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
          />
        </div>
      </motion.div>

      {/* Badges Display */}
      <motion.div
        variants={itemVariants}
        className="glass rounded-2xl p-6 border border-white/10"
      >
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <span>🎖️</span> Earned Badges ({badges.length})
        </h3>
        {badges.length > 0 ? (
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {badges.map((badge, index) => (
              <motion.div
                key={badge.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring" }}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-4xl mb-2 transition-transform"
                >
                  {badge.icon}
                </motion.div>
                <p className="text-xs font-semibold">{badge.name}</p>
                <p className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition">
                  {badge.description}
                </p>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center py-6">
            Start learning to unlock badges! 🚀
          </p>
        )}
      </motion.div>

      {/* Next Badges */}
      <motion.div
        variants={itemVariants}
        className="glass rounded-2xl p-6 border border-white/10"
      >
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <span>🎯</span> Upcoming Badges
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
            <span>🔥 On Fire - 7-day streak</span>
            <span className="text-xs text-purple-400">{streak}/7</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
            <span>💪 Unstoppable - 30-day streak</span>
            <span className="text-xs text-purple-400">{streak}/30</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
            <span>📚 Scholar - Reach Level 5</span>
            <span className="text-xs text-purple-400">{level}/5</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GamificationStats;