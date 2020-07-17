import React from 'react'
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './Header.styles'
import { createStructuredSelector } from 'reselect'
import { auth } from '../../firebase/firebaseUtils'
import { connect } from 'react-redux'
import { selectCurrentUser } from '../../redux/user/user-selectors'
import { selectHidden } from '../../redux/cart/cart-selectors'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'
import logo from '../../assets/crown.svg'

const mapState = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectHidden
})

const Header = ({ currentUser, cartHidden }) => {
  const handleSignOut = () => {
    auth.signOut()
  }

  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <img src={logo} alt='Crwn Logo' />
      </LogoContainer>
      <OptionsContainer className='options'>
        <OptionLink to='/shop'>shop</OptionLink>
        <OptionLink to='/shop'>contact</OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={handleSignOut}>
            sign out
          </OptionLink>
        ) : (
          <OptionLink to='/signin'>sign in</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!cartHidden && <CartDropdown />}
    </HeaderContainer>
  )
}

export default connect(mapState)(Header)
