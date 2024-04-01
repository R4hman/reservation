import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth/apiLogin";
import { setCookie } from "../lib/cookies";
import toast from "react-hot-toast";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      if (data.length) {
        queryClient.invalidateQueries({ queryKey: ["user"] });

        setCookie("mail", data[0].mail, 30);
        setCookie("fullName", data[0].fullName, 30);
        setCookie("id", data[0].id, 30);

        navigate("/");
      } else {
        toast.error("mail or password is not correct");
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return {
    mutate,
    isPending,
  };
};
