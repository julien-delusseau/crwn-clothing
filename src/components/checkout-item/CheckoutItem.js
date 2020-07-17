import React from 'react'
import { connect } from 'react-redux'
import {
  removeItem,
  decreaseItem,
  addItem
} from '../../redux/cart/cart-actions'
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './CheckoutItem.styles'

const mapDispatch = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  decreaseItem: item => dispatch(decreaseItem(item)),
  addItem: item => dispatch(addItem(item))
})

const CheckoutItem = ({ item, removeItem, decreaseItem, addItem }) => {
  const { imageUrl, name, price, quantity } = item
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div
          onClick={() => {
            decreaseItem(item)
          }}
        >
          &#10094;
        </div>
        <span>{quantity}</span>
        <div
          onClick={() => {
            addItem(item)
          }}
        >
          &#10095;
        </div>
      </QuantityContainer>
      <TextContainer>{price} €</TextContainer>
      <RemoveButtonContainer onClick={() => removeItem(item)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  )
}

export default connect(null, mapDispatch)(CheckoutItem)
