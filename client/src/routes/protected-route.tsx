import React from "react";
import { Navigate } from "react-router-dom";
import checkAuthentication from "../hooks/checkAuthentication";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const isAuthenticated = checkAuthentication();
    return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;