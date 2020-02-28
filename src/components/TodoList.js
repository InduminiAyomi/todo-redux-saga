import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions';
import { getTodoState } from '../selectors';
import Todo from './Todo';

const TodoList = ({ allTodos }) => {
  return (
    <ul className='list-group'>
      {allTodos && allTodos.length
        ? allTodos.map((todo, index) => {
            return <Todo key={index} todo={todo} />;
          })
        : 'No Todos 😉 '}
    </ul>
  );
};

TodoList.propTypes = {
  allTodos: PropTypes.arrayOf(
    PropTypes.shape({
      completetd: PropTypes.bool,
      content: PropTypes.string,
    })
  ),
};

const mapDispatchToprops = dispatch => {
  return bindActionCreators({ fetchTodos }, dispatch);
};

const mapStateToProps = state => {
  const todoState = state.todos.toJS();

  return {
    allTodos: getTodoState(todoState),
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(TodoList);
