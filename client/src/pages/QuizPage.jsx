import { motion } from "framer-motion";
import DashboardLayout from "../layouts/DashboardLayout";
import Quiz from "../components/common/Quiz";
import { useGamification } from "../context/GamificationContext";
import { useToast } from "../context/ToastContext";

const QuizPage = () => {
  const { addXP } = useGamification();
  const { addToast } = useToast();

  const handleQuizComplete = (result) => {
    addXP(result.score * 10);
    addToast(
      `Great! You earned ${result.score * 10} XP! 🎉`,
      "success",
      3000
    );
  };

  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold mb-2">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Assessment Quiz
          </span>
        </h1>
        <p className="text-gray-400">
          Test your knowledge and earn XP badges for correct answers.
        </p>
      </motion.div>

      <div className="flex justify-center py-8">
        <Quiz onComplete={handleQuizComplete} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid md:grid-cols-3 gap-6 mt-12"
      >
        <div className="glass rounded-2xl p-6 border border-white/10 text-center">
          <p className="text-3xl mb-2">🏆</p>
          <p className="font-semibold mb-2">Earn Badges</p>
          <p className="text-sm text-gray-400">Get rewards for high scores</p>
        </div>
        <div className="glass rounded-2xl p-6 border border-white/10 text-center">
          <p className="text-3xl mb-2">⚡</p>
          <p className="font-semibold mb-2">Gain XP</p>
          <p className="text-sm text-gray-400">Level up faster</p>
        </div>
        <div className="glass rounded-2xl p-6 border border-white/10 text-center">
          <p className="text-3xl mb-2">📈</p>
          <p className="font-semibold mb-2">Track Progress</p>
          <p className="text-sm text-gray-400">Monitor your growth</p>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default QuizPage;
