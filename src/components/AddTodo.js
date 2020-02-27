import React from 'react';
import { connect } from 'react-redux';
class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.dispatch({ type: 'ADD_TODO', payload: this.state.input });
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
          +
        </button>
      </div>
    );
  }
}

export default connect(null)(AddTodo);
