import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTodoState } from '../selectors';
import Todo from './Todo';
import Loader from './Loader';

const TodoList = ({ allTodos, isLoading }) => {
  return (
    <>
      <ul className='list-group'>
        {allTodos && allTodos.length
          ? allTodos.map((todo, index) => {
              return <Todo key={index} id={index} todo={todo} />;
            })
          : 'No Todos 😉 '}
      </ul>
      {isLoading && <Loader />}
    </>
  );
};

TodoList.propTypes = {
  allTodos: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string,
      isLoading: PropTypes.bool,
    })
  ),
};

const mapStateToProps = state => {
  const todoState = state.todos.toJS();

  return {
    allTodos: getTodoState(todoState),
    isLoading: todoState.isLoading,
  };
};

export default connect(mapStateToProps)(TodoList);
