import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cart-actions'
import { selectCartItemsCount } from '../../redux/cart/cart-selectors'
import { CartIconContainer, ShoppingIcon, ItemCount } from './CartIcon.styles'

const mapDispatch = dispatch => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden())
  }
}

const mapState = createStructuredSelector({
  itemsCount: selectCartItemsCount
})

const CartIcon = ({ toggleCartHidden, itemsCount }) => {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCount>{itemsCount}</ItemCount>
    </CartIconContainer>
  )
}

export default connect(mapState, mapDispatch)(CartIcon)
