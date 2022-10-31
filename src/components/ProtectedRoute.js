import React from "react";
import { useHistory } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
   const history = useHistory();
  console.log("Check user in Private: ", user);
  if (!user) {
    history.push("/");
  }
  return children;
};

export default ProtectedRoute;
