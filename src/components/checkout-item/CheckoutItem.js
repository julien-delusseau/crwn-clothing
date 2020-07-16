import React from 'react'
import './CheckoutItem.scss'
import { connect } from 'react-redux'
import { removeItem } from '../../redux/cart/cart-actions'

const mapDispatch = dispatch => ({
  removeItem: item => dispatch(removeItem(item))
})

const CheckoutItem = ({ item, removeItem }) => {
  const { imageUrl, name, price, quantity } = item
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price} €</span>
      <span className='remove-button' onClick={() => removeItem(item)}>
        &#10005;
      </span>
    </div>
  )
}

export default connect(null, mapDispatch)(CheckoutItem)
