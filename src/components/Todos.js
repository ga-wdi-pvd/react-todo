import React from 'react'
import _ from 'underscore'
import TodoForm from './TodoForm'

export default class Todos extends React.Component {
  constructor(props){
    super(props)
    this.state = props
  }
  render(){
    var todos = this.props.todos.map(function(todo, index){
      if (this.props.editedTodoId && parseInt(this.props.editedTodoId, 10) === index){
        return (
          <div data-todos-index={index} data-completed={todo.completed} key={index}>
            <TodoForm
              onTodoAction={this.props.onUpdateTodo}
              buttonName="Update Todo!"
               />
          </div>
        )
      } else {
        return (
          <p data-todos-index={index} data-completed={todo.completed} key={index}>
            <span onClick={this.props.onRenderEditForm}>{todo.body}</span>
            <span className='toggleButton' onClick={this.props.onUpdateStatus}>&#10004;</span>
            <span className='deleteButton' onClick={this.props.onDeleteTodo}>X</span>
          </p>
        )
      }

    }, this)
    var completeTodos = _.select(todos, function(todo){
      return todo.props["data-completed"]
    })
    var incompleteTodos = _.select(todos, function(todo){
      return !todo.props["data-completed"]
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
