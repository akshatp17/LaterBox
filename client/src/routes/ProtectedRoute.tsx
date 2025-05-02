import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = !!localStorage.getItem("userToken");

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
