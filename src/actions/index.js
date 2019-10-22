import { axiosWithAuth } from "../utils/axiosWithAuth";

export const START_FETCHING = "START_FETCHING";

export const FETCH_TOOLLIST_SUCCESS = "FETCH_TOOLLIST_SUCCESS";
export const FETCH_LOGIN_SUCCESS = "FETCH_LOGIN_SUCCESS";
export const FETCH_EDITUSER_SUCCESS = "FETCH_EDITUSER_SUCCESS";

export const FETCH_FAILURE = "FETCH_FAILURE";

export const ADD_TOOL = "ADD_TOOL"
export const ADD_TOOL_SUCCESS = "ADD_TOOL_SUCCESS"
export const ADD_TOOL_FAILED = "ADD_TOOL_FAILED"

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
export const fetchEditUser = (obj) => dispatch => {
    // fetchEditUser is invokes with new user's object parameters
    dispatch({ type: START_FETCHING });
    axiosWithAuth()
    .put(`http://url:port/api/register/${obj.id}`)
    // obj callback will be sent into the action.payload instead of the endpoint's response data
    .then(res => dispatch({ type: FETCH_EDITUSER_SUCCESS, payload: obj }) & console.log(res, "Data returned from fetchEditUser action and set to state. No data in response required. You should change loggedUser in redux store to reflect the object sent."))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
}

export const addTool = newTool => dispatch => {
    dispatch({ type: ADD_TOOL })
    axiosWithAuth()
    .post('', newTool)
    .then(res => {
        dispatch({ type: ADD_TOOL_SUCCESS, payload: res.data })
        console.log(res)
    })
    .catch(err => {
        dispatch({ type: ADD_TOOL_FAILED, payload: err })
    })
}