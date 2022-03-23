import React from 'react'
import "./footer.css"
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">CHRIS</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Work">Services</a></li>
        <li><a href="#Testimonial">Testimonial</a></li>
        <li><a href="#Contact">Contact</a></li>
        <li><a href="#Footer">Footer</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/abrahamchristopher/" target="_blank" rel="noreferrer" ><BsLinkedin/></a>
      <a href="https://www.github.com" target="_blank" rel="noreferrer" ><BsGithub/></a>
      <a href="https://www.Twitter.com" target="_blank" rel="noreferrer" ><BsTwitter/></a>
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer" ><BsFacebook/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Chris Portfolio All RIght Reserve</small>
      </div>
    </footer>
  )
}

export default Footer