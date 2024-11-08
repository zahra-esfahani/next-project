import axios from "axios";
import { getCookie } from "./cookie";

const api = axios.create({
  baseURL: "http://localhost:3001/",
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.request.use(
  (request) => {
    const Token = getCookie();
    console.log(Token);
    if (Token) {
      request.headers["Authorization"] = `bearer ${Token}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use((response) => {
  return response;
});



export default api;
