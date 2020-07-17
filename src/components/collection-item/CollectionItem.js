import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart-actions'
import {
  CollectionItemContainer,
  BackgroundImage,
  CollectionFooter,
  NameContainer,
  PriceContainer,
  AddButton
} from './CollectionItem.styles'

const mapDispatch = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item
  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooter>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price} €</PriceContainer>
      </CollectionFooter>
      <AddButton inverted onClick={() => addItem(item)}>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  )
}

export default connect(null, mapDispatch)(CollectionItem)
