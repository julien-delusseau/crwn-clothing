import React from 'react'
import './App.css'
import HomePage from './pages/homepage/HomePage'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shoppage/ShopPage'

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </Switch>
  )
}

export default App
