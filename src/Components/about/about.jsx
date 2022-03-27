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
              <small>19+ Completed </small>

            </article>
          </div>

            <p>I’m Abraham Christopher, a multifaceted asset ready to meet your team. 
I have a strong JavaScript skill-set with a focus on React & Node. I have always stayed relevant while embracing new technologies.<br />
I can quickly learn new ideas and trends in technology. My background is in web applications. <br />
I have over 3 years of experience in designing, developing, coding and maintaining such systems. <br />
I prefer Frontend development but have the experience to develop in both environments where backend teams are limited. I’m fluent in modern frameworks like Bootstrap, Materialize, WordPress and WooCommerce. <br />
I'm a motivated, smart, eager to learn, creative problem solver that doesn't take “It can’t be done” for an answer.
So, let’s create something, I'm ready, are you?
            </p>
            <a href="#Contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default about