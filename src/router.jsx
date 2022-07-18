import React from "react";

const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const SignupPage = React.lazy(() => import("./pages/SignupPage"));
const MainHomepage = React.lazy(() => import("./pages/MainHomePage"));
const ProfilePage = React.lazy(() => import("./pages/ProfilePage"));

const routes = [
  {
    path: "/404",
    element: <ErrorPage />,
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
  {
    path: "/profile",
    element: <ProfilePage />,
  },
];

export default routes;
