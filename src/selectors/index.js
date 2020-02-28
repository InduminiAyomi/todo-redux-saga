import { createSelector } from 'reselect';

export const getTodoState = createSelector(
  state => state.allTodos,
  allTodos => allTodos
);
