import axios from "axios";

const API = axios.create({
  baseURL: process.env.BASE_URL || "http://localhost:3001/api",
});

export const getTimelinePosts = (id) => API.get(`/post/${id}/timeline`);
export const likePost = (id, userId) => API.put(`/post/${id}/like`, { userId });
