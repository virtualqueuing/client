import React, { Suspense } from "react";
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import router from "./router";
import LoadingPage from "./pages/LoadingPage";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyles from "./components/styles/GlobalStyles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Suspense fallback={<LoadingPage />}>
          <BrowserRouter>
            <Routes>
              {router.map((routeConfig) => {
                const { path } = routeConfig;
                return <Route {...routeConfig} key={path} />;
              })}
              <Route path="/loading" element={<LoadingPage />} />
              <Route path="*" element={<Navigate to="/error" replace />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </>
    </ThemeProvider>
  );
};

export default App;
