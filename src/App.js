import React, { Component } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      likes: 0,
      name: 'Andrew'
    }
  }

  render () {
    const {likes, name} = this.state

    return (
      <div>
        <Header name={name} likes={likes}/>
        <Body addLike={this.newLike.bind(this)}/>
        <Footer copyright='MIT' date={new Date()}/>
      </div>
    )
  }

  newLike () {
    this.setState({
      likes: this.state.likes + 1
    })
  }
}

export default App
