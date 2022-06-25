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
export const createUserStart = (user) => ({
    type: actionTypes.CREATE_USER_START,
    payload: user
})
export const createUsersSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS,
})
export const createUsersError = (error) => ({
    type: actionTypes.CREATE_USER_ERROR,
    payload: error
})

export const deleteUserStart = (userId) => ({
    type: actionTypes.DELETE_USER_START,
    payload: userId
})
export const deleteUsersSuccess = (userId) => ({
    type: actionTypes.DELETE_USER_SUCCESS,
    payload: userId
})
export const deleteUsersError = (error) => ({
    type: actionTypes.DELETE_USER_ERROR,
    payload: error
})

export const updateUserStart = (userInfo) => ({
    type: actionTypes.UPDATE_USER_START,
    payload: userInfo
})
export const updateUsersSuccess = () => ({
    type: actionTypes.UPDATE_USER_SUCCESS
})
export const updateUsersError = (error) => ({
    type: actionTypes.UPDATE_USER_ERROR,
    payload: error
})