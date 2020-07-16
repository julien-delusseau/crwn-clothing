import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory-selectors'
import MenuItem from '../menu-item/MenuItem'
import './menuContainer.scss'

const mapState = createStructuredSelector({
  sections: selectDirectorySections
})

const MenuContainer = ({ sections }) => {
  return (
    <div className='menu__container'>
      {sections.map(item => (
        <MenuItem key={item.id} {...item} />
      ))}
    </div>
  )
}

export default connect(mapState)(MenuContainer)
