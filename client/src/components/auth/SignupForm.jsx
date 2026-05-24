import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // 🔥 TEMP MOCK (replace with API later)
      console.log({ name, email, password });

      alert("Account created!");
      navigate("/login");
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <div className="glass p-8 rounded-xl w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">Signup</h2>

      <form onSubmit={handleSignup} className="space-y-4">

        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded-lg bg-white/10"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-white/10"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg bg-white/10"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-600 py-3 rounded-lg hover:bg-blue-700">
          Create Account
        </button>

      </form>
    </div>
  );
};

export default SignupForm;