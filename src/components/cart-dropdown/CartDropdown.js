import React from 'react'
import './CartDropdown.scss'
import CustomButton from '../custom-button/CustomButton'
import { connect } from 'react-redux'
import CartItem from '../cart-item/CartItem'

const mapState = state => ({
  cartItems: state.cart.cartItems
})

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>go to checkout</CustomButton>
    </div>
  )
}

export default connect(mapState)(CartDropdown)
