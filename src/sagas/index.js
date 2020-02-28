import { put, takeLatest, all, call } from 'redux-saga/effects';
import axios from 'axios';

function* fetchTodos() {
  const json = yield call(
    axios.get,
    'http://reduxblog.herokuapp.com/api/posts?key=edgar1234'
  );
  yield put({ type: 'TODOS_RECEIVED', payload: json.data });
}

function* actionWatcher() {
  yield takeLatest('FETCH_TODOS', fetchTodos);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
