import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout";
import { SignIn, Home, SignUp, Documents, CreateDocument } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/documents",
        element: <Documents />,
      },
      {
        path: "/create",
        element: <CreateDocument />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
