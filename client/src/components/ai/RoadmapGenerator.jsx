import { useState } from "react";
import Button from "../common/Button";

const RoadmapGenerator = () => {
  const [skill, setSkill] = useState("");
  const [roadmap, setRoadmap] = useState([]);

  const generateRoadmap = () => {
    if (!skill) return;

    setRoadmap([
      `Week 1: Learn basics of ${skill}`,
      `Week 2: Build mini project`,
      `Week 3: Advanced concepts`,
      `Week 4: Real-world project`,
    ]);
  };

  return (
    <div className="glass p-6 rounded-xl">

      <h2 className="text-lg font-bold mb-4">
        AI Roadmap Generator
      </h2>

      <input
        className="w-full p-3 bg-white/10 rounded-lg outline-none"
        placeholder="Enter skill (e.g. React, AI, DSA)"
        onChange={(e) => setSkill(e.target.value)}
      />

      <div className="mt-4">
        <Button onClick={generateRoadmap}>
          Generate Roadmap
        </Button>
      </div>

      {roadmap.length > 0 && (
        <ul className="mt-6 space-y-2 text-gray-300 text-sm">
          {roadmap.map((item, i) => (
            <li key={i}>✔ {item}</li>
          ))}
        </ul>
      )}

    </div>
  );
};

export default RoadmapGenerator;