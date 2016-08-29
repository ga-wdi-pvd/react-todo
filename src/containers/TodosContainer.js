import React from 'react'
import Todos from '../components/Todos'
import CreateTodoForm from '../components/CreateTodoForm'
import TodoModel from '../models/Todo'

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
    return ({todos: []})
  },
  componentDidMount(){
    TodoModel.all().then(function(res){
      console.log(res);
      this.setState({
        todos: res.data
      })
    }.bind(this))
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
  createTodo(todo){
    var self = this
    var newTodo = {body: todo, completed: false}
    TodoModel.create(newTodo).then(function(res){
      TodoModel.all().then(function(res){
        console.log(res);
        self.setState({
          todos: res.data,
          todo: ''
        })
      })
    })
  },
  handleUpdateTodo(todo){
    var todos = this.state.todos
    var todoIndex = this.state.editingTodoId
    todos[todoIndex].body = todo
    this.setState({
      todos: todos,
      editingTodoId: null,
      editing: null
    })
    console.log("bob");
  },
  updateEditState(todoId){
    this.setState({
      editingTodoId: todoId
    })
    console.log(this.state);
  },
  render(){
    return (
      <div className='todoComponent'>
        <Todos
          editedTodoId={this.state.editingTodoId}
          todos={this.state.todos}
          onUpdateStatus={this.handleUpdateStatus}
          onDeleteTodo={this.handleDeleteTodo}
          onUpdateTodo={this.handleUpdateTodo}
          onReceiveState={this.updateEditState} />
        <CreateTodoForm
          onCreateTodo={this.createTodo}
          onUpdateTodoCreateField={this.handleUpdateTodoCreateField}
          todo={this.state.todo} />
      </div>
    )
  }
})
