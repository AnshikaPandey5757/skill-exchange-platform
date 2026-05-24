import MainLayout from "../layouts/MainLayout";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const features = [
    {
      icon: "🗺️",
      title: "AI Roadmaps",
      desc: "Personalized learning paths generated using AI.",
      color: "from-purple-500 to-blue-500",
    },
    {
      icon: "🤝",
      title: "Mentor Matching",
      desc: "Connect with experts based on your skills and goals.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "💬",
      title: "Real-time Chat",
      desc: "Ask doubts instantly using AI-powered mentorship.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      desc: "Monitor your learning journey with detailed analytics.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: "🎯",
      title: "Skill Assessment",
      desc: "Get real-time feedback on your skills and improvement areas.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: "🚀",
      title: "Career Growth",
      desc: "Accelerate your career with industry-aligned skills.",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <MainLayout>
      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 relative"
      >
        {/* Background gradient animation */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 blur-3xl" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold leading-tight"
        >
          Learn Skills Faster with{" "}
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            AI Mentorship
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-400 mt-8 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          SkillBridge AI connects you with mentors, AI guidance, and real-time
          learning paths to accelerate your career growth. Master any skill with personalized guidance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 flex justify-center gap-6 flex-wrap"
        >
          <Link to="/signup">
            <Button>🚀 Get Started Free</Button>
          </Link>
          <Link to="/dashboard">
            <Button variant="secondary">📊 Explore Dashboard</Button>
          </Link>
        </motion.div>
      </motion.section>

      {/* FEATURES SECTION */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 mb-20"
      >
        {features.map((feature, i) => (
          <motion.div key={i} variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`glass p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all overflow-hidden group`}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} opacity-20 mb-4 group-hover:opacity-30 transition-all`} />
              <p className="text-3xl mb-3">{feature.icon}</p>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-300 transition">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.section>

      {/* CTA SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass p-12 rounded-3xl border border-purple-500/30 text-center mb-20 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Join thousands of learners already mastering new skills with AI-powered mentorship.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/signup">
            <Button>Start Learning Now</Button>
          </Link>
          <Button variant="secondary">Learn More</Button>
        </div>
      </motion.section>
    </MainLayout>
  );
};

export default Home;