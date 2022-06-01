import React from "react";

const HomePage = React.lazy(() => import("./pages/Homepage"));
const ErrorPage = React.lazy(() => import("./pages/Errorpage"));

const routes = [
  {
    path: "/",
    exact: true,
    element: <HomePage />,
  },
  {
    path: "/404",
    element: <ErrorPage />,
  },
];

export default routes;
