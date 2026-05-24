import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

export const loginUser = async (email, password) => {
  const res = await axios.post(`${API_BASE_URL}/auth/login`, {
    email,
    password,
  });

  return res.data;
};

export const logoutUser = async () => {
  const res = await axios.post(`${API_BASE_URL}/auth/logout`);
  return res.data;
};

export const getCurrentUser = async () => {
  const res = await axios.get(`${API_BASE_URL}/auth/me`);
  return res.data;
};