import DashboardLayout from "../layouts/DashboardLayout";
import { useAuth } from "../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="glass p-8 rounded-xl">

        {/* USER INFO */}
        <h1 className="text-2xl font-bold">{user?.name || "User Name"}</h1>
        <p className="text-gray-400">{user?.email}</p>

        {/* SKILLS */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-3">Skills</h2>

          <div className="flex flex-wrap gap-3">
            {["React", "Node.js", "AI Basics", "DSA"].map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-white/10 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* PROGRESS */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-3">Learning Progress</h2>

          <div className="w-full bg-white/10 h-3 rounded-full">
            <div className="w-2/3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          </div>

          <p className="text-sm text-gray-400 mt-2">
            66% completed your learning journey
          </p>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default Profile;