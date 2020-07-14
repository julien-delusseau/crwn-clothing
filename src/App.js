import React, { Fragment, Component } from 'react'
import './App.css'
import HomePage from './pages/homepage/HomePage'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shoppage/ShopPage'
import Header from './components/header/Header'
import SignInAndUpPage from './pages/signin-signup/SignInAndUpPage'
import { auth, createUserProfileDocument } from './firebase/firebaseUtils'

class App extends Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null

  componentDidMount = () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      try {
        if (user) {
          const userRef = await createUserProfileDocument(user)
          userRef.onSnapshot(snapshot => {
            this.setState({
              currentUser: {
                id: snapshot.id,
                ...snapshot.data()
              }
            })
            console.log(this.state.currentUser)
          })
        } else {
          this.setState({ currentUser: user })
        }
      } catch (err) {
        console.error("Error, can't load the current user", err.message)
      }
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
