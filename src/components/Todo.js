import React from 'react'
import TodoForm from './TodoForm'

export default class Todo extends React.Component {
  sendEditState(event){
    var todoIndex = parseInt(event.target.parentElement.dataset.todosIndex, 10)
    this.props.receiveState(todoIndex)
  }
  render(){
    if (this.props.editedTodoId === this.props.index){
      return (
        <TodoForm
          autoFocus={true}
          buttonName="Update Todo!"
          onTodoAction={this.props.onUpdateTodo}/>
      )
    }
    return(
      <p data-todos-index={this.props.index}>
        <span onClick={this.sendEditState.bind(this)}>{this.props.todo.body}</span>
        <span className='toggleButton' onClick={this.props.onUpdateStatus}>&#10004;</span>
        <span className='deleteButton' onClick={this.props.onDeleteTodo}>X</span>
      </p>
    )
  }
}
