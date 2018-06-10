import React, { Component, Fragment } from 'react'

class SavedMp3 extends Component {
  render () {
    const {mp3Id} = this.props.match.params

    return (
      <Fragment>
        <h1>MP3</h1>
        {mp3Id && <h2>{mp3Id}</h2>}
      </Fragment>
    )
  }
}

export default SavedMp3
