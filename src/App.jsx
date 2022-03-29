import React, { useState, useEffect } from 'react';
import Header from './Components/header/header';
import Nav from './Components/nav/Nav';
import About from './Components/about/about';
import Experience from './Components/Experience/experience'
import Work from './Components/work/work'
import Portfolio from './Components/Portfolio/Portfolio'
import Testimonial from './Components/testimonial/testimonial'
import Contact from './Components/contact/contact'
import Footer from './Components/footer/footer'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },10000)
  
  }, [])
  


  return (
    <div>     
     
      {
        loading ?

        (
            <section className='app'>
            <ClimbingBoxLoader
            size={30}
            color={'#123abc'}
            loading={loading}
            />
          </section>

        ):
        
          (
      
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
          )
      }
     
      
    </div>
  )
}

export default App