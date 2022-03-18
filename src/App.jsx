import React from 'react';
import Header from './Components/header/header';
import Nav from './Components/nav/Nav';
import About from './Components/about/about';
import Experience from './Components/Experience/experience'
import Work from './Components/work/work'
import Portfolio from './Components/Portfolio/Portfolio'
import Testimonial from './Components/testimonial/testimonial'
import Contact from './Components/contact/contact'
import Footer from './Components/footer/footer'

const App = () => {
  return (
    <div>     
      <>
      <Header />
        <Nav />
        <About />
        <Experience />
        <Work />
        <Portfolio />
        <Contact />
        <Testimonial />
        <Footer />
      </> 
        
   
      
    </div>
  )
}

export default App