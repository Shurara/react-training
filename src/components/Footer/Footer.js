import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { NEW_LIKE } from '../../actions/types'

class Footer extends Component {
  render () {
    const {copyright, date, dispatch} = this.props

    return (
      <Fragment>
        <h1>
          License: {copyright}
        </h1>
        <h2>
          Starting from: {date.toString()}
        </h2>
        <div>
          <input type="button"
                 onClick={() => dispatch({
                   type: NEW_LIKE
                 })}
                 value="More redux likes"/>
        </div>
      </Fragment>
    )
  }
}

export default connect()(Footer)
