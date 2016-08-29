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
// update status with id
TodoModel.updateCompletion = function(todoId){
  // var request = axios.put(`http://localhost:4000/todos/${todoId}`, {body: "tom", completed: false})
  var request = axios.get(`http://localhost:4000/todos/${todoId}`).then(function(res){
    var newCompletedValue = !res.data.completed
    var putRequest = axios.put(`http://localhost:4000/todos/${todoId}`, {completed: newCompletedValue})
    return putRequest
  })
    // var id = res.data.id
    // var completed = !res.data.completed
    // var putRequest = axios.put(`http://localhost:4000/todos/${todoId}`, {completed: completed}).then(function(res){
    //
    // })

  return request
}


module.exports = TodoModel
