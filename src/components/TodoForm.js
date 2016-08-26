import React from 'react'

export default React.createClass({
  onChange(event) {
    this.setState({
      todo: event.target.value
    })
  },
  onSubmit(event){
    event.preventDefault()
    var todo = this.state.todo
    this.props.onTodoAction(todo)
    this.setState({
      todo: ""
    })
  },
  render(){
    return (
      <div className='todoForm'>
        <form onSubmit={this.onSubmit}>
          <input
            autoFocus={this.props.autoFocus}
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
