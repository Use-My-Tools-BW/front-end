import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token")

    return axios.create({
        baseURL: "", //Waiting for backend
        headers: {
            Authorization: token
        }
    })
}