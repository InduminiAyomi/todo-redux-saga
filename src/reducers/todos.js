import { List, Map } from 'immutable';
import {
  ADD_TODO,
  FETCH_TODOS_FROM_SERVICE,
  TODOS_RECEIVED,
  TOGGLE_TODO,
} from '../actions/actionTypes';

const initialState = Map({
  allTodos: List([
    { content: 'task 1', completed: false },
    { content: 'task 2', completed: false },
    { content: 'task 3', completed: false },
  ]),
  isLoading: false,
});

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      state = state.updateIn(['allTodos'], todos =>
        todos.push({
          content: action.playload,
          completed: false,
        })
      );
      state = state.set('isLoading', false);
      return state;
    case FETCH_TODOS_FROM_SERVICE:
      return state.set('isLoading', true);
    case TODOS_RECEIVED:
      state = state.updateIn(['allTodos'], todos =>
        todos.concat(action.playload)
      );
      state = state.set('isLoading', false);
      return state;
    case TOGGLE_TODO:
      state = state.updateIn(['allTodos'], todos => {
        const toggledTodo = todos.toJS()[action.playload];
        return todos.set(action.playload, {
          content: toggledTodo.content,
          completed: !toggledTodo.completed,
        });
      });

      return state;
    default:
      return state;
  }
}
