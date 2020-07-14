import React, { Fragment } from 'react'
import './App.css'
import HomePage from './pages/homepage/HomePage'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shoppage/ShopPage'
import Header from './components/header/Header'
import SignInAndUpPage from './pages/signin-signup/SignInAndUpPage'

const App = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/signin' component={SignInAndUpPage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </Fragment>
  )
}

export default App
