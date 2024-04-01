import { useEffect } from "react";
import { getCookie } from "../lib/cookies";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const mail = getCookie("mail");
  const navigate = useNavigate();

  useEffect(() => {
    if (!mail) {
      navigate("/");
      return;
    }
  }, [mail, navigate]);
  return <div>{children}</div>;
};

export default ProtectedRoute;
