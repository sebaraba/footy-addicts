import axios from "axios";

const API_URL = process.env.VITE_API_COURTS_URL ?? "/users";

export const getCourtsByUserId = (userId: any) => {
  return axios.get(`${API_URL}/${userId}/courts`);
}

export const createCourt = (userId: any, formData: any) => {
  return axios.post(`${API_URL}/${userId}/courts`, formData);
}