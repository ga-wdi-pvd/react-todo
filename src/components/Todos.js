import React from 'react'
import _ from 'underscore'
import TodoForm from './TodoForm'
import Todo from './Todo'

export default class Todos extends React.Component {
  constructor(props){
    super(props)
    this.state = props
  }
  render(){
    var todos = this.props.todos.map(function(todo, index){
      return(
        <Todo key={index}
          index={index}
          todo={todo}
          onUpdateStatus={this.props.onUpdateStatus}
          onDeleteTodo={this.props.onDeleteTodo}
          receiveState={this.props.onReceiveState}
          editedTodoId={this.props.editedTodoId}
          onUpdateTodo={this.props.onUpdateTodo}/>
      )
    }, this)
    var completeTodos = _.select(todos, function(todo){
      return todo.props.todo.completed
    })
    var incompleteTodos = _.select(todos, function(todo){
      return !todo.props.todo.completed
    })
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
