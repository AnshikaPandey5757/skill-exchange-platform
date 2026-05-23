import Sidebar from "../components/common/Sidebar";

function DashboardLayout({ children }) {
  return (
    <div className="flex bg-slate-950 text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 p-10">
        {children}
      </div>

    </div>
  );
}

export default DashboardLayout;