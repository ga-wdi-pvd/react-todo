import React from 'react'
import Todos from '../components/Todos'
import TodoForm from '../components/TodoForm'

var todos = [
  {body: "todo1", completed: false},
  {body: "todo2", completed: true},
  {body: "todo3", completed: false},
  {body: "todo4", completed: true},
  {body: "todo5", completed: false},
  {body: "todo6", completed: false},
  {body: "todo7", completed: true}
]

export default React.createClass({
  getInitialState(){
    return ({todos: todos})

  },
  handleUpdateStatus(evt){
    var todos = this.state.todos
    todos[evt.target.parentElement.dataset.todosIndex].completed = !todos[evt.target.parentElement.dataset.todosIndex].completed
    // sets the todo to the botoom of the list if switching
    var todo = todos.splice(evt.target.parentElement.dataset.todosIndex, 1)[0]
    todos.push(todo)
    this.setState({todos: todos})
  },
  handleDeleteTodo(evt){
    var todos = this.state.todos
    todos.splice(evt.target.parentElement.dataset.todosIndex, 1)
    this.setState({todos: todos})
  },
  shouldComponentUpdate(){
    console.log("hook being hit");
    return true
  },
  handleUpdateTodoCreateField(event) {
    this.setState({
      todo: event.target.value
    })
  },
  handleUpdateTodoEditField(event){
    this.setState({
      editedTodo: event.target.value
    })
  },
  handleCreateUser(event){
    event.preventDefault()
    console.log(this.state);
    var todo = {body: this.state.todo, completed: false}
    var todos = this.state.todos
    todos.push(todo)
    this.setState({todos: todos, todo: ""})
  },
  renderEditForm(evt){
    var todoId = evt.target.parentElement.dataset.todosIndex
    this.setState({
      editing: todoId,
      editedTodo: this.state.todos[todoId].body
    })

  },
  handleUpdateTodo(evt){
    evt.preventDefault()
    var todoId = evt.target.parentElement.dataset.todosIndex
    var todos = this.state.todos
    todos[todoId].body = this.state.editedTodo
    this.setState({
      todos: todos,
      editedTodo: null,
      editing: null
    })
    console.log("bob");
  },
  render(){
    return (
      <div className='todoComponent'>
        <Todos
          editedTodoId={this.state.editing}
          todos={this.state.todos}
          onRenderEditForm={this.renderEditForm}
          onUpdateTodoField={this.handleUpdateTodoEditField}
          onUpdateStatus={this.handleUpdateStatus}
          onDeleteTodo={this.handleDeleteTodo}
          onUpdateTodo={this.handleUpdateTodo}
          todo={this.state.editedTodo} />
        <TodoForm
          onCreateTodo={this.handleCreateUser}
          onUpdateTodoField={this.handleUpdateTodoCreateField}
          todo={this.state.todo} />
      </div>
    )
  }
})
