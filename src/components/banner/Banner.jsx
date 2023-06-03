import React from 'react'
import banner from '../../assets/images/banner.png';
import './banner.scss'
const Banner = () => {
  return (
    <div className='banner'>
        <img src={banner}/>
    </div>
  )
}

export default Banner