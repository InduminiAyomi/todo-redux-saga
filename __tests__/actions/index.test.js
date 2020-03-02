import * as actions from '../../src/actions';

describe('action', () => {
  it('should create an action to add a todo', () => {
    const playload = 'Task 1';
    const expectedAction = {
      type: 'ADD_TODO',
      playload,
    };
    expect(actions.addTodo(playload)).toEqual(expectedAction);
  });
});
