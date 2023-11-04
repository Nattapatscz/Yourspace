import React from "react";
import { Route, Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const PrivateRoute = ({ component: Component, requiredRoles, ...rest }) => {
  const token = localStorage.getItem("token");

  if (token) {
    const decodedToken = jwt_decode(token);
    const userRoles = decodedToken.roles;

    if (userRoles === requiredRoles) {
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
