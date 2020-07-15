import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { auth, createUserProfileDocument } from './firebase/firebaseUtils'
import { Route, Switch, Redirect } from 'react-router-dom'
import { setCurrentUser } from './redux/user/user-actions'
import { createStructuredSelector } from 'reselect'
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shoppage/ShopPage'
import Header from './components/header/Header'
import SignInAndUpPage from './pages/signin-signup/SignInAndUpPage'
import './App.css'
import { selectCurrentUser } from './redux/user/user-selectors'

const mapState = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatch = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

class App extends Component {
  unsubscribeFromAuth = null

  componentDidMount = () => {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      try {
        if (user) {
          const userRef = await createUserProfileDocument(user)
          userRef.onSnapshot(snapshot => {
            setCurrentUser({
              currentUser: {
                id: snapshot.id,
                ...snapshot.data()
              }
            })
          })
        } else {
          setCurrentUser(user)
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
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <SignInAndUpPage />
            }
          />
          <Route path='/shop' component={ShopPage} />
        </Switch>
      </Fragment>
    )
  }
}

export default connect(mapState, mapDispatch)(App)
