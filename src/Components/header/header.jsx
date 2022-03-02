import React from 'react'
import "./header.css"
import Cta from './Cta.jsx'

const header = () => {
  return (
  <header> 
    <div className='container header_container'>
      <h5>Hello i'm </h5>
      <h1>Chris</h1>
      <h5 className='text-light'>FullStack Developer</h5>
      <Cta/>
    </div>
  </header>
  )
}

export default header