import { List, Map } from 'immutable';

const initialState = Map({
  allTodos: List([
    { content: 'task 1' },
    { content: 'task2' },
    { content: 'task 3' },
  ]),
});

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO': {
      return state.updateIn(['allTodos'], todos =>
        todos.push({ content: action.payload })
      );
    }
    case 'TODOS_RECEIVED':
      return state.updateIn(['allTodos'], todos =>
        todos.concat(action.payload)
      );
    default:
      return state;
  }
}
