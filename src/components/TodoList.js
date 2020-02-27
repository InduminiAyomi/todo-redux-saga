import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions';
import Todo from './Todo';

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { allTodos } = this.props;
    return (
      <ul>
        {allTodos && allTodos.length
          ? allTodos.map((todo, index) => {
              return <Todo key={index} todo={todo} />;
            })
          : 'No Todos 😉 '}
      </ul>
    );
  }
}

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
  const { allTodos } = todoState;
  return { allTodos };
};

export default connect(mapStateToProps, mapDispatchToprops)(TodoList);
