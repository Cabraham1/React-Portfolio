import React from 'react'
import "./header.css"
import Cta from './Cta.jsx'
import Me from '../../assets/Abraham.png'
import Social from './HeaderSocials'

const header = () => {
  return (
  <header> 
    <div className='container header_container'>
      <h5>Hello i'm </h5>
      <h1>Abraham Christopher</h1>
      <h3>Front-End Developer</h3>
      <Cta/>
      <Social/>

      <div className="me">
        <img src={Me} alt="Abraham" />
      </div>

      <a href="#Contact" className='Scroll__down'>
        Scroll down
      </a>
      
    </div>
  </header>
  )
}

export default header