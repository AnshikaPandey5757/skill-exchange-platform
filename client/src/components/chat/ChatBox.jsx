import { useState } from "react";
import MessageBubble from "./MessageBubble";
import { motion } from "framer-motion";

function ChatBox() {
  const [messages, setMessages] = useState([
    {
      sender: "mentor",
      message: "Hey 👋 What do you want to learn today?",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage = {
      sender: "user",
      message: input,
    };

    setMessages([...messages, newMessage]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "mentor",
          message: "Awesome! AI Mentor is analyzing your request 🚀",
        },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 h-[80vh] flex flex-col">

      <div className="flex-1 overflow-y-auto pr-2">

        {messages.map((msg, index) => (
          <MessageBubble
            key={index}
            sender={msg.sender}
            message={msg.message}
          />
        ))}

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-5 flex gap-4"
      >
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="
            flex-1
            bg-slate-800
            border
            border-slate-700
            rounded-2xl
            px-5
            py-4
            outline-none
            focus:border-cyan-500
          "
        />

        <button
          onClick={sendMessage}
          className="
            bg-cyan-500
            hover:bg-cyan-600
            px-8
            rounded-2xl
            font-semibold
            transition
          "
        >
          Send
        </button>
      </motion.div>

    </div>
  );
}

export default ChatBox;