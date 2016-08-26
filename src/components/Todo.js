import React from 'react'
import TodoForm from './TodoForm'

export default class Todo extends React.Component {
  constructor(props){
    super(props)
  }
  sendEditState(event){
    var todoIndex = event.target.parentElement.dataset.todosIndex
    console.log(this);
    this.props.receiveState(todoIndex)
    console.log(todoIndex);
  }
  render(){
    if (this.props.editedTodoId == this.props.index){
      return (
        <TodoForm
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
// <p data-todos-index={index} data-completed={todo.completed} key={index}>
//   <span onClick={this.props.onRenderEditForm}>{todo.body}</span>
// </p>
