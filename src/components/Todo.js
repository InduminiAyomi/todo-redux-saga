import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

const Todo = ({ todo, id, toggleTodo }) => {
  const { content, completed } = todo || {};
  const isChecked = completed ? true : false;

  if (content.trim()) {
    return (
      <>
        <li className='list-group-item'>
          <input
            type='checkbox'
            onChange={() => toggleTodo(id)}
            checked={isChecked}
            data-id={id}
          />{' '}
          {content}
        </li>
      </>
    );
  }
  return null;
};

Todo.propTypes = {
  id: PropTypes.number,
  content: PropTypes.string,
  completed: PropTypes.bool,
};

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
});

export default connect(null, mapDispatchToProps)(Todo);
