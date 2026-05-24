import { useState } from "react";
import { motion } from "framer-motion";

const Quiz = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const questions = [
    {
      id: 1,
      question: "What is React primarily used for?",
      options: [
        "Building user interfaces",
        "Server-side processing",
        "Database management",
        "System administration",
      ],
      correct: 0,
    },
    {
      id: 2,
      question: "What does 'state' represent in React?",
      options: [
        "The component's internal data",
        "External API data",
        "CSS styling",
        "HTML structure",
      ],
      correct: 0,
    },
    {
      id: 3,
      question: "Which hook is used for side effects in React?",
      options: ["useState", "useEffect", "useContext", "useReducer"],
      correct: 1,
    },
    {
      id: 4,
      question: "What is the purpose of props in React?",
      options: [
        "To store local state",
        "To pass data from parent to child components",
        "To replace CSS",
        "To handle database queries",
      ],
      correct: 1,
    },
    {
      id: 5,
      question: "How do you handle form submissions in React?",
      options: [
        "Using form tags only",
        "Using preventDefault on the form event",
        "Always reloading the page",
        "Only with vanilla JavaScript",
      ],
      correct: 1,
    },
  ];

  const handleAnswerClick = (selectedOption) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = selectedOption;
    setSelectedAnswers(newAnswers);

    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 500);
    } else {
      setTimeout(() => {
        setShowResults(true);
      }, 500);
    }
  };

  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!showResults ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-8 border border-white/10"
        >
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm text-gray-400">
                Question {currentQuestion + 1} of {questions.length}
              </p>
              <p className="text-sm font-semibold text-purple-400">{percentage}%</p>
            </div>
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                transition={{ duration: 0.5 }}
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
              />
            </div>
          </div>

          {/* Question */}
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-8">{questions[currentQuestion].question}</h2>

            {/* Options */}
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswerClick(index)}
                  className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                    selectedAnswers[currentQuestion] === index
                      ? "bg-purple-500/20 border-purple-500/50"
                      : "bg-white/5 border-white/10 hover:border-white/30"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedAnswers[currentQuestion] === index
                          ? "border-purple-500 bg-purple-500"
                          : "border-gray-400"
                      }`}
                    >
                      {selectedAnswers[currentQuestion] === index && (
                        <span className="text-white text-sm">✓</span>
                      )}
                    </div>
                    <span>{option}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass rounded-2xl p-12 border border-white/10 text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl mb-4"
          >
            {percentage >= 80 ? "🎉" : percentage >= 60 ? "👍" : "📚"}
          </motion.div>

          <h2 className="text-3xl font-bold mb-2">Quiz Complete!</h2>
          <p className="text-gray-400 mb-6">Great effort!</p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="text-3xl font-bold text-purple-400">{score}/{questions.length}</p>
              <p className="text-xs text-gray-400 mt-1">Correct Answers</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="text-3xl font-bold text-blue-400">{percentage}%</p>
              <p className="text-xs text-gray-400 mt-1">Score</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="text-3xl font-bold text-green-400">+{score * 10} XP</p>
              <p className="text-xs text-gray-400 mt-1">Earned</p>
            </div>
          </div>

          <p className="text-sm text-gray-400 mb-6">
            {percentage >= 80
              ? "Excellent work! You've mastered this topic."
              : percentage >= 60
              ? "Good effort! Review the concepts and try again."
              : "Keep practicing to improve your score."}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (onComplete) onComplete({ score, percentage });
              setCurrentQuestion(0);
              setScore(0);
              setShowResults(false);
              setSelectedAnswers([]);
            }}
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-purple-600/50 transition-all"
          >
            Restart Quiz
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default Quiz;