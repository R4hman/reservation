import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import styles from "./Auth.module.css";

import useAuthHandling from "../../hooks/useAuth/useAuthHandling";
import { z } from "zod";
import { useState } from "react";
import ReusableButton from "../../components/reusableButton/ReusableButton";
import { useLogin } from "../../hooks/useLogin";

const loginSchema = z.object({
  mail: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

const Login = () => {
  const [passwordIsClose, setPasswordIsClose] = useState(true);
  const { mutate, isPending } = useLogin();

  const { handleSubmit, MainComponent, register, errors, reset } =
    useAuthHandling(loginSchema);

  const onSubmit = (data) => {
    mutate(data);
    reset();
  };

  return (
    <MainComponent>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className={styles.inputContainer}>
            <label htmlFor="mail">mail</label>
            <input
              className={styles.input}
              {...register("mail")}
              type="text"
              id="mail"
            />
          </div>
          {errors.mail && (
            <p className={styles.errorMessage}>{errors.mail.message}</p>
          )}
          <div className={styles.passwordInputContainer}>
            <label htmlFor="password">Password</label>
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
            <p className={styles.errorMessage}>{errors.password.message}</p>
          )}
        </div>
        <ReusableButton
          bgColor={isPending ? "gray" : "blue"}
          disabled={isPending}
          textColor="white"
        >
          Login
        </ReusableButton>
      </form>
    </MainComponent>
  );
};

export default Login;
