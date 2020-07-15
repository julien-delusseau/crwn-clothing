import React from 'react'
import './CustomButton.scss'

const CustomButton = ({ children, isGoogle, inverted, ...otherProps }) => {
  return (
    <button
      className={`custom-button ${isGoogle ? 'google-sign-in' : ''} ${
        inverted ? 'inverted' : ''
      }`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default CustomButton
