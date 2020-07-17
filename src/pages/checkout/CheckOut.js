import React from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import {
  selectCartItems,
  selectCartItemsPrice
} from '../../redux/cart/cart-selectors'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import StripeButton from '../../components/stripe-button/StripeButton'
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  TotalPrice,
  Warning
} from './Checkout.styles'

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsPrice
})

const CheckOut = ({ cartItems, totalPrice }) => {
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
      <TotalPrice>
        <span>TOTAL: {totalPrice} €</span>
      </TotalPrice>
      <Warning>
        *Version d'essai, merci d'utiliser cette carte de crédit factice*
        <br />
        4242 4242 4242 4242 - Expire: 02/2022 - CVV: 123
      </Warning>
      <StripeButton price={totalPrice} />
    </CheckoutContainer>
  )
}

export default connect(mapState)(CheckOut)
