import React, { useState, createContext } from "react";
export const Context = createContext();

const defaultActiveQueue = {};

export const activeQueueContext = createContext(defaultActiveQueue);

export const ActiveQueueProvider = (props) => {
  const [state, setState] = useState(defaultActiveQueue);

  return <activeQueueContext.Provider value={state}>{props.children}</activeQueueContext.Provider>;
};
