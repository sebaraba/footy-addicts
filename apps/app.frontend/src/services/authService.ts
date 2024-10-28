import axios from "axios";

const API_URL = process.env.VITE_API_AUTH_URL ?? "/https/auth";

export const register = async (userData: any) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const login = async (userData: any) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    const { token } = response.data;
    localStorage.setItem("token", token);
    return response.data;
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};
