import React from 'react'
import {
  CartItemContainer,
  CartItemDetails,
  CartItemName
} from './CartItem.styles'

const CartItem = ({ item }) => {
  const { name, price, imageUrl, quantity } = item

  return (
    <CartItemContainer>
      <img src={imageUrl} alt='item' />
      <CartItemDetails>
        <CartItemName>{name}</CartItemName>
        <span>
          {quantity} x {price} €
        </span>
      </CartItemDetails>
    </CartItemContainer>
  )
}

export default CartItem
