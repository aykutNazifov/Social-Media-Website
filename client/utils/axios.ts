import axios from "axios";

export const axiosRequest = axios.create({
  baseURL: "http://localhost:8800/api/",
  withCredentials: true,
});
