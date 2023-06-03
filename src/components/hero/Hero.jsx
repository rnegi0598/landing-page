import React from 'react'
import HeroFooter from './HeroFooter'
import HeroNavbar from './HeroNavbar'
import HeroHeader from './HeroHeader'
import './hero.scss'
const Hero = () => {
  return (
    <div className='hero'>
    <HeroNavbar/>
    <HeroHeader/>
    <HeroFooter/>
    </div>
  )
}

export default Hero