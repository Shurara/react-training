import React, { Component, Fragment } from 'react'

class Header extends Component {
  render () {
    const {name, likes} = this.props

    return (
      <Fragment>
        <h1>
          Hello, {name}
        </h1>
        <h2>
          Likes: {likes}
        </h2>
      </Fragment>
    )
  }
}

export default Header
