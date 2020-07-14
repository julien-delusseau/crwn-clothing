import React from 'react'
import './menuItem.scss'
import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, imageUrl, size, linkUrl, history }) => {
  return (
    <div className={`menu__item ${size}`} onClick={() => history.push(linkUrl)}>
      <div
        className='background-image'
        style={{
          background: `url(${imageUrl}) no-repeat center/cover`
        }}
      />
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>shop now</span>
      </div>
    </div>
  )
}

export default withRouter(MenuItem)
