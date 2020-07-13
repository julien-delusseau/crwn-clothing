import React from 'react'
import './HomePage.scss'

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='menu__container'>
        <div className='menu__item'>
          <div className='content'>
            <h1 className='title'>hat</h1>
            <span className='subtitle'>shop now</span>
          </div>
        </div>
        <div className='menu__item'>
          <div className='content'>
            <h1 className='title'>jackets</h1>
            <span className='subtitle'>shop now</span>
          </div>
        </div>
        <div className='menu__item'>
          <div className='content'>
            <h1 className='title'>sneakers</h1>
            <span className='subtitle'>shop now</span>
          </div>
        </div>
        <div className='menu__item'>
          <div className='content'>
            <h1 className='title'>womens</h1>
            <span className='subtitle'>shop now</span>
          </div>
        </div>
        <div className='menu__item'>
          <div className='content'>
            <h1 className='title'>mens</h1>
            <span className='subtitle'>shop now</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
