import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ todo }) => {
  const { content } = todo || {};
  if (content.trim()) {
    return <li className='list-group-item'>{content}</li>;
  }
  return null;
};

Todo.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
};

export default Todo;
