import { START_FETCHING, FETCH_TOOLLIST_SUCCESS, FETCH_FAILURE } from "../actions"

const initialState = {
    tools: [],
    isFetching: false,
    error: ""
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