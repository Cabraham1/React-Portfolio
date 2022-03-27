import React from 'react'
import "./work.css"
import {BiCheck} from 'react-icons/bi'

const Work = () => {
  return (
    <section id='Work'>
      <h5>Service I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="services">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User stories.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User flow charts, diagrams.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Wireframes.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Content strategy.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Information architecture.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Brand and design system development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design technology consulting.</p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service__head">
            <h3>Web Development.</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website Development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website Design & Re-design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>HTML5 Website Development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive Design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>eCommerce Development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Intranet Development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User Experience & Design.</p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Blog Writing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web Video Production.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Infographics.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Motion Graphic Creation.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Podcasts.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Screenshots.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Allegorical Images.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Cartoons and Comic Strips.</p>
            </li>
           
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Work