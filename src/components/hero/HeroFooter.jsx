import React from 'react'
import img1 from '../../assets/images/nav-footer1.svg'
import img2 from '../../assets/images/nav-footer2.svg'
import img3 from '../../assets/images/nav-footer3.svg'
import img4 from '../../assets/images/nav-footer4.svg'
import img5 from '../../assets/images/nav-footer5.svg'
import './footer.scss'
const HeroFooter = () => {
  return (
    <div className='hero-footer'>
        <div className='footer-item'>
            <img src={img1}/>
            <p>24 X 7 Customer Support</p>
        </div>
        <div className='footer-item'>
            <img src={img2}/>
            <p>100% Refund if Unsatisfied</p>
        </div>
        <div className='footer-item'>
            <img src={img3}/>
            <p>Private & Confidential</p>
        </div>
        <div className='footer-item'>
            <img src={img4}/>
            <p>Verified Astrologer</p>
        </div>
        <div className='footer-item'>
            <img src={img5}/>
            <p>Secure Payment</p>
        </div>
    </div>
  )
}

export default HeroFooter