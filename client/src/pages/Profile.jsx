import DashboardLayout from "../layouts/DashboardLayout";

function Profile() {
  return (
    <DashboardLayout>

      <div className="bg-slate-900 p-10 rounded-3xl border border-slate-800 max-w-4xl">

        <div className="flex items-center gap-8">

          <div className="w-32 h-32 rounded-full bg-cyan-500"></div>

          <div>

            <h1 className="text-4xl font-bold">
              Anshika Pandey
            </h1>

            <p className="text-gray-400 mt-2">
              Full Stack Developer
            </p>

            <div className="flex gap-4 mt-5">

              <span className="bg-cyan-500 px-4 py-2 rounded-xl">
                React
              </span>

              <span className="bg-cyan-500 px-4 py-2 rounded-xl">
                Spring Boot
              </span>

              <span className="bg-cyan-500 px-4 py-2 rounded-xl">
                SQL
              </span>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Profile;