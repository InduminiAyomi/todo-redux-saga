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
      id: PropTypes.number,
      content: PropTypes.string,
    })
  ),
};

const mapDispatchToprops = dispatch => {
  return bindActionCreators({ fetchTodos }, dispatch);
};

const mapStateToProps = state => {
  const { allTodos } = state.todos || {};
  return { allTodos };
};

export default connect(mapStateToProps, mapDispatchToprops)(TodoList);
