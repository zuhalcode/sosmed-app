import axios from "axios";

const API = axios.create({
  baseURL: process.env.BASE_URL || "http://localhost:3001/api",
});

export const getUser = (userId) => API.get(`/user/${userId}`);
export const updateUser = (id, formData) => API.put(`/user/${id}`, formData);
export const getAllUser = () => API.get(`/user`);
