import React, { useState, useEffect, createContext } from "react";
export const Context = createContext();
export const showNewFormContext = React.createContext();
export const showRequiredInfoContext = React.createContext();

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({ data: JSON.parse(localStorage.getItem("user")) || null });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user.data));
  }, [user]);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
