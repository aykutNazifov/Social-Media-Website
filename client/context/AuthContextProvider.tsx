import Router from "next/router";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    setUser(JSON.parse(userData));

    if (JSON.parse(userData) === null) {
      router.push("/login");
    }
  }, []);

  useEffect(() => {
    if (user !== null) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  const login = (data) => {
    setUser(data);
  };

  const logout = () => {
    setUser(null);
    localStorage.setItem("user", null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
