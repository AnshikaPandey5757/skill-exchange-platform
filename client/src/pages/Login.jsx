import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Button from "../components/common/Button";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <MainLayout>
      <div className="flex justify-center items-center py-20">

        <div className="glass p-8 rounded-xl w-full max-w-md">

          <h2 className="text-2xl font-bold mb-6 text-center">
            Welcome Back
          </h2>

          <input
            className="w-full mb-4 p-3 rounded-lg bg-white/10 outline-none"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="w-full mb-6 p-3 rounded-lg bg-white/10 outline-none"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button className="w-full" onClick={handleLogin}>
            Login
          </Button>

        </div>

      </div>
    </MainLayout>
  );
};

export default Login;