export const addTodo = content => ({
  type: 'ADD_TODO',
  payload: content,
});

export const fetchTodos = () => ({
  type: 'FETCH_TODOS',
});
