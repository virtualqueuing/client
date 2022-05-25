import React from "react";
import { ThemeProvider } from "styled-components";
import Container from "./components/Container";
import theme from "./theme";
import SideMenu from "./components/SideInfo";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Container>
          <SideMenu>
            
          </SideMenu>
        </Container>
      </>
    </ThemeProvider>
  );
};

export default App;
