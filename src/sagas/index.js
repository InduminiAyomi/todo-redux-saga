import { put, takeLatest, all, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_TODOS_FROM_SERVICE,
  TODOS_RECEIVED,
} from '../actions/actionTypes';

function* fetchTodosFromService() {
  const json = yield call(
    axios.get,
    'http://reduxblog.herokuapp.com/api/posts?key=edgar1234'
  );
  yield put({ type: TODOS_RECEIVED, playload: json.data });
}

function* actionWatcher() {
  yield takeLatest(FETCH_TODOS_FROM_SERVICE, fetchTodosFromService);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
