import React from "react";
import { Navigate } from "react-router-dom";
import checkAuthentication from "../hooks/checkAuthentication";
import PageLoader from "../skeletons/loader";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = React.useState<boolean | null>(null);

    React.useEffect(() => {
        const checkAuth = async () => {
            try {
                const result = await checkAuthentication();

                // result.success is a boolean from your backend
                setIsAuthenticated(result.success === true);
            } catch (error) {
                console.error('Auth check error:', error);
                setIsAuthenticated(false);
            }
        };

        checkAuth();
    }, []);

    // Show loading while checking authentication
    if (isAuthenticated === null) {
        return <PageLoader />; // or your loading component
    }

    // Redirect to home if not authenticated
    return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;