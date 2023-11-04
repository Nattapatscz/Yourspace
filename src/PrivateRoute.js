import React from "react";
import jwt_decode from "jwt-decode";

const PrivateRoute = (props, c ) => {
  const token = localStorage.getItem("token");

  if (token) {
    const decodedToken = jwt_decode(token);
    const userRole = decodedToken.roles;
    
    if (userRole === "admin" && c === 0 ) {
      return <div>{props}</div>;
    } 
    else if (userRole === "tech" && c === 1) {
      return <div><h1>{props}</h1></div>;
    }
    else if (userRole === "user") {
      return <div><h1>You are not an Admin</h1></div>;
    }
    else {
      return <div><h1>You are not an Admin</h1></div>;
    }
  } else {
    return <div><h1>Please log in</h1></div>;
  }
};

export default PrivateRoute;
