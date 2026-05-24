import Sidebar from "../components/common/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64">

        {/* Top spacing bar (optional header area) */}
        <div className="h-16 border-b border-white/10 flex items-center px-6">
          <h2 className="text-sm text-gray-400">
            Dashboard
          </h2>
        </div>

        {/* Page Content */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;