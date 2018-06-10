import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
  render () {
    const {name, likes, reduxLikes} = this.props

    return (
      <Fragment>
        <h1>
          Hello, {name}
        </h1>
        <h2>
          Likes: {likes}
        </h2>
        <h2>
          Redux Likes: {reduxLikes}
        </h2>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reduxLikes: state.likes
  }
}

export default connect(mapStateToProps)(Header)
