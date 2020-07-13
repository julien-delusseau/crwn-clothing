import React from 'react'
import './menuItem.scss'

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`menu__item ${size}`}>
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

export default MenuItem
