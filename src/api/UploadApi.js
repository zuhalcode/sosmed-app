import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3001/api" });

export const uploadImage = (data) => API.post("/upload/", data);
export const uploadPost = (data) => API.post("/post", data);
