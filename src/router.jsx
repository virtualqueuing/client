import React from "react";

const HomePage = React.lazy(() => import("./pages/Homepage"));
const ErrorPage = React.lazy(() => import("./pages/Errorpage"));
const AddNewPage = React.lazy(() => import("./pages/AddNewPage"));

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
    path: "/Addnew",
    element: <AddNewPage />,
  },
];

export default routes;
