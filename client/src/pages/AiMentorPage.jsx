import DashboardLayout from "../layouts/DashboardLayout";
import { useState } from "react";
import Button from "../components/common/Button";

const AiMentorPage = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleAskAI = async () => {
    if (!prompt.trim()) return;

    // mock AI response (replace with real API later)
    setResponse(
      "🚀 AI Mentor Suggestion:\n\n" +
      "1. Learn fundamentals\n2. Build projects\n3. Practice daily\n4. Apply for internships"
    );
  };

  return (
    <DashboardLayout>
      <div className="grid md:grid-cols-2 gap-6">

        {/* INPUT SECTION */}
        <div className="glass p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-4">AI Mentor</h2>

          <textarea
            className="w-full h-40 p-3 rounded-lg bg-white/10 outline-none"
            placeholder="Ask your AI mentor anything..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <div className="mt-4">
            <Button onClick={handleAskAI}>Generate Guidance</Button>
          </div>
        </div>

        {/* RESPONSE SECTION */}
        <div className="glass p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-4">AI Response</h2>

          <pre className="text-sm text-gray-300 whitespace-pre-wrap">
            {response || "Your AI guidance will appear here..."}
          </pre>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default AiMentorPage;