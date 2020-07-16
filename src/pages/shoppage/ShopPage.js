import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectShopCollections } from '../../redux/shop/shop-selectors'
import CollectionPreview from '../../components/collection-preview/CollectionPreview'

const mapState = createStructuredSelector({
  collections: selectShopCollections
})

const ShopPage = ({ collections }) => {
  return (
    <div className='shop-page'>
      {collections.map(col => (
        <CollectionPreview key={col.id} {...col} />
      ))}
    </div>
  )
}

export default connect(mapState)(ShopPage)
