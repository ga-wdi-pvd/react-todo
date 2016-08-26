import React from 'react'
import TodoForm from './TodoForm'

export default class CreateTodoForm extends React.Component {
  render(){
    return (
      <div className='todoForm'>
        <h2>Create Todo Here!</h2>
        <TodoForm
          autoFocus={false}
          onTodoAction={this.props.onCreateTodo}
          buttonName="Create Todo!" />
      </div>
    )
  }
}
