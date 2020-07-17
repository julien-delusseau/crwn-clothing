import React from 'react'
import { withRouter } from 'react-router-dom'
import {
  MenuItemStyle,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './MenuItem.styles'

const MenuItem = ({ title, imageUrl, size, linkUrl, history }) => {
  return (
    <MenuItemStyle size={size} onClick={() => history.push(linkUrl)}>
      <BackgroundImageContainer
        imageUrl={imageUrl}
        className='background-image'
      />
      <ContentContainer className='content'>
        <ContentTitle>{title}</ContentTitle>
        <ContentSubtitle>shop now</ContentSubtitle>
      </ContentContainer>
    </MenuItemStyle>
  )
}

export default withRouter(MenuItem)
