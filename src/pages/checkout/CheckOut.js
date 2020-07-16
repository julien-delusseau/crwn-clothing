import React from 'react'
import { createStructuredSelector } from 'reselect'
import './CheckOut.scss'
import { connect } from 'react-redux'
import {
  selectCartItems,
  selectCartItemsPrice
} from '../../redux/cart/cart-selectors'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import StripeButton from '../../components/stripe-button/StripeButton'

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsPrice
})

const CheckOut = ({ cartItems, totalPrice }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
      <div className='total'>
        <span>TOTAL: {totalPrice} €</span>
      </div>
      <div className='test-warning'>
        *Version d'essai, merci d'utiliser cette carte de crédit factice*
        <br />
        4242 4242 4242 4242 - Expire: 02/2022 - CVV: 123
      </div>
      <StripeButton price={totalPrice} />
    </div>
  )
}

export default connect(mapState)(CheckOut)
