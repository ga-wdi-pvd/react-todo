import React, {Component} from 'react'
import Header from './Header'

class App extends Component{
  render(){
    return (
      <div className='main-container'>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default App
