import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token")
    return axios.create({
        baseURL: "https://usemytoolsbw.herokuapp.com", //Waiting for backend
        headers: {
            Authorization: token
        }
    })
}