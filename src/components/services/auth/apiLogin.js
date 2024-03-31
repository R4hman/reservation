import toast from "react-hot-toast";
import { getCookie } from "../../../lib/cookies";

const apiUrl = import.meta.BASE_URL;
export const login = async (data) => {
  try {
    console.log("login data", data);

    const response = await fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log("Response", response);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();

    console.log("Response", responseData);
    return responseData;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export const logout = async function () {
  try {
    const token = getCookie("accessToken");
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/v1/auth/logout`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      }
    );
    console.log("response", response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};
