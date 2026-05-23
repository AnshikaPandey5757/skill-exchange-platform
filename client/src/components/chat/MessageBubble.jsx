import { motion } from "framer-motion";

function MessageBubble({ message, sender }) {
  const isUser = sender === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}
    >
      <div
        className={`
          max-w-[70%]
          px-5
          py-3
          rounded-2xl
          text-white
          shadow-lg
          ${
            isUser
              ? "bg-cyan-500 rounded-br-none"
              : "bg-slate-800 rounded-bl-none"
          }
        `}
      >
        {message}
      </div>
    </motion.div>
  );
}

export default MessageBubble;