import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsToArray } from '../../redux/shop/shop-selectors'
import CollectionPreview from '../collection-preview/CollectionPreview'

const mapState = createStructuredSelector({
  collections: selectCollectionsToArray
})

const CollectionOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {collections.map(col => (
        <CollectionPreview key={col.id} {...col} />
      ))}
    </div>
  )
}

export default connect(mapState)(CollectionOverview)
