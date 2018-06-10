import React, { Component } from 'react'
import Header from '../Header/Header'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'

class Likes extends Component {
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
        <Body addLike={this.newLike}/>
        <Footer copyright='MIT' date={new Date()}/>
      </div>
    )
  }

  newLike = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }
}

export default Likes
