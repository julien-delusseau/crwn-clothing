import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { selectCartItems } from '../../redux/cart/cart-selectors'
import { createStructuredSelector } from 'reselect'
import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'
import './CartDropdown.scss'
import { toggleCartHidden } from '../../redux/cart/cart-actions'

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
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={handleClick}>go to checkout</CustomButton>
    </div>
  )
}

export default withRouter(connect(mapState, mapDispatch)(CartDropdown))
