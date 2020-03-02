import { List, Map } from 'immutable';
import {
  ADD_TODO,
  FETCH_TODOS_FROM_SERVICE,
  TODOS_RECEIVED,
} from '../../src/actions/actionTypes';
import reducer from '../../src/reducers/todos';

const initialState = Map({
  allTodos: List([
    { content: 'task 1' },
    { content: 'task 2' },
    { content: 'task 3' },
  ]),
  isLoading: false,
});

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD TODO', () => {
    const currentState = Map({
      allTodos: List([
        { content: 'task 1' },
        { content: 'task 2' },
        { content: 'task 3' },
        { content: 'Do this' },
      ]),
      isLoading: false,
    });

    expect(
      reducer(initialState, {
        type: ADD_TODO,
        playload: 'Do this',
      })
    ).toEqual(currentState);
  });

  it('should handle FETCH TODOS FROM SERVICE', () => {
    const currentState = Map({
      allTodos: List([
        { content: 'task 1' },
        { content: 'task 2' },
        { content: 'task 3' },
      ]),
      isLoading: true,
    });

    expect(
      reducer(initialState, {
        type: FETCH_TODOS_FROM_SERVICE,
      })
    ).toEqual(currentState);
  });

  it('should handle TODOS RECEIVED', () => {
    const currentState = Map({
      allTodos: List([
        { content: 'task 1' },
        { content: 'task 2' },
        { content: 'task 3' },
        { content: '2' },
        { content: '****' },
        { content: 'segdrf' },
        { content: '123' },
        { content: 'do this' },
      ]),
      isLoading: false,
    });

    const playload = [
      { content: '2' },
      { content: '****' },
      { content: 'segdrf' },
      { content: '123' },
      { content: 'do this' },
    ];

    expect(
      reducer(initialState, {
        type: TODOS_RECEIVED,
        playload,
      })
    ).toEqual(currentState);
  });
});
