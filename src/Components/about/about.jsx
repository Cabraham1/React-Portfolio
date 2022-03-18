import React from 'react'
import "./about.css"
import Me from '../../assets/Abraham.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='About'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="abraham" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='About__card'>
              <FaAward className="about__icon_card"/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className='About__card'>
              <FiUsers className="about__icon_card"/>
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className='About__card'>
              <VscFolderLibrary className="about__icon_card"/>
              <h5>Projects</h5>
              <small>8+ Completed </small>

            </article>
          </div>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente cum minima provident perferendis, beatae inventore vitae aliquam doloribus eaque eum! Nobis cumque dolore quia ea soluta earum, dolor cupiditate!
            </p>
            <a href="#Contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default about