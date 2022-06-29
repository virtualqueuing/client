import React from "react";

const HomePage = React.lazy(() => import("./pages/Homepage"));
const ErrorPage = React.lazy(() => import("./pages/Errorpage"));
const ArrivalModal = React.lazy(() => import("./components/RightMenu/components/ArrivalModal"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const SignupPage = React.lazy(() => import("./pages/SignupPage"));
const MainHomepage = React.lazy(() => import("./pages/MainHomePage"));

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
    path: "/arrival",
    element: <ArrivalModal />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/home",
    element: <MainHomepage />,
  },
];

export default routes;
