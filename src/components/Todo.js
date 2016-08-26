import React from 'react'

export default class Todo extends React.Component {
  render(){
    return(
      <p data-todos-index={this.props.index}>
        <span onClick={this.props.onRenderEditForm}>{this.props.todo.body}</span>
        <span className='toggleButton' onClick={this.props.onUpdateStatus}>&#10004;</span>
        <span className='deleteButton' onClick={this.props.onDeleteTodo}>X</span>
      </p>
    )
  }

}
// <p data-todos-index={index} data-completed={todo.completed} key={index}>
//   <span onClick={this.props.onRenderEditForm}>{todo.body}</span>
// </p>
