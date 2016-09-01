import axios from 'axios'

function TodoModel(){}

TodoModel.all = function(){
  var request = axios.get("http://localhost:4000/todos")
  return request
}

TodoModel.create = function(todo){
  var request = axios.post("http://localhost:4000/todos", todo)
  return request
}

TodoModel.updateCompletion = function(todoId){
  var request = axios.get(`http://localhost:4000/todos/${todoId}`).then(function(res){
    var newCompletedValue = !res.data.completed
    var putRequest = axios.put(`http://localhost:4000/todos/${todoId}`, {completed: newCompletedValue})
    return putRequest
  })
  return request
}

TodoModel.update = function(todoId, todoBody){
  var request = axios.put(`http://localhost:4000/todos/${todoId}`, {body: todoBody})
  return request
}

TodoModel.deleteTodo = function(todoId){
  var request = axios.delete(`http://localhost:4000/todos/${todoId}`)
  return request
}


module.exports = TodoModel
