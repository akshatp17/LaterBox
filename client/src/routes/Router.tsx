import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Error from "../pages/Error";

// Lazy-loaded components for better performance

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public Routes */}
          <Route path="*" element={<Error />} />
          <Route path="/" element={<></>} />

          {/* Protected Routes */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
