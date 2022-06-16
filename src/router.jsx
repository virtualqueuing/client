import React from "react";

const HomePage = React.lazy(() => import("./pages/Homepage"));
const ErrorPage = React.lazy(() => import("./pages/Errorpage"));
const AddNewPage = React.lazy(() => import("./pages/AddNewPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));

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
  {
    path: "/addnew",
    element: <AddNewPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
];

export default routes;
