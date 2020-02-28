import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, fetchTodos } from '../actions';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleAddTodoFromService = this.handleAddTodoFromService.bind(this);
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    const text = this.state.input;
    if (text && text.trim()) {
      this.props.addTodo(text);
    }
    this.setState({ input: '' });
  };

  handleAddTodoFromService = () => {
    this.props.fetchTodos();
    this.setState({ input: '' });
  };

  render() {
    return (
      <div className='todo-header'>
        <input
          type='text'
          className='input-task'
          placeholder='Enter your todo'
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className='add-task' onClick={this.handleAddTodo}>
          Add
        </button>
        <button onClick={this.handleAddTodoFromService}>
          Add from Service
        </button>
      </div>
    );
  }
}

const mapDispatchToprops = dispatch => {
  return bindActionCreators({ addTodo, fetchTodos }, dispatch);
};

export default connect(null, mapDispatchToprops)(AddTodo);
