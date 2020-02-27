import { put, takeLatest, takeEvery, all, call } from 'redux-saga/effects';
import axios from 'axios';

function* fetchTodos() {
  const json = yield call(
    axios.get,
    'http://reduxblog.herokuapp.com/api/posts?key=edgar1234'
  );

  yield put({ type: 'TODOS_RECEIVED', todos: json.data });
}

function* actionWatcher() {
  yield takeLatest('GET_TODOS', fetchTodos);
}

export function* formatTodo(action) {
  const newTodo = { title: '', categories: '', content: action.payload };
  yield call(
    axios.post,
    'http://reduxblog.herokuapp.com/api/posts?key=edgar1234',
    newTodo
  );

  yield put({ type: 'GET_TODOS' });
}

function* watchAddToDo() {
  yield takeEvery('ADD_TODO', formatTodo);
}

export default function* rootSaga() {
  yield all([actionWatcher(), watchAddToDo()]);
}
