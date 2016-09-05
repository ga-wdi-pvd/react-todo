import React, {Component} from 'react'
import TodoForm from './TodoForm'

class Todo extends Component {
  render(){
    if (this.props.editedTodoId === this.props.todo.id){
      return (
        <TodoForm
          autoFocus={true}
          buttonName="Update Todo!"
          onTodoAction={this.props.onUpdateTodo}/>
      )
    }
    return(
      <p data-todos-index={this.props.todo.id}>
        <span onClick={() => this.props.receiveState(this.props.todo)}>{this.props.todo.body}</span>
        <span className='toggleButton' onClick={() => this.props.onUpdateStatus(this.props.todo)}>&#10004;</span>
        <span className='deleteButton' onClick={() => this.props.onDeleteTodo(this.props.todo)}>X</span>
      </p>
    )
  }
}

export default Todo
