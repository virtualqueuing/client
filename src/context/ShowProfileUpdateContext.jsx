import React, { useState, createContext } from "react";

export const ShowProfileUpdateContext = createContext();

export const ShowProfileUpdateContextProvider = ({ children }) => {
  const [showProfileUpdateModal, setShowProfileUpdateModal] = useState(false);

  return (
    <ShowProfileUpdateContext.Provider
      value={{ showProfileUpdateModal, setShowProfileUpdateModal }}
    >
      {children}
    </ShowProfileUpdateContext.Provider>
  );
};
