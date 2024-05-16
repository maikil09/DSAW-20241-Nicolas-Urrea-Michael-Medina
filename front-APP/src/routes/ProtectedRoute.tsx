import { Outlet,Navigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../Auth/AuthProvider";
export default function ProtectedRoute(){
    const auth = useAuth();
    return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />
}
