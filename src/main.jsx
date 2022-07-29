import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { UserContextProvider } from "./pages/Context";
import { ManagerContextProvider } from "./context/ManagerContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <UserContextProvider>
      <ManagerContextProvider>
        <App />
      </ManagerContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
