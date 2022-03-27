import React from 'react'
import "./Portfolio.css"
import IMG1 from '../../assets/port1.jpeg'
import IMG2 from '../../assets/port2.jpeg'
import IMG3 from '../../assets/port3.jpeg'
import IMG4 from '../../assets/port4.jpeg'
import IMG5 from '../../assets/port5.jpeg'
import IMG6 from '../../assets/port6.jpeg'
const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item_image">
            <img src={IMG1} alt="" />
          
          </div>
          <h3>Live Chart App </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Cabraham1?tab=repositories" className="btn" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://github.com/Cabraham1?tab=repositories" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
          
        
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item_image">
            <img src={IMG2} alt="" />
          
          </div>
          <h3>Dashbord for data design App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Cabraham1?tab=repositories" className="btn" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://github.com/Cabraham1?tab=repositories" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
          
        
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item_image">
            <img src={IMG3} alt="" />
          
          </div>
          <h3>Dashbord for Chat App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Cabraham1?tab=repositories" className="btn" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://github.com/Cabraham1?tab=repositories" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
          
        
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item_image">
            <img src={IMG4} alt="" />
          
          </div>
          <h3>Music web App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Cabraham1?tab=repositories" className="btn" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://github.com/Cabraham1?tab=repositories" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
          
        
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item_image">
            <img src={IMG5} alt="" />
          
          </div>
          <h3>Weather App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Cabraham1?tab=repositories" className="btn" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://github.com/Cabraham1?tab=repositories" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
          
        
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item_image">
            <img src={IMG6} alt="" />
          
          </div>
          <h3>Movei web App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Cabraham1?tab=repositories" className="btn" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://github.com/Cabraham1?tab=repositories" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
          
        
        </article>
      </div>
    </section>
  )
}

export default Portfolio