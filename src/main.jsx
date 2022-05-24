// import { ChakraProvider } from "@chakra-ui/react";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import store, { persistor } from "./store";

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import "./Custom-theme.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}> */}
          <App />
        {/* </PersistGate>
      </Provider> */}
    </ThemeProvider>
  </React.StrictMode>
);
