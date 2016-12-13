import React, {Component} from 'react'
import Todos from '../components/Todos'
import CreateTodoForm from '../components/CreateTodoForm'
import TodoModel from '../models/Todo'

class TodosContainer extends Component{
  constructor(){
    super()
    this.state = {
      todos: []
    }
  }
  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    TodoModel.all().then(function(res){
      this.setState ({
        todos: res.data,
        todo: ''
      })
    }.bind(this))
  }
  handleUpdateStatus(todo){
    TodoModel.updateCompletion(todo.id).then(function(res){
      var todos = this.state.todos
      var updatedTodo = todos.find((eachTodo) => eachTodo.id === todo.id)
      updatedTodo.completed = !updatedTodo.completed
      this.setState({
        todos: todos
      })
    }.bind(this))
  }
  handleDeleteTodo(todo){
    TodoModel.deleteTodo(todo.id).then(function(res){
      this.setState({
        todos: res.data
      })
    }.bind(this))
  }
  createTodo(todo){
    var newTodo = {body: todo, completed: false}
    TodoModel.create(newTodo).then(function(res){
      this.setState({
        todos: res.data
      })
    }.bind(this))
  }
  handleUpdateTodo(todoBody){
    var todoId = this.state.editingTodoId
    TodoModel.update(todoId, todoBody).then(function(res){
      this.setState({
        todos: res.data,
        editingTodoId: null,
        editing: null
      })
    }.bind(this))
  }
  updateEditState(todo){
    this.setState({
      editingTodoId: todo.id
    })
  }
  render(){
    return (
      <div className='todoComponent'>
        <Todos
          editedTodoId={this.state.editingTodoId}
          todos={this.state.todos}
          onUpdateStatus={this.handleUpdateStatus.bind(this)}
          onDeleteTodo={this.handleDeleteTodo.bind(this)}
          onUpdateTodo={this.handleUpdateTodo.bind(this)}
          onReceiveState={this.updateEditState.bind(this)} />
        <CreateTodoForm
          onCreateTodo={this.createTodo.bind(this)}
          todo={this.state.todo} />
      </div>
    )
  }
}

export default TodosContainer
