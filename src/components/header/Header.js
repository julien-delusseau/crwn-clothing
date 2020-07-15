import React from 'react'
import { Link } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { auth } from '../../firebase/firebaseUtils'
import { connect } from 'react-redux'
import { selectCurrentUser } from '../../redux/user/user-selectors'
import { selectHidden } from '../../redux/cart/cart-selectors'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'
import logo from '../../assets/crown.svg'
import './Header.scss'

const mapState = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectHidden
})

const Header = ({ currentUser, cartHidden }) => {
  const handleSignOut = () => {
    auth.signOut()
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
        <CartIcon />
      </div>
      {!cartHidden && <CartDropdown />}
    </div>
  )
}

export default connect(mapState)(Header)
