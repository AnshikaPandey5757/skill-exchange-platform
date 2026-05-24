import { motion } from "framer-motion";
import DashboardLayout from "../layouts/DashboardLayout";
import LearningPaths from "../components/common/LearningPaths";

const LearningPathsPage = () => {
  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold mb-2">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Learning Paths
          </span>
        </h1>
        <p className="text-gray-400">
          Choose a structured learning path tailored to your goals and start mastering new skills today.
        </p>
      </motion.div>

      <LearningPaths />
    </DashboardLayout>
  );
};

export default LearningPathsPage;
