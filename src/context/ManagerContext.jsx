import React, { useState, createContext } from "react";
export const ManagerContext = createContext();

export const ManagerContextProvider = ({ children }) => {
  const [manager, setManager] = useState(false);
  return (
    <ManagerContext.Provider value={{ manager, setManager }}>{children}</ManagerContext.Provider>
  );
};
