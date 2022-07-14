import React, { useState, useEffect, createContext } from "react";
export const Context = createContext();
export const showNewFormContext = React.createContext();
export const showRequiredInfoContext = React.createContext();

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  // TODO: refactor, as localStorage.getItem("user") is always a string
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? { data: JSON.parse(localStorage.getItem("user")) }
      : { data: null }
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user.data));
  }, [user]);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
