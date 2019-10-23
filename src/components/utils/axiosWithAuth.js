import axios from "axios";

export const axiosWithAuth = () => {
  console.log(localStorage.getItem("token"))
  const token = localStorage.getItem("token");
  console.log(token)
  return axios.create({
    baseURL: "https://usemytoolsbw.herokuapp.com/",
    headers: {
      token: token
    }
  });
};
