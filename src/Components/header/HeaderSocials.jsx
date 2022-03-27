import React from 'react'

import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {FaMedium} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='Header__Socials'>
      <a href="https://www.linkedin.com/in/abrahamchristopher/" target="_blank" rel="noreferrer" ><BsLinkedin/></a>
      <a href="https://github.com/Cabraham1/" target="_blank" rel="noreferrer" ><BsGithub/></a>
      <a href="https://twitter.com/_Cabraham" target="_blank" rel="noreferrer" ><BsTwitter/></a>
      <a href="https://web.facebook.com/christopher.abraham.735/" target="_blank" rel="noreferrer" ><BsFacebook/></a>
      <a href="https://medium.com/@christopherabraham8" target="_blank" rel="noreferrer" ><FaMedium/></a>

    </div>
  )
}

export default HeaderSocials