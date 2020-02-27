import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ todo }) => {
  const { content } = todo || {};
  return (
    <li>
      <input type='checkbox' />
      <span> {content} </span>
    </li>
  );
};

Todo.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
};

export default Todo;
