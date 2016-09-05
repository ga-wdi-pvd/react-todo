import React, {Component} from 'react'
import Todo from './Todo'

class Todos extends Component {
  render(){
    var todos = this.props.todos.map(function(todo, index){
      return(
        <Todo
          key={todo.id}
          todo={todo}
          onUpdateStatus={this.props.onUpdateStatus}
          onDeleteTodo={this.props.onDeleteTodo}
          receiveState={this.props.onReceiveState}
          editedTodoId={this.props.editedTodoId}
          onUpdateTodo={this.props.onUpdateTodo}/>
      )
    }, this)
    var completeTodos = todos.filter((todo)=> todo.props.todo.completed)
    var incompleteTodos = todos.filter((todo)=> !todo.props.todo.completed)
    return (
      <div className="todosContainer">
        <div className="todos incomplete col-md-6">
          <h2>Incomplete</h2>
          {incompleteTodos}
        </div>
        <div className="todos completed col-md-6">
          <h2>Completed</h2>
          {completeTodos}
        </div>
      </div>
    )
  }
}

export default Todos
