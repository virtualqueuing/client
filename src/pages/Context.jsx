import React, { useState, createContext } from "react";

export const Context = createContext();
export const showNewFormContext = React.createContext();
export const showRequiredInfoContext = React.createContext();

const defaultActiveQueue = {};

export const activeQueueContext = createContext(defaultActiveQueue);
export const setActiveQueueContext = createContext(undefined);

export const ActiveQueueProvider = (props) => {
  const [state, setState] = useState(defaultActiveQueue);

  return (
    <activeQueueContext.Provider value={state}>
      <setActiveQueueContext.Provider value={setState}>
        {props.children}
      </setActiveQueueContext.Provider>
    </activeQueueContext.Provider>
  );
};
