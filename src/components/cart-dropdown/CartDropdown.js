import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { selectCartItems } from '../../redux/cart/cart-selectors'
import { createStructuredSelector } from 'reselect'
import CartItem from '../cart-item/CartItem'
import { toggleCartHidden } from '../../redux/cart/cart-actions'
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
  AddButton
} from './CartDropdown.styles'

const mapState = createStructuredSelector({
  cartItems: selectCartItems
})

const mapDispatch = dispatch => ({
  closeDropdown: () => dispatch(toggleCartHidden())
})

const CartDropdown = ({ cartItems, closeDropdown, history }) => {
  const handleClick = () => {
    history.push('/checkout')
    closeDropdown()
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <AddButton onClick={handleClick}>go to checkout</AddButton>
    </CartDropdownContainer>
  )
}

export default withRouter(connect(mapState, mapDispatch)(CartDropdown))
