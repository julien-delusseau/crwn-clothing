import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsToArray } from '../../redux/shop/shop-selectors'
import CollectionPreview from '../collection-preview/CollectionPreview'
import { CollectionOverviewContainer } from './CollectionOverview.styles'

const mapState = createStructuredSelector({
  collections: selectCollectionsToArray
})

const CollectionOverview = ({ collections }) => {
  return (
    <CollectionOverviewContainer>
      {collections.map(col => (
        <CollectionPreview key={col.id} {...col} />
      ))}
    </CollectionOverviewContainer>
  )
}

export default connect(mapState)(CollectionOverview)
