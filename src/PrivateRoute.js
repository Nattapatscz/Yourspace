import React from "react";
import jwt_decode from "jwt-decode";

const PrivateRoute = (props) => {
  const token = localStorage.getItem("token");

  if (token) {
    const decodedToken = jwt_decode(token);
    const userRole = decodedToken.roles;
    
    if (userRole === "admin" || userRole === "tech") {
      return <div>{props}</div>;
    } 
    else if (userRole === "user") {
      return <div><h1>You are not an Admin</h1></div>;
    }
    else {
      return <div><h1>Unknown user role</h1></div>;
    }
  } else {
    return <div><h1>Please log in</h1></div>;
  }
};

export default PrivateRoute;
