import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../common/Button";

const AiMentor = () => {
  const [goal, setGoal] = useState("");
  const [guidance, setGuidance] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateMentorshipPlan = async () => {
    if (!goal.trim()) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setGuidance({
        goal,
        steps: [
          { phase: "Phase 1: Foundation", desc: "Build strong fundamentals and core concepts", duration: "2 weeks" },
          { phase: "Phase 2: Practice", desc: "Solve real-world problems and mini projects", duration: "3 weeks" },
          { phase: "Phase 3: Advanced", desc: "Learn advanced techniques and best practices", duration: "2 weeks" },
          { phase: "Phase 4: Mastery", desc: "Build production-level projects", duration: "4 weeks" },
        ],
        resources: [
          "Free online courses on YouTube",
          "Interactive coding platforms (LeetCode, HackerRank)",
          "Documentation and blogs",
          "Community forums and Discord servers",
        ],
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-colors"
      >
        <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          🎯 AI Mentorship Plan
        </h2>
        <p className="text-gray-400 text-sm mb-6">Tell your AI mentor what skill you want to master</p>

        <textarea
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="e.g., Learn React and build a full-stack app..."
          className="w-full h-32 p-4 rounded-xl bg-white/10 border border-white/20 outline-none focus:border-purple-500/50 focus:bg-white/20 transition-all resize-none"
        />

        <div className="mt-6 flex gap-3">
          <Button onClick={generateMentorshipPlan} loading={loading}>
            {loading ? "🔄 Generating..." : "✨ Generate Plan"}
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setGoal("");
              setGuidance(null);
            }}
          >
            Clear
          </Button>
        </div>
      </motion.div>

      {/* Guidance Section */}
      {guidance && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Goal Summary */}
          <div className="glass p-6 rounded-2xl border border-blue-500/20">
            <h3 className="text-lg font-semibold mb-2 text-blue-300">Your Goal:</h3>
            <p className="text-gray-300 leading-relaxed">{guidance.goal}</p>
          </div>

          {/* Learning Path */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-300">📚 Learning Roadmap</h3>
            <div className="space-y-3">
              {guidance.steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-4 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/10 transition-all group cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-purple-300 group-hover:text-purple-200 transition">{step.phase}</h4>
                      <p className="text-gray-400 text-sm mt-1">{step.desc}</p>
                    </div>
                    <span className="text-xs bg-purple-500/20 px-3 py-1 rounded-full text-purple-300 whitespace-nowrap ml-4">
                      {step.duration}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-300">🔗 Recommended Resources</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {guidance.resources.map((resource, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-4 rounded-xl border border-green-500/20 hover:border-green-500/50 hover:bg-green-500/10 transition-all flex items-center gap-3 group"
                >
                  <span className="text-xl group-hover:scale-125 transition-transform">→</span>
                  <span className="text-gray-300 group-hover:text-white transition">{resource}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tips Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass p-6 rounded-2xl border border-amber-500/20 bg-amber-500/5"
          >
            <h3 className="text-lg font-semibold mb-3 text-amber-300">💡 Pro Tips</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>✓ Consistency is key - practice daily for best results</li>
              <li>✓ Build projects alongside learning to reinforce concepts</li>
              <li>✓ Join communities and share your progress</li>
              <li>✓ Don't rush - focus on understanding, not speed</li>
            </ul>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default AiMentor;