import React from "react";
import { ThemeProvider } from "styled-components";
import Homepage from "./pages/Homepage";
import theme from "./theme";
import GlobalStyles from "./components/styles/GlobalStyles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Homepage />
      </>
    </ThemeProvider>
  );
};

export default App;
