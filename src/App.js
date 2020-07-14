import React, { Fragment, Component } from 'react'
import './App.css'
import HomePage from './pages/homepage/HomePage'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shoppage/ShopPage'
import Header from './components/header/Header'
import SignInAndUpPage from './pages/signin-signup/SignInAndUpPage'
import { auth } from './firebase/firebaseUtils'

class App extends Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null

  componentDidMount = () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)
    })
  }

  componentWillUnmount = () => {
    this.unsubscribeFromAuth()
  }

  render() {
    const { currentUser } = this.state
    return (
      <Fragment>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/signin' component={SignInAndUpPage} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
      </Fragment>
    )
  }
}

export default App
