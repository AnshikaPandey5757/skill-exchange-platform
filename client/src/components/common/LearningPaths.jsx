import { motion } from "framer-motion";
import { useState } from "react";

const LearningPaths = () => {
  const [selectedPath, setSelectedPath] = useState(null);

  const paths = [
    {
      id: 1,
      title: "Frontend Developer",
      icon: "🎨",
      duration: "12 weeks",
      skills: ["HTML/CSS", "JavaScript", "React", "Responsive Design", "Web Performance"],
      difficulty: "Intermediate",
      students: 2840,
      rating: 4.8,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Full Stack Developer",
      icon: "🔧",
      duration: "16 weeks",
      skills: ["Frontend Basics", "Backend (Node.js)", "Databases", "APIs", "Deployment"],
      difficulty: "Advanced",
      students: 1920,
      rating: 4.9,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Data Scientist",
      icon: "📊",
      duration: "14 weeks",
      skills: ["Python", "Data Analysis", "Machine Learning", "Statistics", "SQL"],
      difficulty: "Advanced",
      students: 1540,
      rating: 4.7,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      title: "Mobile App Developer",
      icon: "📱",
      duration: "12 weeks",
      skills: ["React Native", "Mobile UI/UX", "State Management", "APIs", "Testing"],
      difficulty: "Intermediate",
      students: 1230,
      rating: 4.6,
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "DevOps Engineer",
      icon: "⚙️",
      duration: "10 weeks",
      skills: ["Docker", "Kubernetes", "CI/CD", "Cloud Platforms", "Infrastructure"],
      difficulty: "Advanced",
      students: 890,
      rating: 4.8,
      color: "from-red-500 to-orange-500",
    },
    {
      id: 6,
      title: "AI/Machine Learning",
      icon: "🤖",
      duration: "18 weeks",
      skills: ["Deep Learning", "NLP", "Computer Vision", "TensorFlow", "Model Deployment"],
      difficulty: "Expert",
      students: 650,
      rating: 4.9,
      color: "from-indigo-500 to-purple-500",
    },
  ];

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
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-4xl font-bold mb-2">📚 Learning Paths</h2>
        <p className="text-gray-400">Choose a pre-built path to master a new skill</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {paths.map((path) => (
          <motion.div
            key={path.id}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="glass rounded-2xl border border-white/10 overflow-hidden group cursor-pointer"
            onClick={() => setSelectedPath(path)}
          >
            <div className={`h-2 bg-gradient-to-r ${path.color}`} />
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <span className="text-4xl">{path.icon}</span>
                <span className="text-xs bg-purple-500/20 px-3 py-1 rounded-full text-purple-300">
                  {path.difficulty}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-300 transition">
                {path.title}
              </h3>

              <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                <span>⏱ {path.duration}</span>
                <span>👥 {path.students.toLocaleString()}</span>
              </div>

              <div className="flex items-center gap-1 mb-4">
                <span className="text-yellow-400">⭐ {path.rating}</span>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-gray-500 font-semibold">Key Skills:</p>
                <div className="flex flex-wrap gap-2">
                  {path.skills.slice(0, 3).map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white/10 px-2 py-1 rounded-lg text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                  {path.skills.length > 3 && (
                    <span className="text-xs text-gray-500">+{path.skills.length - 3} more</span>
                  )}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full mt-4 py-2 bg-gradient-to-r ${path.color} rounded-lg font-semibold text-white hover:shadow-lg transition-all`}
              >
                Start Path
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Path Details Modal */}
      {selectedPath && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedPath(null)}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="glass rounded-2xl p-8 max-w-2xl w-full border border-white/10"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">{selectedPath.icon}</span>
              <div>
                <h2 className="text-3xl font-bold">{selectedPath.title}</h2>
                <p className="text-gray-400">{selectedPath.duration} course</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-400">{selectedPath.duration}</p>
                <p className="text-xs text-gray-400">Duration</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-400">⭐ {selectedPath.rating}</p>
                <p className="text-xs text-gray-400">Rating</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-400">{selectedPath.difficulty}</p>
                <p className="text-xs text-gray-400">Level</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">📚 Course Curriculum</h3>
              <div className="space-y-2">
                {selectedPath.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <span className="text-purple-400">✓</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex-1 py-3 bg-gradient-to-r ${selectedPath.color} rounded-lg font-semibold text-white`}
              >
                Start Learning
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedPath(null)}
                className="flex-1 py-3 bg-white/10 rounded-lg font-semibold text-white hover:bg-white/20 transition"
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default LearningPaths;