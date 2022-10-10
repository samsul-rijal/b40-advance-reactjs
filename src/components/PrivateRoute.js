import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const isSignin = true;

  return isSignin ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;