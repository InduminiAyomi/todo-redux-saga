import { List, Map } from 'immutable';

const initialState = Map({
  allTodos: List([]),
});

export default function(state = initialState, action) {
  switch (action.type) {
    case 'TODOS_RECEIVED':
      return state.updateIn(['allTodos'], todos => todos.concat(action.payload));
    default:
      return state;
  }
}
