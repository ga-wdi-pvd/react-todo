import React from 'react'

export default React.createClass({
  onChange(event) {
    console.log("happening");
    console.log(this);
    this.setState({
      todo: event.target.value
    })
  },
  onSubmit(event){
    event.preventDefault()
    var todoIndex = event.target.parentElement.parentElement.dataset.todosIndex
    console.log(todoIndex);
    console.log(this.props);
    var todo = this.state.todo
    this.props.onTodoAction(todo, todoIndex)
    this.setState({
      todo: ""
    })
  },
  render(){
    return (
      <div className='todoForm'>
        <form onSubmit={this.onSubmit}>
          <input
            onChange={e => this.onChange(e)}
            placeholder='Write a todo here ...'
            type='text'
            value={(this.state && this.state.todo) || ''} />
          <button type='submit'>{this.props.buttonName}</button>
        </form>
      </div>
    )
  }
})
