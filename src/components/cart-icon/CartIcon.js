import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './CartIcon.scss'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart-actions'

const mapDispatch = dispatch => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden())
  }
}

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}

export default connect(null, mapDispatch)(CartIcon)
