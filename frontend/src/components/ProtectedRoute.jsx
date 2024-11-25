import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function ProtectedRoute() {
  const { currentUser } = useSelector((state) => state.user);

  const location = useLocation();

  console.log(location);

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ desiredLocation: location }} />
  );
}
