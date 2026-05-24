import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/dashBoard";
import Chat from "../pages/Chat";
import Profile from "../pages/Profile";
import AiMentorPage from "../pages/AiMentorPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ai" element={<AiMentorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;