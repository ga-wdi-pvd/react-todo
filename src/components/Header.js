import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render(){
    return (
      <header>
        <h1><Link to={'/todos'}>React Todos</Link></h1>
      </header>
    )
  }
})
