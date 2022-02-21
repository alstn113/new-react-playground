import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../store/auth";

const RequireAuth = () => {
  const auth = useRecoilValue(authState);
  const location = useLocation();

  return auth?.isLoggedIn ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
};

export default RequireAuth;
