import { ADD_TODO, FETCH_TODOS_FROM_SERVICE, TOGGLE_TODO } from './actionTypes';

export const addTodo = content => ({
  type: ADD_TODO,
  playload: content,
});

export const fetchTodosFromService = () => ({
  type: FETCH_TODOS_FROM_SERVICE,
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  playload: id,
});
