// import necessary object from rrd
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  // assume that user is not login yet
  const isSignin = false;

  return (
    isSignin ? <Outlet /> : <Navigate to="/signin" />
  );
};

export default PrivateRoute;
