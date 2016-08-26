import React from 'react'
import TodoForm from './TodoForm'

export default class CreateTodoForm extends React.Component {
  constructor(props){
    super(props)
    this.state = props
  }
  render(){
    return (
      <div className='todoForm'>
        <h2>Create Todo Here!</h2>
        <TodoForm
          onTodoAction={this.props.onCreateTodo}
          buttonName="Create Todo!" />
      </div>
    )
  }
}
