import { useState } from "react";
import { motion } from "framer-motion";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-900 p-10 rounded-3xl w-full max-w-md border border-slate-700 shadow-2xl"
      onSubmit={handleSubmit}
    >
      <h1 className="text-4xl font-bold text-center mb-8 text-cyan-400">
        Welcome Back
      </h1>

      <div className="mb-5">
        <label className="block mb-2 text-gray-300">
          Email
        </label>

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
        />
      </div>

      <div className="mb-7">
        <label className="block mb-2 text-gray-300">
          Password
        </label>

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl text-lg font-semibold transition"
      >
        Login
      </button>
    </motion.form>
  );
}

export default LoginForm;