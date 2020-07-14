import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/crown.svg'

const Header = () => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <img className='logo' src={logo} alt='Crwn Logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          shop
        </Link>
        <Link className='option' to='/shop'>
          contact
        </Link>
      </div>
    </div>
  )
}

export default Header
