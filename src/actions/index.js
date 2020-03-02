import {
  ADD_TODO,
  FETCH_TODOS_FROM_SERVICE,
} from './actionTypes';

export const addTodo = content => ({
  type: ADD_TODO,
  playload: content,
});

export const fetchTodosFromService = () => ({
  type: FETCH_TODOS_FROM_SERVICE,
});
