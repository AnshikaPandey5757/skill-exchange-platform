import { motion } from "framer-motion";

function MentorCard({ name, skill, rating }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-slate-900 p-6 rounded-3xl border border-slate-800"
    >
      <div className="flex items-center gap-4">

        <div className="w-16 h-16 rounded-full bg-cyan-500"></div>

        <div>
          <h1 className="text-xl font-bold">
            {name}
          </h1>

          <p className="text-gray-400">
            Teaches {skill}
          </p>
        </div>

      </div>

      <div className="mt-5 flex justify-between items-center">

        <span className="text-yellow-400">
          ⭐ {rating}
        </span>

        <button className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-xl transition">
          Connect
        </button>

      </div>
    </motion.div>
  );
}

export default MentorCard;