import { motion } from "framer-motion";

function MatchCard({ skill1, skill2, percentage }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6 rounded-3xl text-white shadow-xl"
    >
      <h1 className="text-2xl font-bold">
        AI Match Found
      </h1>

      <p className="mt-4">
        Teach: {skill1}
      </p>

      <p className="mt-2">
        Learn: {skill2}
      </p>

      <div className="mt-5">

        <div className="w-full bg-white/20 rounded-full h-4">

          <div
            style={{ width: `${percentage}%` }}
            className="bg-white h-4 rounded-full"
          ></div>

        </div>

        <p className="mt-2">
          {percentage}% Match
        </p>

      </div>
    </motion.div>
  );
}

export default MatchCard;