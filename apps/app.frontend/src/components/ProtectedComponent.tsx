import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getToken, isTokenValid } from "../utils/auth.ts";

const ProtectedComponent = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = getToken();
    const loginPaths = ["/login", "/signup-admin", "/signup-user", "/choose-signup"];
    const currentPath = location.pathname;

    if(!isTokenValid(token) && !loginPaths.includes(currentPath)){
      navigate("/login");
    }

  }, [navigate, location.pathname, isTokenValid]);

  return <>{children}</>;
};

export default ProtectedComponent;
