import React from "react";
import { ThemeProvider } from "styled-components";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import theme from "./theme";
import GlobalStyles from "./components/styles/GlobalStyles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Homepage />
        {/* <LoginPage /> */}
      </>
    </ThemeProvider>
  );
};

export default App;
