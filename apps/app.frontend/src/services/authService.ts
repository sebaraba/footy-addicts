import axios from "axios";

const API_URL = process.env.VITE_API_AUTH_URL ?? "/auth";

export const register = (userData: any) => {
	return axios.post(`${API_URL}/register`, userData);
}

export const login = (userData: any) => {
	return axios.post(`${API_URL}/login`, userData);
}

export const logout = () => {
	localStorage.removeItem("token");
};
