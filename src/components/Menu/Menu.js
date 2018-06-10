import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

class Menu extends Component {
  render () {
    return (
      <Fragment>
        <h1>Menu</h1>
        <ul>
          <li><Link to='/likes'>Likes</Link></li>
          <li><Link to='/saved'>Saved MP3</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
        </ul>
      </Fragment>
    )
  }
}

export default Menu
