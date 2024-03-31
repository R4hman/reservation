import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IoEyeSharp } from "react-icons/io5";
import { FaArrowRight, FaEyeSlash } from "react-icons/fa";
import styles from "./Login.module.css";

import { z } from "zod";

import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
// import { login } from "@/services/auth/apiLogin";

import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import ReusableButton from "../../components/reusableButton/ReusableButton";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Parol ən az 8 rəqəmli olmalıdır"),
});

const Login = ({ type, setType }) => {
  const [passwordIsClose, setPasswordIsClose] = useState(true);
  const navigate = useNavigate();
  const { mutate, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("login data", data);
    mutate(data);

    // reset();
  };

  const handleSwitch = (str) => {
    setType(str);
    navigate("/sign-up");
  };

  return (
    <main className={styles.main}>
      <div className={styles.loginContainer}>
        <div className={styles.title}>
          <span
            onClick={() => handleSwitch("sign-in")}
            className={`${styles.titleSpan} ${
              type === "sign-in" ? styles.active : ""
            }`}
          >
            Sign in
          </span>
          <span
            onClick={() => handleSwitch("sign-up")}
            className={`${styles.titleSpan} ${
              type === "sign-in" ? styles.active : ""
            }`}
          >
            Sign up
          </span>
        </div>
        <div className={styles.mainContent}>
          <form
            className={styles.form}
            onSubmit={handleSubmit((data) => onSubmit(data))}
          >
            <div className={styles.inputContainer}>
              <label htmlFor="email">Email</label>
              <input
                className={styles.input}
                {...register("email")}
                type="text"
                id="email"
              />
            </div>
            {errors.email && (
              <p className={styles.errorMessage}>{`${errors.email.message}`}</p>
            )}
            <div className={styles.passwordInputContainer}>
              <label htmlFor="password">Parol</label>
              <input
                className={styles.input}
                {...register("password")}
                type={passwordIsClose ? "password" : "text"}
                id="password"
              />
              <span className={styles.passwordIsClose}>
                {passwordIsClose ? (
                  <FaEyeSlash onClick={() => setPasswordIsClose(false)} />
                ) : (
                  <IoEyeSharp onClick={() => setPasswordIsClose(true)} />
                )}
              </span>
            </div>
            {errors.password && (
              <p
                className={styles.errorMessage}
              >{`${errors.password.message}`}</p>
            )}

            <ReusableButton
              bgColor={isPending ? "gray" : "blue"}
              disabled={isPending}
              textColor="white"
            >
              SIGN IN
            </ReusableButton>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
