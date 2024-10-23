import "../src/cssStyles/homePage.css";
import "../app/globals.css";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Layout from "./Layout.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  // Check if the current location is either /login or /register
  const isLoginOrRegister = window.location.pathname === '/login' || window.location.pathname === '/register';

  // If not, redirect to /login
  if (!isLoginOrRegister) {
    return <Navigate to="/login" />;
  }

  // If it is /login or /register, render the children
  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProtectedRoute><Home /></ProtectedRoute>,
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        // Catch-all route for any other paths
        path: "*",
        element: <ProtectedRoute><Navigate to="/login" /></ProtectedRoute>,
      }
    ],
  },
]);

export const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
