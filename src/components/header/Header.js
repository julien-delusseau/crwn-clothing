import React from 'react'
import './Header.scss'
import { Link, withRouter } from 'react-router-dom'
import logo from '../../assets/crown.svg'
import { auth } from '../../firebase/firebaseUtils'

const Header = ({ currentUser, history }) => {
  const handleSignOut = () => {
    auth.signOut()
    history.push('/')
  }

  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <img className='logo' src={logo} alt='Crwn Logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          shop
        </Link>
        <Link className='option' to='/shop'>
          contact
        </Link>
        {currentUser ? (
          <div className='option' onClick={handleSignOut}>
            sign out
          </div>
        ) : (
          <Link className='option' to='/signin'>
            sign in
          </Link>
        )}
      </div>
    </div>
  )
}

export default withRouter(Header)
