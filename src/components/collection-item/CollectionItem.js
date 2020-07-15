import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart-actions'
import CustomButton from '../custom-button/CustomButton'
import './CollectionItem.scss'

const mapDispatch = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{ background: `url(${imageUrl}) no-repeat center center/cover` }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price} €</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomButton>
    </div>
  )
}

export default connect(null, mapDispatch)(CollectionItem)
