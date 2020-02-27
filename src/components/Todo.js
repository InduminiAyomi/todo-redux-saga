import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ todo }) => (
  <li>
    <span>{todo.content}</span>
  </li>
);

Todo.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
};

export default Todo;
