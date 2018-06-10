import React, { Component, Fragment } from 'react'

class Body extends Component {
  render () {
    const {addLike} = this.props

    return (
      <Fragment>
      <h1>
        Body
      </h1>
        <input type='button' onClick={() => addLike()} value='Add like'/>
        <label>Click to add like</label>
      </Fragment>
    )
  }
}

export default Body
