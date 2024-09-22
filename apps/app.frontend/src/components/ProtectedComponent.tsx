import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "../services/authService";

const ProtectedComponent = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const publicPaths = ["/register"];
    if (!isAuthenticated() && !publicPaths.includes(location.pathname)) {
      navigate("/login");
    }
  }, [navigate, location.pathname]);

  return <>{children}</>;
};

export default ProtectedComponent;
