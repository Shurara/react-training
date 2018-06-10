import React, { Component, Fragment } from 'react'

class SavedMp3 extends Component {
  render () {
    console.log(this)

    return (
      <Fragment>
        <h1>MP3</h1>
        {mp3Id && <h2>{this.props.match.params.mp3Id}</h2>}
      </Fragment>
    )
  }
}

export default SavedMp3
