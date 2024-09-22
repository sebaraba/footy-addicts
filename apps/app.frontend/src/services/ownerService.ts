import axios from "axios";

const API_URL = process.env.VITE_API_OWNERS_URL || "/https/owners";

export const getAllOwners = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching owners:", error);
    throw error;
  }
};

export const getOwnerById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching owner:", error);
    throw error;
  }
};

export const createOwner = async (ownerData: any) => {
  try {
    const response = await axios.post(API_URL, ownerData);
    return response.data;
  } catch (error) {
    console.error("Error creating owner:", error);
    throw error;
  }
};

export const updateOwner = async (id: string, ownerData: any) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, ownerData);
    return response.data;
  } catch (error) {
    console.error("Error updating owner:", error);
    throw error;
  }
};

export const deleteOwner = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting owner:", error);
    throw error;
  }
};
