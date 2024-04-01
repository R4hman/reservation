import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { changeUserInfo } from "../../services/changeUserInfo";
import ReusableButton from "../../components/reusableButton/ReusableButton";
import styles from "./Profile.module.css";
import { getCookie } from "../../lib/cookies";
import defaultAvatar from "../../../public/assets/userAvatar.jpg";

const userNewPasswordSchema = z
  .object({
    mail: z.string().email(),
    password: z.string().min(10, "Password must be at least 10 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

const Profile = () => {
  const [password, setPassword] = useState({
    newPasswordIsClose: true,
    confirmPasswordIsClose: true,
  });
  const id = getCookie("id");
  const fullName = getCookie("fullName");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(userNewPasswordSchema),
  });

  const onSubmit = (data) => {
    const newObj = { ...data, id };
    delete newObj.confirmPassword;
    changeUserInfo(newObj);
    reset();
  };
  return (
    <section className="container">
      <main className={styles.profileContainer}>
        <div className={styles.userInfo}>
          <img src={defaultAvatar} alt="user img" />
          <h4>{fullName}</h4>
        </div>
        <div className={styles.profile}>
          <div className={styles.title}>Change Password</div>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.inputContainer}>
              <label htmlFor="mail">mail</label>
              <input
                {...register("mail")}
                type="mail"
                id="mail"
                className={styles.input}
                placeholder=""
              />
              {errors.mail && (
                <p className={styles.errorMessage}>{errors?.mail?.message}</p>
              )}
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="password">New Password</label>
              <input
                {...register("password")}
                id="password"
                type={`${password.newPasswordIsClose ? "password" : "text"}`}
                className={styles.input}
                placeholder=""
              />
              {errors.password && (
                <p className={styles.errorMessage}>
                  {errors?.password?.message}
                </p>
              )}
              <span className={styles.span}>
                {password.newPasswordIsClose ? (
                  <FaEyeSlash
                    onClick={() =>
                      setPassword((prev) => ({
                        ...prev,
                        newPasswordIsClose: false,
                      }))
                    }
                  />
                ) : (
                  <IoEyeSharp
                    onClick={() =>
                      setPassword((prev) => ({
                        ...prev,
                        newPasswordIsClose: true,
                      }))
                    }
                  />
                )}
              </span>
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                {...register("confirmPassword")}
                id="confirmPassword"
                type={`${
                  password.confirmPasswordIsClose ? "password" : "text"
                }`}
                className={styles.input}
                placeholder=""
              />
              {errors.confirmPassword && (
                <p className={styles.errorMessage}>{errors.confirm?.message}</p>
              )}
              <span className={styles.span}>
                {password.confirmPasswordIsClose ? (
                  <FaEyeSlash
                    onClick={() =>
                      setPassword((prev) => ({
                        ...prev,
                        confirmPasswordIsClose: false,
                      }))
                    }
                  />
                ) : (
                  <IoEyeSharp
                    onClick={() =>
                      setPassword((prev) => ({
                        ...prev,
                        confirmPasswordIsClose: true,
                      }))
                    }
                  />
                )}
              </span>
            </div>

            <ReusableButton
              bgColor={"blue"}
              // disabled={isPending}
              textColor="white"
            >
              Change password
            </ReusableButton>
          </form>
        </div>
      </main>
    </section>
  );
};

export default Profile;
