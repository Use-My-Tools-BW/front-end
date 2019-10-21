  
import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "http://ip-or-url:port",
    headers: {
      Authorization: token
    }
  });
};