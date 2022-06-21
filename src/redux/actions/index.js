import {actionTypes} from './actionTypes';

export const loadUserStart = () => ({
    type: actionTypes.LOAD_USER_START
})
export const loadUsersSuccess = (users) => ({
    type: actionTypes.LOAD_USER_SUCCESS,
    payload: users
})
export const loadUsersError = (error) => ({
    type: actionTypes.LOAD_USER_ERROR,
    payload: error
})