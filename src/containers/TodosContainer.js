import React from 'react'
import Todos from '../components/Todos'
import CreateTodoForm from '../components/CreateTodoForm'
import TodoModel from '../models/Todo'

export default React.createClass({
  getInitialState(){
    return ({todos: []})
  },
  fetchData(){
    TodoModel.all().then(function(res){
      console.log(res);
      this.setState({
        todos: res.data,
        todo: ''
      })
    }.bind(this))
  },
  componentDidMount(){
    this.fetchData()
  },
  handleUpdateStatus(evt){
    TodoModel.updateCompletion(evt.target.parentElement.dataset.todosIndex).then(function(res){
      this.fetchData()
    }.bind(this))
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
      self.fetchData()
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
