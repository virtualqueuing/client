import React, { Suspense, useContext } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyles from "./components/styles/GlobalStyles";
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import router from "./router";
import LoadingPage from "./pages/LoadingPage";
import { UserContext } from "./pages/Context";
import Homepage from "./pages/Homepage";

const App = () => {
  const { user } = useContext(UserContext);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Suspense fallback={<LoadingPage />}>
          <BrowserRouter>
            <Routes>
              {user.data ? (
                <Route path="/" exact element={<Homepage />} />
              ) : (
                <Route path="/" exact element={<Navigate to="/home" replace />} />
              )}
              {router.map((routeConfig) => {
                const { path } = routeConfig.path;
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
