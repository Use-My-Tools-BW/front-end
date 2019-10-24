import { axiosWithAuth } from "../components/utils/axiosWithAuth";
import axios from "axios";

export const START_FETCHING = "START_FETCHING";

export const FETCH_TOOLLIST_SUCCESS = "FETCH_TOOLLIST_SUCCESS";
export const FETCH_LOGIN_SUCCESS = "FETCH_LOGIN_SUCCESS";
export const FETCH_LENDPOSTS_SUCCESS = "FETCH_LENDPOSTS_SUCCESS";
export const FETCH_RENTEDTOOLS_SUCCESS = "FETCH_RENTEDTOOLS_SUCCESS";
export const FETCH_USERINFO_SUCCESS = "FETCH_USERINFO_SUCCESS";
export const FETCH_EDITUSERINFO_SUCCESS = "FETCH_EDITUSERINFO_SUCCESS";
export const FETCH_CREATELENDPOST_SUCCESS = "FETCH_CREATELENDPOST_SUCCESS";
export const FETCH_DELETELENDPOST_SUCCESS = "FETCH_DELETELENDPOST_SUCCESS";
export const FETCH_ADDRENTTOOL_SUCCESS = "FETCH_ADDRENTTOOL_SUCCESS";
export const FETCH_ADDNEWUSER_SUCCESS = "FETCH_ADDNEWUSER_SUCCESS"
export const FETCH_FAILURE = "FETCH_FAILURE";

export const ADD_TOOL = "ADD_TOOL"
export const ADD_TOOL_SUCCESS = "ADD_TOOL_SUCCESS"
export const ADD_TOOL_FAILED = "ADD_TOOL_FAILED"

// Used at HOME and TOOLLIST
export const fetchToolListings = () => dispatch => {
    dispatch({ type: START_FETCHING });
    axios
    .get("https://usemytoolsbw.herokuapp.com/api/tools")
    .then(res => dispatch({ type: FETCH_TOOLLIST_SUCCESS, payload: res.data }) & console.log(res.data, "Data returned from fetchToolListings action and set to state."))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
}

// Used at LOGIN
export const fetchLoginUser = (login) => dispatch => {
    dispatch({ type: START_FETCHING });
    axiosWithAuth()
    .post("https://usemytoolsbw.herokuapp.com/api/auth/login", login)
    .then(res => dispatch({ type: FETCH_LOGIN_SUCCESS, payload: res.data.userId }) & localStorage.setItem("token", res.data.token) & console.log(res.data.userId, "Data returned from fetchLoginSuccess action and set to state."))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
}
// Used at ACCOUNT
export const fetchLendPosts = (id) => dispatch => {
    dispatch({ type: START_FETCHING });
    axiosWithAuth()
    .get(`https://usemytoolsbw.herokuapp.com/api/tools/user/${id}`)
    .then(res => dispatch({ type: FETCH_LENDPOSTS_SUCCESS, payload: res.data }) & console.log(res, "fetchLendPosts"))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
}
// Used at ACCOUNT
export const fetchRentedTools = (id) => dispatch => {
    dispatch({ type: START_FETCHING });
    axiosWithAuth()
    .get(`https://usemytoolsbw.herokuapp.com/api/rentals/renter/${id}`)
    .then(res => dispatch({ type: FETCH_RENTEDTOOLS_SUCCESS, payload: res.data }) & console.log(res, "fetchRentedTools"))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
}
// Used at Account
export const fetchUserInformation = (id) => dispatch => {
    dispatch({ type: START_FETCHING });
    axiosWithAuth()
    .get(`https://usemytoolsbw.herokuapp.com/api/auth/user/${id}`)
    .then(res => dispatch({ type: FETCH_USERINFO_SUCCESS, payload: res.data })& console.log(res.data, "fetchUserInformation"))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
}
// Used at EditAccountForm
export const fetchEditUserInformation = (id, newInfo) => dispatch => {
    dispatch({ type: START_FETCHING });
    axiosWithAuth()
    .put(`https://usemytoolsbw.herokuapp.com/api/auth/user/${id}`, newInfo)
    .then(res => dispatch({ type: FETCH_EDITUSERINFO_SUCCESS, payload: newInfo }) & console.log(res.data, "fetchEditUserInformation"))  
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
}
// Used at Account
export const fetchCreateLendPost = (newPost) => dispatch => { 
    axiosWithAuth()
    .post("https://usemytoolsbw.herokuapp.com/api/tools", newPost)
    .then(res => dispatch({ type: FETCH_CREATELENDPOST_SUCCESS, payload: newPost }) & console.log(res.data, "fetchCreateLendPost"))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
}
// Used at Account
export const fetchDeleteLendPost = (id) => dispatch => {
    axiosWithAuth()
    .delete(`https://usemytoolsbw.herokuapp.com/api/tools/${id}`)
    .then(res => dispatch({ type: FETCH_DELETELENDPOST_SUCCESS, payload: id }) & console.log(res.data, "fetchDeleteLendPost"))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
}
// Used at HOME and TOOLLIST
export const fetchAddRentalTool = (cost, toolId, renterId, start, end) => dispatch => {
    axiosWithAuth()
    .post(`https://usemytoolsbw.herokuapp.com/api/rentals`, {start_date: start, end_date: end, total_cost: cost, tool_id: toolId, renter_id: renterId})
    .then(res => dispatch({ type: FETCH_ADDRENTTOOL_SUCCESS, payload: res.data })& console.log(res.data, "fetchAddRentalTool"))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
}
// Used at REGISTERFORM
export const fetchAddNewUser = (newUser) => dispatch => {
    axiosWithAuth()
    .post(`https://usemytoolsbw.herokuapp.com/api/auth/register`, newUser)
    .then(res => dispatch({ type: FETCH_ADDNEWUSER_SUCCESS }) & console.log(res.data, "fetchAddNewUser"))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
}