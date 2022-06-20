import * as types from './actions/actionTypes';
import { take, takeEvery, takeLatest, put, all, delay, fork, call } from 'redux-saga/effects';
import { loadUsersSuccess, loadUsersError } from './actions';
import { loadUsersApi } from './api';

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
export function* onLoadUsers() {
    yield takeEvery(types.LOAD_USER_START, onLoadUserStartAsync)
}

const userSagas = [fork(onLoadUsers)]

export default function* rootSaga() {
    yield all([...userSagas])
}