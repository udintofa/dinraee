import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import ErrorPage from "../pages/ErrorPage";

import Homepage from "../pages/Home";
import Katalog from "../pages/Katalog";
import Order from "../pages/Order";
import About from "../pages/About";

export const router = createBrowserRouter([
  // ROOT
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/katalog",
        element: <Katalog />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
