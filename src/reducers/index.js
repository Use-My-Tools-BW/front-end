import { START_FETCHING, FETCH_TOOLLIST_SUCCESS, FETCH_LOGIN_SUCCESS, FETCH_EDITUSER_SUCCESS, FETCH_FAILURE } from "../actions"

const initialState = {
    tools: [],
    loggedUser: {},
    isFetching: false,
    error: "",
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: ""
            }
        case FETCH_TOOLLIST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: "",
                tools: action.payload
            }
        case FETCH_LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: "",
                loggedUser: action.payload
            }
        case FETCH_EDITUSER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: "",
                loggedUser: action.payload
            }
        case FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;