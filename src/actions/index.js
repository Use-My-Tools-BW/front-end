import { axiosWithAuth } from "../utils/axiosWithAuth";

export const START_FETCHING = "START_FETCHING";

export const FETCH_TOOLLIST_SUCCESS = "FETCH_TOOLLIST_SUCCESS";
export const FETCH_LOGIN_SUCCESS = "FETCH_LOGIN_SUCCESS";

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
export const fetchLoggedUser = (id) => dispatch => {
    // fetchLoggedUser is invoked with id
    dispatch({ type: START_FETCHING });
    axiosWithAuth()
    .get(`http://url:port/api/user${id}`)
    .then(res => dispatch({ type: FETCH_LOGIN_SUCCESS, payload: res }) & console.log(res, "Data returned from fetchLoggedUser action and set to state."))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
}