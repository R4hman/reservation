import toast from "react-hot-toast";
import { getCookie } from "../lib/cookies";

export const changeUserInfo = async (data) => {
  try {
    const mail = getCookie("mail");
    if (!mail || mail !== data.mail) {
      toast.error("mail is not valid or does not match the current user");
      return;
    }

    const response = await fetch(`http://localhost:3000/users/${data.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const responseData = await response.json();
      throw new Error(
        `HTTP error! Status: ${response.status}, Message: ${responseData.msg}`
      );
    }

    const responseData = await response.json();
    toast.success("User information updated successfully");
    return responseData;
  } catch (error) {
    console.error("Error during user information update:", error);
    toast.error("Failed to update user information. Please try again later.");
    throw error;
  }
};
