import React, { Component, Fragment } from 'react'
import './App.css'
import Likes from './components/Likes/Likes'
import { Route, Switch } from 'react-router-dom'
import Menu from './components/Menu/Menu'
import SavedMp3 from './components/SavedMp3/SavedMp3'
import Profile from './components/Profile/Profile'

class App extends Component {
  render () {
    return (
      <Fragment>
        <h1>Header</h1>
        <Route path='/' component={Menu}/>
        <Switch>
          <Route path='/likes' component={Likes}/>
          <Route path='/saved/:mp3Id' component={SavedMp3}/>
          <Route path='/saved' component={SavedMp3}/>
          <Route path='/profile' component={Profile}/>
        </Switch>
      </Fragment>
    )
  }
}

export default App
