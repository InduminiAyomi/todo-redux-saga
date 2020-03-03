import React from 'react';

const FilterTodos = () => (
  <div className='top-buffer'>
    <button type='button' className='btn btn-outline-success'>
      Show All
    </button>{' '}
    <button type='button' className='btn btn-outline-success'>
      Completed
    </button>{' '}
    <button type='button' className='btn btn-outline-success'>
      Active
    </button>
  </div>
);
export default FilterTodos;
