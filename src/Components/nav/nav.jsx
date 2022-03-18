import React from 'react'
import "./nav.css"
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {MdOutlineWorkOutline} from 'react-icons/md'
import {RiContactsBook2Fill} from 'react-icons/ri'
import { useState } from 'react';

const Nav = () => {
  const [ActiveNav, setActiveNav] = useState('#')
  return (
    <div>
      <nav>
        <a href="#" onClick={()=> setActiveNav('#')} className={ActiveNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
        <a href="#About" onClick={()=> setActiveNav('#About')} className={ActiveNav === '#About' ? 'active' : ''}><AiOutlineUser/></a>
        <a href="#Experience" onClick={()=> setActiveNav('#Experience')}  className={ActiveNav === '#Experience' ? 'active' : ''}><BiBook/></a>
        <a href="#Work" onClick={()=> setActiveNav('#Work')}  className={ActiveNav === '#Work' ? 'active' : ''}><MdOutlineWorkOutline/></a>
        <a href="#Contact" onClick={()=> setActiveNav('#Contact')}  className={ActiveNav === '#Contact' ? 'active' : ''}><RiContactsBook2Fill/></a>
      </nav>
    </div>
  )
}

export default Nav