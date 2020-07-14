import React from 'react'
import './App.css'
import HomePage from './pages/homepage/HomePage'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
    </Switch>
  )
}

export default App
