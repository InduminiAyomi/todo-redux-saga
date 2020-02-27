import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App = () => {
  return (
    <div className='tasker'>
      <h2 className='title'>Todo List</h2>
      <TodoList />
      <AddTodo />
    </div>
  );
};

export default App;
