import React from 'react'
import logoImg from '../../assets/images/logo.svg'
import profileImg from '../../assets/images/profile.svg'
import './navbar.scss'
const HeroNavbar = () => {
  return (
    <nav className='hero-navbar'>
        <div className='app-logo'>
            <img src={logoImg}/>
        </div>
        <div className='nav-items'>
            <p className='active'>Home</p>
            <p>Call with Astrologer</p>
            <p>Live(Coming soon)</p>
        </div>
        <div className='profile-photo'>
            <img src={profileImg}/>
        </div>
    </nav>
  )
}

export default HeroNavbar