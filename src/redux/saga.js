import { actionTypes } from './actions/actionTypes';
import { take, takeEvery, takeLatest, put, all, delay, fork, call } from 'redux-saga/effects';
import { loadUsersSuccess, loadUsersError, createUsersSuccess, createUsersError, deleteUsersError, deleteUsersSuccess } from './actions';
import { loadUsersApi, createUsersApi, deleteUsersApi } from './api';

// show user

function* onLoadUserStartAsync() {
    try {
        const response = yield call(loadUsersApi);
        if (response.status === 200) {
            yield delay(500);
            yield put(loadUsersSuccess(response.data))
        }
    } catch (error) {
        yield put(loadUsersError(error.response.data))
    }
}
// create user

function* onCreateUserStartAsync({ payload }) {
    try {
        const response = yield call(createUsersApi, payload);
        if (response.status === 200) {
            yield delay(500);
            yield put(createUsersSuccess(response.data))
        }
    } catch (error) {
        yield put(createUsersError(error.response.data))
    }
}
// delete user
function* onDeleteStartAsync(userId) {
    try {
        const response = yield call(deleteUsersApi, userId);
        if (response.status === 200) {
            yield delay(500);
            yield put(deleteUsersSuccess(userId))
        }
    } catch (error) {
        yield put(deleteUsersError(error.response.data))
    }
}


function* onLoadUsers() {
    yield takeEvery(actionTypes.LOAD_USER_START, onLoadUserStartAsync)
}
function* onCreateUser() {
    yield takeLatest(actionTypes.CREATE_USER_START, onCreateUserStartAsync)
}
function* onDeleteUser() {
    while (true) {
        const { payload: userId } = yield take(actionTypes.DELETE_USER_START)
        yield call(onDeleteStartAsync, userId)
    }
}
const userSagas = [fork(onLoadUsers), fork(onCreateUser), fork(onDeleteUser)]

export default function* rootSaga() {
    yield all([...userSagas])
}