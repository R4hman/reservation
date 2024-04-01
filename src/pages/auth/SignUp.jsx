import { useState } from "react";
import useAuthHandling from "../../hooks/useAuth/useAuthHandling";
import styles from "./Auth.module.css";

import { z } from "zod";

import { FaEyeSlash } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import ReusableButton from "../../components/reusableButton/ReusableButton";
import { useRegister } from "../../hooks/useRegister";

const signUpSchema = z
  .object({
    fullName: z.string().min(5, "At least 5 long names"),
    mail: z.string().email(),
    password: z.string().min(10, "Password must be at least 10 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

const SignUp = () => {
  const [passwordIsClose, setPasswordIsClose] = useState(true);
  const [confirmPasswordIsClose, setConfirmPasswordIsClose] = useState(true);
  const { mutate, isPending } = useRegister();
  const { handleSubmit, MainComponent, register, errors, reset } =
    useAuthHandling(signUpSchema);

  const onSubmit = (data) => {
    console.log("submit data", data);
    mutate(data);

    reset();
  };

  return (
    <MainComponent>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.signUpInputs}>
          <div className={styles.inputContainer}>
            <label htmlFor="name">Full Name</label>

            <input
              {...register("fullName")}
              type="text"
              placeholder="Ad"
              className={styles.input}
            />
            {errors.fullName && (
              <p
                className={styles.errorMessage}
              >{`${errors.fullName.message}`}</p>
            )}
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="mail">mail</label>
            <input
              {...register("mail")}
              type="mail"
              placeholder="mail"
              className={styles.input}
            />
            {errors.mail && (
              <p className={styles.errorMessage}>{`${errors.mail.message}`}</p>
            )}
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="password">Parol</label>

            <input
              {...register("password")}
              type={passwordIsClose ? "password" : "text"}
              placeholder="Password"
              className={styles.input}
            />
            <span className={styles.closeEyes}>
              {passwordIsClose ? (
                <FaEyeSlash onClick={() => setPasswordIsClose(false)} />
              ) : (
                <IoEyeSharp onClick={() => setPasswordIsClose(true)} />
              )}
            </span>
            {errors.password && (
              <p
                className={styles.errorMessage}
              >{`${errors.password.message}`}</p>
            )}
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="password">Parolu təsdiq et</label>

            <input
              {...register("confirmPassword")}
              type={confirmPasswordIsClose ? "password" : "text"}
              placeholder="Confirm password"
              className={styles.input}
            />

            <span className={styles.closeEyes}>
              {confirmPasswordIsClose ? (
                <FaEyeSlash onClick={() => setConfirmPasswordIsClose(false)} />
              ) : (
                <IoEyeSharp onClick={() => setConfirmPasswordIsClose(true)} />
              )}
            </span>
            {errors.confirmPassword && (
              <p
                className={styles.errorMessage}
              >{`${errors.confirmPassword.message}`}</p>
            )}
          </div>
        </div>

        <ReusableButton
          bgColor={isPending ? "gray" : "blue"}
          disabled={isPending}
          textColor="white"
        >
          SIGN UP
        </ReusableButton>
      </form>
    </MainComponent>
  );
};

export default SignUp;
