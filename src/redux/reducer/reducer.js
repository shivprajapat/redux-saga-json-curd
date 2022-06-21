import { actionTypes } from '../actions/actionTypes';

const initialState = {
    users: [],
    loading: false,
    error: null
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_USER_START:
        case actionTypes.CREATE_USER_START:
        case actionTypes.DELETE_USER_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.LOAD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case actionTypes.CREATE_USER_SUCCESS:
            return {
                loading: false,
            }
        case actionTypes.DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: state.users.filter((item) => item.id !== action.payload)
            }
        case actionTypes.LOAD_USER_ERROR:
        case actionTypes.CREATE_USER_ERROR:
        case actionTypes.DELETE_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}


export default usersReducer; 