import { START_FETCHING, FETCH_TOOLLIST_SUCCESS, FETCH_USERSTOOLS_SUCCESS, FETCH_ADDTOOL_SUCCESS, FETCH_LOGIN_SUCCESS, FETCH_EDITUSER_SUCCESS, FETCH_DELETETOOL_SUCCESS, FETCH_USERDETAILS_SUCCESS, FETCH_FAILURE } from "../actions"

const initialState = {
    tools: [],
    loggedUser: 0,
    loggedPostedTools:[{title: "", img_url: "", daily_cost: ""}],
    loggedRentedTools:[{title: "", img_url: "", daily_cost: ""}],
    loggedUserInfo: {},
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
        case FETCH_ADDTOOL_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: "",
                tools: [...state.tools, action.payload]
            }
        case FETCH_USERSTOOLS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: "",
                loggedPostedTools: action.payload
            }
        case FETCH_USERDETAILS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: "",
                loggedUserInfo: action.payload
            }
        case FETCH_EDITUSER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: "",
                loggedUser: action.payload
            }
        case FETCH_DELETETOOL_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: ""
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