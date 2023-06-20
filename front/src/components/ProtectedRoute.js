import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../Redux/selector";

function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;

// si auth est false redirige vers login, sinon userPage aka children dans app.
