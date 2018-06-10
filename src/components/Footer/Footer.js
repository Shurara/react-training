import React, { Component, Fragment } from 'react'

class Footer extends Component {
  render () {
    const {copyright, date} = this.props

    return (
      <Fragment>
        <h1>
          License: {copyright}
        </h1>
        <h2>
          Starting from: {date.toString()}
        </h2>
      </Fragment>
    )
  }
}

export default Footer
