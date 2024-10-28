import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getToken, isTokenValid } from "../utils/auth.ts";

const ProtectedComponent = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const publicPaths = ["/register"];
    const token = getToken();

    if (!isTokenValid(token) && !publicPaths.includes(location.pathname)) {
      navigate("/login");
    }
  }, [navigate, location.pathname]);

  return <>{children}</>;
};

export default ProtectedComponent;
