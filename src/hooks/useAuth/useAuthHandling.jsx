import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import styles from "./AuthHandling.module.css";

import { useLocation, useNavigate } from "react-router-dom";

const AuthHandling = (schema) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleSwitch = (str) => {
    navigate(`/${str}`);
  };

  const MainComponent = ({ children }) => (
    <main className={styles.main}>
      <div className={styles.loginContainer}>
        <div className={styles.title}>
          <span
            onClick={() => handleSwitch("login")}
            className={`${styles.titleSpan} ${
              pathname === "/login" ? styles.active : ""
            }`}
          >
            Login
          </span>
          <span
            onClick={() => handleSwitch("sign-up")}
            className={`${styles.titleSpan} ${
              pathname === "/sign-up" ? styles.active : ""
            }`}
          >
            Sign up
          </span>
        </div>
        <div className={styles.mainContent}>{children}</div>
      </div>
    </main>
  );

  return {
    handleSubmit,
    reset,
    MainComponent,
    register,
    errors,
  };
};

export default AuthHandling;
