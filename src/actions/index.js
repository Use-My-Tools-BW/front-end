import axios from "axios"
import axiosWithAuth from "../utils/axiosWithAuth";

export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchUserData = () => dispatch => {
    dispatch({ type: START_FETCHING });
    axiosWithAuth()
    // Change to .get parameter to endoing that returns user's data based on token being passed in header
    .get("http://url:port/api/users")
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res }) & console.log(res, "Data returned from fetchUserData action and set to state."))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
}