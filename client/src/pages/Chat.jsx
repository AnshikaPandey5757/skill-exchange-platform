import DashboardLayout from "../layouts/DashboardLayout";
import ChatBox from "../components/chat/ChatBox";

function Chat() {
  return (
    <DashboardLayout>

      <div className="mb-10">

        <h1 className="text-5xl font-bold">
          Live Collaboration Chat 💬
        </h1>

        <p className="text-gray-400 mt-3">
          Learn, teach, and collaborate in real-time.
        </p>

      </div>

      <ChatBox />

    </DashboardLayout>
  );
}

export default Chat;