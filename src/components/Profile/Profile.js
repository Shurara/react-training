import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { CHANGE_USER_AGE, CHANGE_USER_NAME } from '../../actions/types'

class Profile extends Component {
  render () {
    const {currentUser, changeUserAge, changeUserName} = this.props

    return (
      <Fragment>
        <h1>
          Hello, {currentUser.name}
        </h1>
        <h2>
          Your age is: {currentUser.age}
        </h2>
        <div>
          <input type="text"
                 ref='username'
                 onChange={() => changeUserName(this.refs.username.value)}
                 placeholder="Change name"/>
        </div>
        <div>
          <input type="button"
                 onClick={() => changeUserAge(currentUser.age + 1)}
                 value="Increment age"/>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeUserAge: (newAge) => dispatch({
      type: CHANGE_USER_AGE,
      payload: newAge
    }),
    changeUserName: (newName) => dispatch({
      type: CHANGE_USER_NAME,
      payload: newName
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
