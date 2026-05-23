import DashboardLayout from "../layouts/DashboardLayout";

import SkillCard from "../components/dashboard/SkillCard";
import MentorCard from "../components/dashboard/MentorCard";
import MatchCard from "../components/dashboard/MatchCard";

function Dashboard() {
  return (
    <DashboardLayout>

      <div>

        <h1 className="text-5xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-gray-400 mt-3 text-lg">
          Continue your learning journey
        </p>

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-3 gap-6 mt-12">

        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
          <h1 className="text-4xl font-bold text-cyan-400">
            24
          </h1>

          <p className="mt-2 text-gray-400">
            Skills Learned
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
          <h1 className="text-4xl font-bold text-cyan-400">
            12
          </h1>

          <p className="mt-2 text-gray-400">
            Mentors Connected
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
          <h1 className="text-4xl font-bold text-cyan-400">
            98%
          </h1>

          <p className="mt-2 text-gray-400">
            Match Accuracy
          </p>
        </div>

      </div>

      {/* Skill Cards */}

      <div className="mt-16">

        <h1 className="text-3xl font-bold mb-8">
          Trending Skills
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          <SkillCard
            title="React"
            level="Advanced"
            students="1400"
          />

          <SkillCard
            title="UI/UX"
            level="Intermediate"
            students="980"
          />

          <SkillCard
            title="Spring Boot"
            level="Beginner"
            students="620"
          />

        </div>

      </div>

      {/* Mentors */}

      <div className="mt-16">

        <h1 className="text-3xl font-bold mb-8">
          Recommended Mentors
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          <MentorCard
            name="Alex Johnson"
            skill="React"
            rating="4.9"
          />

          <MentorCard
            name="Sarah Smith"
            skill="UI/UX"
            rating="4.8"
          />

        </div>

      </div>

      {/* AI Matching */}

      <div className="mt-16">

        <h1 className="text-3xl font-bold mb-8">
          AI Skill Match
        </h1>

        <MatchCard
          skill1="React"
          skill2="UI/UX"
          percentage="94"
        />

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;