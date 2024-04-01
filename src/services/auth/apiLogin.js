import { getCookie } from "../../lib/cookies";

export const login = async (data) => {
  try {
    const response = await fetch(
      `http://localhost:3000/users?mail=${data.mail}&password=${data.password}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};
