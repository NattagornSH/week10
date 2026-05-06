import { useState } from "react";

export const useAuth = () => {
  // Initialize state from localStorage using lazy initialization
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem("userEmail");
  });
  const [userEmail, setUserEmail] = useState(() => {
    return localStorage.getItem("userEmail") || "";
  });

  const login = (email) => {
    localStorage.setItem("userEmail", email);
    setUserEmail(email);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    setUserEmail("");
  };

  return {
    isLoggedIn,
    userEmail,
    login,
    logout,
  };
};
