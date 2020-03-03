import { filterTodos } from '../actions';

const filter = (state = filterTodos.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};
export default filter;
