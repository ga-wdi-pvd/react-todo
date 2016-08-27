import axios from 'axios'

function TodoModel(){}

TodoModel.all = function(){
  var request = axios.get("http://localhost:4000/todos")
  return request
}

module.exports = TodoModel
