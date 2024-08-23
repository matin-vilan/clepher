import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import IntradayPage from "../pages/IntradayPage";

export default function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/intraday",
      element: <IntradayPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
