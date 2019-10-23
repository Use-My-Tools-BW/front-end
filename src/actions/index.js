import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

export const START_FETCHING = "START_FETCHING";

export const FETCH_TOOLLIST_SUCCESS = "FETCH_TOOLLIST_SUCCESS";
export const FETCH_LOGIN_SUCCESS = "FETCH_LOGIN_SUCCESS";
export const FETCH_EDITUSER_SUCCESS = "FETCH_EDITUSER_SUCCESS";
export const FETCH_ADDTOOL_SUCCESS = "FETCH_ADDTOOL_SUCCESS";
export const FETCH_USERSTOOLS_SUCCESS = "FETCH_USERSTOOLS_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const ADD_TOOL = "ADD_TOOL"
export const ADD_TOOL_SUCCESS = "ADD_TOOL_SUCCESS"
export const ADD_TOOL_FAILED = "ADD_TOOL_FAILED"

export const fetchToolListings = () => dispatch => {
    dispatch({ type: START_FETCHING });
    axios
    .get("https://usemytoolsbw.herokuapp.com/api/tools")
    .then(res => dispatch({ type: FETCH_TOOLLIST_SUCCESS, payload: res.data }) & console.log(res.data, "Data returned from fetchToolListings action and set to state."))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
}
export const fetchLoginUser = (login) => dispatch => {
    dispatch({ type: START_FETCHING });
    axiosWithAuth()
    .post("https://usemytoolsbw.herokuapp.com/api/auth/login", login)
    .then(res => dispatch({ type: FETCH_LOGIN_SUCCESS, payload: res.data.userId }) & localStorage.setItem("token", res.data.token) & console.log(res.data.userId, "Data returned from fetchLoginSuccess action and set to state."))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
}

export const fetchEditUser = (obj) => dispatch => {
    // fetchEditUser is invokes with new user's object parameters
    dispatch({ type: START_FETCHING });
    axiosWithAuth()
    .put(`http://url:port/api/register/${obj.id}`)
    // obj callback will be sent into the action.payload instead of the endpoint's response data
    .then(res => dispatch({ type: FETCH_EDITUSER_SUCCESS, payload: obj }) & console.log(res, "Data returned from fetchEditUser action and set to state. No data in response required. You should change loggedUser in redux store to reflect the object sent."))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
}

/////Need to come back and get this to work with PostListingForm .... although it's not needed.
export const addTool = (tool) => dispatch => {
    // Tried adding the header through here instead... no luck
    // const token = localStorage.getItem("token")
    // const headers = {Authorization: token}
    dispatch({ type: START_FETCHING });
    axios
    .post(`https://usemytoolsbw.herokuapp.com/api/tools`, tool)
    .then(res => dispatch({ type: FETCH_ADDTOOL_SUCCESS, payload: res.data }) & console.log(res, "Data returned from fetchAddTool action and set to state. No data in response required. You should change loggedUser in redux store to reflect the object sent."))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }) & console.log(tool))
}

export const fetchUsersTools = (id) => dispatch => {
    dispatch({ type: START_FETCHING });
    axios
    .get(`https://usemytoolsbw.herokuapp.com/api/tools/user/${id}`)
    .then(res => dispatch({ type: FETCH_USERSTOOLS_SUCCESS, payload: res.data }) & console.log(res, "Data returned from fetchUsersTools action and set to state."))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
}