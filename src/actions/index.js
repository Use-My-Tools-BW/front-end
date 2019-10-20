import { axiosWithAuth } from "../utils/axiosWithAuth";

export const START_FETCHING = "START_FETCHING";

export const FETCH_TOOLLIST_SUCCESS = "FETCH_TOOLLIST_SUCCESS";
export const FETCH_LOGIN_SUCCES = "FETCH_LOGIN_SUCCES";

export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchToolListings = () => dispatch => {
    dispatch({ type: START_FETCHING });
    // Shouldnt require axiosWithAuth(), but will try to keep this for uniform code
    axiosWithAuth()
    // Change to .get parameter to endpoint that returns user's data based on token being passed in header
    .get("http://url:port/api/users")
    .then(res => dispatch({ type: FETCH_TOOLLIST_SUCCESS, payload: res }) & console.log(res, "Data returned from fetchToolListings action and set to state."))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
}