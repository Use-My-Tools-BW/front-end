import { START_FETCHING, FETCH_LENDPOSTS_SUCCESS, FETCH_ADDRENTALTOOLINACTIVE_SUCCESS, FETCH_ADDNEWUSER_SUCCESS, FETCH_ADDRENTTOOL_SUCCESS, FETCH_CREATELENDPOST_SUCCESS, FETCH_DELETELENDPOST_SUCCESS, FETCH_EDITUSERINFO_SUCCESS, FETCH_RENTEDTOOLS_SUCCESS, FETCH_USERINFO_SUCCESS, FETCH_TOOLLIST_SUCCESS, FETCH_LOGIN_SUCCESS, FETCH_FAILURE } from "../actions"

const initialState = {
    tools: [],
    loggedUser: 0,
    loggedPostedTools:[],
    loggedRentedTools:[],
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
        case FETCH_LENDPOSTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: "",
                loggedPostedTools: action.payload
            }
        case FETCH_RENTEDTOOLS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: "",
                loggedRentedTools: action.payload
            }
        case FETCH_USERINFO_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: "",
                loggedUserInfo: action.payload
            }
        case FETCH_ADDNEWUSER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: "",
            }
        case FETCH_EDITUSERINFO_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: "",
                loggedUserInfo: action.payload
            }
        case FETCH_CREATELENDPOST_SUCCESS:
            return{
                ...state,
                isFetching: false,
                error: "",
                loggedPostedTools: [...state.loggedPostedTools, action.payload]
            }
        case FETCH_DELETELENDPOST_SUCCESS:
            return{
                ...state,
                isFetching: false,
                error: "",
                loggedPostedTools: state.loggedPostedTools.filter(e => e !== action.payload)
            }
        case FETCH_ADDRENTTOOL_SUCCESS:
            return{
                ...state,
                isFetching: false,
                error: "",
            }
        case FETCH_ADDRENTALTOOLINACTIVE_SUCCESS:
            return{
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