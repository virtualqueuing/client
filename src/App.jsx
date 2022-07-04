import React, { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyles from "./components/styles/GlobalStyles";
import { Routes, Route, Navigate } from "react-router-dom";
import router from "./router";
import LoadingPage from "./pages/LoadingPage";
import Homepage from "./pages/HomePage";
import ProtectedRoutes from "./ProtectedRoutes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Homepage />} />
          </Route>
          {router.map((routeConfig) => {
            const { path } = routeConfig.path;
            return <Route {...routeConfig} key={path} />;
          })}
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="*" element={<Navigate to="/error" replace />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
