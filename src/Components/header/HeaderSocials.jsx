import React from 'react'

import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='Header__Socials'>
      <a href="https://www.linkedin.com/in/abrahamchristopher/" target="_blank" rel="noreferrer" ><BsLinkedin/></a>
      <a href="https://www.github.com" target="_blank" rel="noreferrer" ><BsGithub/></a>
      <a href="https://www.Twitter.com" target="_blank" rel="noreferrer" ><BsTwitter/></a>
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer" ><BsFacebook/></a>

    </div>
  )
}

export default HeaderSocials