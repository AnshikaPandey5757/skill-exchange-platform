import DashboardLayout from "../layouts/DashboardLayout";
import { useAuth } from "../hooks/useAuth";
import { motion } from "framer-motion";
import SkillCard from "../components/dashboard/SkillCard";
import MentorCard from "../components/dashboard/MentorCard";
import MatchCard from "../components/dashboard/MatchCard";
import GamificationStats from "../components/dashboard/GamificationStats";

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    { icon: "📚", label: "Skills Learned", value: "12", color: "from-purple-600 to-blue-500" },
    { icon: "⚡", label: "AI Sessions", value: "28", color: "from-blue-600 to-cyan-500" },
    { icon: "🤝", label: "Mentor Matches", value: "5", color: "from-green-600 to-emerald-500" },
    { icon: "🔥", label: "Learning Streak", value: "15d", color: "from-orange-600 to-red-500" },
  ];

  const recentSkills = [
    { name: "React.js", level: 75 },
    { name: "Node.js", level: 60 },
    { name: "AI/ML Basics", level: 45 },
    { name: "Data Structures", level: 80 },
  ];

  const recentMentors = [
    { name: "Sarah Chen", expertise: "Full-Stack Development", rating: 4.9 },
    { name: "Alex Kumar", expertise: "AI & ML Expert", rating: 4.8 },
    { name: "Emma Davis", expertise: "System Design", rating: 4.7 },
  ];

  const topMatches = [
    { user: "John Developer", matchScore: 92 },
    { user: "Lisa Coder", matchScore: 88 },
    { user: "Mike Tech", matchScore: 85 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
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
    <DashboardLayout>
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold mb-2">
          Welcome back, <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{user?.name || "User"}</span> 👋
        </h1>
        <p className="text-gray-400">You're making great progress on your learning journey!</p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-4 gap-6 mb-8"
      >
        {stats.map((stat, i) => (
          <motion.div key={i} variants={itemVariants} className="group">
            <div className={`glass p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all overflow-hidden`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl group-hover:scale-125 transition-transform duration-300">{stat.icon}</span>
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${stat.color} opacity-20`} />
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
              <p className={`text-3xl font-bold mt-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-1 space-y-4"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>📈</span> Recent Skills
          </h2>
          {recentSkills.map((skill, i) => (
            <motion.div key={i} variants={itemVariants}>
              <SkillCard skill={skill.name} level={skill.level} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mentors Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-1 space-y-4"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>🎯</span> Top Mentors
          </h2>
          {recentMentors.map((mentor, i) => (
            <motion.div key={i} variants={itemVariants}>
              <MentorCard name={mentor.name} expertise={mentor.expertise} rating={mentor.rating} />
            </motion.div>
          ))}
        </motion.div>

        {/* Matches Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-1 space-y-4"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>🔗</span> Best Matches
          </h2>
          {topMatches.map((match, i) => (
            <motion.div key={i} variants={itemVariants}>
              <MatchCard user={match.user} matchScore={match.matchScore} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Gamification Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8"
      >
        <GamificationStats />
      </motion.div>
    </DashboardLayout>
  );
};

export default Dashboard;