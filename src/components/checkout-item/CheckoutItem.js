import React from 'react'
import './CheckoutItem.scss'
import { connect } from 'react-redux'
import {
  removeItem,
  decreaseItem,
  addItem
} from '../../redux/cart/cart-actions'

const mapDispatch = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  decreaseItem: item => dispatch(decreaseItem(item)),
  addItem: item => dispatch(addItem(item))
})

const CheckoutItem = ({ item, removeItem, decreaseItem, addItem }) => {
  const { imageUrl, name, price, quantity } = item
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div
          className='arrow'
          onClick={() => {
            decreaseItem(item)
          }}
        >
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div
          className='arrow'
          onClick={() => {
            addItem(item)
          }}
        >
          &#10095;
        </div>
      </span>
      <span className='price'>{price} €</span>
      <span className='remove-button' onClick={() => removeItem(item)}>
        &#10005;
      </span>
    </div>
  )
}

export default connect(null, mapDispatch)(CheckoutItem)
