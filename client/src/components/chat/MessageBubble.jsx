import { motion } from "framer-motion";

const MessageBubble = ({ message }) => {
  const isUser = message.from === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`p-4 rounded-2xl max-w-[70%] transition-all ${
        isUser
          ? "ml-auto bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-600/30 rounded-br-none"
          : "bg-white/10 text-white border border-white/20 shadow-lg shadow-white/10 rounded-bl-none hover:bg-white/15"
      }`}
    >
      <p className="text-sm leading-relaxed">{message.text}</p>
      <span className="text-xs mt-2 block opacity-70">
        {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </span>
    </motion.div>
  );
};

export default MessageBubble;