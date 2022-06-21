import { actionTypes } from './actions/actionTypes';
import { take, takeEvery, takeLatest, put, all, delay, fork, call } from 'redux-saga/effects';
import { loadUsersSuccess, loadUsersError, createUsersSuccess, createUsersError } from './actions';
import { loadUsersApi, createUsersApi } from './api';

export function* onLoadUserStartAsync() {
    try {
        const response = yield call(loadUsersApi);
        console.log("show the redux saga =>", response.data);
        if (response.status === 200) {
            yield delay(500);
            yield put(loadUsersSuccess(response.data))
        }
    } catch (error) {
        yield put(loadUsersError(error.response.data))
    }
}

export function* onCreateUserStartAsync({ payload }) {
    try {
        const response = yield call(createUsersApi, payload);
        console.log("show the redux saga =>", response.data);
        if (response.status === 200) {
            yield delay(500);
            yield put(createUsersSuccess(response.data))
        }
    } catch (error) {
        yield put(createUsersError(error.response.data))
    }
}
export function* onLoadUsers() {
    yield takeEvery(actionTypes.LOAD_USER_START, onLoadUserStartAsync)
}
export function* onCreateUser() {
    yield takeLatest(actionTypes.CREATE_USER_START, onCreateUserStartAsync)
}

const userSagas = [fork(onLoadUsers), fork(onCreateUser)]

export default function* rootSaga() {
    yield all([...userSagas])
}