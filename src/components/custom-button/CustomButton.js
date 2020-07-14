import React from 'react'
import './CustomButton.scss'

const CustomButton = ({ children, isGoogle, ...otherProps }) => {
  return (
    <button
      className={`custom-button ${isGoogle ? 'google-sign-in' : ''}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default CustomButton
