import React, {Component} from 'react'
import TodoForm from './TodoForm'

class CreateTodoForm extends Component {
  render(){
    return (
      <div className='createForm todoForm'>
        <h2>Create Todo Here!</h2>
        <TodoForm
          autoFocus={false}
          onTodoAction={this.props.onCreateTodo}
          buttonName="Create Todo!" />
      </div>
    )
  }
}

export default CreateTodoForm
