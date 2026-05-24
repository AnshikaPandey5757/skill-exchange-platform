import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check localStorage on app load
  useEffect(() => {
    const storedUser = localStorage.getItem("skillbridge_user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);
  }, []);

  // Login Function
  const login = (userData) => {
    setUser(userData);

    localStorage.setItem(
      "skillbridge_user",
      JSON.stringify(userData)
    );
  };

  // Logout Function
  const logout = () => {
    setUser(null);

    localStorage.removeItem("skillbridge_user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;