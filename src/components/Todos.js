import React from 'react'
import _ from 'underscore'

export default React.createClass({
  render(){
    var todos = this.props.todos.map(function(todo, index){
      if (this.props.editedTodoId && parseInt(this.props.editedTodoId, 10) === index){
        return (
          <div data-todos-index={index} data-completed={todo.completed} key={todo.body}>
            <form onSubmit={this.props.onUpdateTodo}>
              <input
                onChange={this.props.onUpdateTodoField}
                type='text'
                value={this.props.todo || ''} />
            </form>
          </div>
        )
      } else {
        return (
          <p data-todos-index={index} data-completed={todo.completed} key={todo.body}>
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
})
