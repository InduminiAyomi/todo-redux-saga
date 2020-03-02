import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, fetchTodosFromService } from '../actions';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleAddTodoFromService = this.handleAddTodoFromService.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.fetchTodosFromService();
    this.setState({ input: '' });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <>
        <div className='row'>
          <div className='col-md-6'>
            <form onSubmit={this.handleSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='input-todo'
                  placeholder='Add your todo'
                  onChange={e => this.updateInput(e.target.value)}
                  value={this.state.input}
                />
              </div>
            </form>
          </div>
          <div className='col-md-6'>
            <button
              type='button'
              className='btn btn-outline-dark'
              onClick={this.handleAddTodo}>
              Add
            </button>{' '}
            <button
              type='button'
              className='btn btn-outline-dark'
              onClick={this.handleAddTodoFromService}>
              Add form Service
            </button>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToprops = dispatch => {
  return bindActionCreators({ addTodo, fetchTodosFromService }, dispatch);
};

export default connect(null, mapDispatchToprops)(AddTodo);
