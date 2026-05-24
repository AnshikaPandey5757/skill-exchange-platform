import { useState, useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";
import { motion } from "framer-motion";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { id: 1, from: "ai", text: "Hello! I am your AI mentor 🚀. How can I help you today?" },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate AI typing and response
    setIsTyping(true);
    setTimeout(() => {
      const aiResponses = [
        "That's a great question! Let me help you with that.",
        "I understand. Here's what I suggest...",
        "Excellent point! Here's my perspective...",
        "Let me break that down for you.",
      ];
      const aiMessage = {
        id: Date.now() + 1,
        from: "ai",
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[80vh] glass rounded-2xl p-6 border border-white/10">
      {/* Header */}
      <div className="mb-4 pb-4 border-b border-white/10">
        <h2 className="text-xl font-bold">💬 Chat with AI Mentor</h2>
        <p className="text-xs text-gray-400 mt-1">Get instant guidance and support</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 p-2">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-2 p-4 rounded-2xl rounded-bl-none bg-white/10"
          >
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ delay: i * 0.15, duration: 0.8, repeat: Infinity }}
                  className="w-2 h-2 bg-purple-400 rounded-full"
                />
              ))}
            </div>
          </motion.div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input Section */}
      <div className="mt-4 pt-4 border-t border-white/10 flex gap-3">
        <input
          className="flex-1 p-3 rounded-xl bg-white/10 border border-white/20 focus:border-purple-500/50 focus:bg-white/20 outline-none transition-all"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your question... (Shift+Enter for new line)"
          disabled={isTyping}
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={sendMessage}
          disabled={isTyping || !input.trim()}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl hover:shadow-lg hover:shadow-purple-600/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          ✓ Send
        </motion.button>
      </div>
    </div>
  );
};

export default ChatBox;