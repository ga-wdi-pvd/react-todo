import React from 'react'

export default React.createClass({
  render(){
    return (
      <div className='todoForm'>
        <h2>Create Todo Here</h2>
        <form onSubmit={this.props.onCreateTodo}>
          <input
            onChange={this.props.onUpdateTodoField}
            placeholder='Write a todo here ...'
            type='text'
            value={this.props.todo || ''} />
          <button type='submit'>Create Todo!</button>
        </form>
      </div>
    )
  }
})
