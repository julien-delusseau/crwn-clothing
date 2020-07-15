import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart-actions'
import { selectCartItemsCount } from '../../redux/cart/cart-selectors'
import './CartIcon.scss'

const mapDispatch = dispatch => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden())
  }
}

const mapState = state => ({
  itemsCount: selectCartItemsCount(state)
})

const CartIcon = ({ toggleCartHidden, itemsCount }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemsCount}</span>
    </div>
  )
}

export default connect(mapState, mapDispatch)(CartIcon)
