import axios from "axios";

const API_URL = process.env.VITE_API_COURTS_URL ?? "/https/courts";

export const getCourts = async () => {
  try {
    const response = await axios.get(`${API_URL}/`);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};
