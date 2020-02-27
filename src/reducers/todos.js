const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_TODOS':
      return { ...state };
    case 'TODOS_RECEIVED':
      return { ...state, allTodos: action.todos };
    default:
      return state;
  }
}
