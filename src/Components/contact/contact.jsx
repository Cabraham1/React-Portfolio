import React from 'react'
import "./contact.css"
import {MdOutlineMail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"

const contact = () => {
  return (
    <section id='Contact'>
      <h5>Contact Me</h5>
      <h2>Get in Touch</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Christopherabraham8@gmail.com</h5>
            <a href="mailto:christopherabraham8@gmail.com" target="_blank" rel="noreferrer">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Christopher Abraham</h5>
            <a href="https://m.me/christopher.abraham.735/" target="_blank" rel="noreferrer">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+2348100915641</h5>
            <a href="https://api.whatsapp.com/send?phone+2348100915641" target="_blank" rel="noreferrer">
              Send a Message
            </a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="Message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default contact