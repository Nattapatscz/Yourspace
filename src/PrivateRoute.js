import React from "react";
import { Route, Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const PrivateRoute = ({ component: Component, requiredRole, ...rest }) => {
  const token = localStorage.getItem("token");

  if (token) {
    const decodedToken = jwt_decode(token);
    const userRole = decodedToken.role;
    console.log(userRole);

    if (userRole === requiredRole) {
      return <Route {...rest} element={<Component />} />;
    } else {
      // Redirect to an unauthorized page
      return <Navigate to="/request/mainproblemlist" />;
    }
  }

  // Navigate to the login page if there's no token
  return <Navigate to="/login" />;
};

export default PrivateRoute;
