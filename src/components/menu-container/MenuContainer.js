import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory-selectors'
import MenuItem from '../menu-item/MenuItem'
import { MenuContainerStyle } from './MenuContainer.styles'

const mapState = createStructuredSelector({
  sections: selectDirectorySections
})

const MenuContainer = ({ sections }) => {
  return (
    <MenuContainerStyle>
      {sections.map(item => (
        <MenuItem key={item.id} {...item} />
      ))}
    </MenuContainerStyle>
  )
}

export default connect(mapState)(MenuContainer)
