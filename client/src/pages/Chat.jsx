import DashboardLayout from "../layouts/DashboardLayout";
import { useEffect, useRef, useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hi! I’m your AI Mentor 🚀" },
  ]);

  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { from: "user", text: input },
      { from: "ai", text: "This is a demo AI response 🤖" },
    ]);

    setInput("");
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col h-[80vh]">

        <div className="flex-1 overflow-y-auto space-y-4 p-4 glass rounded-xl">

          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-3 rounded-lg max-w-[70%] ${
                msg.from === "user"
                  ? "ml-auto bg-purple-600"
                  : "bg-white/10"
              }`}
            >
              {msg.text}
            </div>
          ))}

          <div ref={bottomRef} />
        </div>

        <div className="mt-4 flex gap-3">
          <input
            className="flex-1 p-3 rounded-lg bg-white/10"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything..."
          />

          <button
            onClick={sendMessage}
            className="px-5 py-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg"
          >
            Send
          </button>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default Chat;