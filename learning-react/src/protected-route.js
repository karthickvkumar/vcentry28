import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    debugger;
    const isAuthenticate = localStorage.getItem("isAuthenticate");

    if(isAuthenticate){
        return children;
    }
    else{
        return <Navigate to="/login" />
    }

}

export default ProtectedRoute;