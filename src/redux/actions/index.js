import * as types from './actionTypes';

export const loadUserStart = () => ({
    type: types.LOAD_USER_START
})
export const loadUsersSuccess = (users) => ({
    type: types.LOAD_USER_SUCCESS,
    payload: users
})
export const loadUsersError = (error) => ({
    type: types.LOAD_USER_ERROR,
    payload: error
})