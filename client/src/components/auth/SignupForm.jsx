import { useState } from "react";
import { motion } from "framer-motion";

function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    skillTeach: "",
    skillLearn: "",
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
      className="bg-slate-900 p-10 rounded-3xl w-full max-w-lg border border-slate-700 shadow-2xl"
      onSubmit={handleSubmit}
    >
      <h1 className="text-4xl font-bold text-center mb-8 text-cyan-400">
        Create Account
      </h1>

      <div className="grid gap-5">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
        />

        <input
          type="text"
          name="skillTeach"
          placeholder="Skill You Can Teach"
          value={formData.skillTeach}
          onChange={handleChange}
          className="p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
        />

        <input
          type="text"
          name="skillLearn"
          placeholder="Skill You Want To Learn"
          value={formData.skillLearn}
          onChange={handleChange}
          className="p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
        />

      </div>

      <button
        type="submit"
        className="w-full mt-8 bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl text-lg font-semibold transition"
      >
        Create Account
      </button>
    </motion.form>
  );
}

export default SignupForm;