import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import FilterTodos from './components/FilterTodos';

const App = () => {
  return (
    <div className='container todo-list'>
      <div className='col'>
        <div className='row-md-6'>
          <h2 className='title'>Todo List</h2>
          <AddTodo />
        </div>
        <div className='row-md-6'>
          <TodoList />
        </div>
        <div className='row-md-6'>
          <FilterTodos />
        </div>
      </div>
    </div>
  );
};

export default App;
