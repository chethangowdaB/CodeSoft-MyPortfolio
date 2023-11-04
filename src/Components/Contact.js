import React from 'react'
import Navbar from './navbar';
import Footer from './footer';
import Hero from './hero';
import image from '../assets/contact.png'
const Contact = () => {
  return (
    <div>
       <Navbar />
       <Hero image={image} p2={"CONTACT AT"}  p={"chb21is@cmrit.ac.in"} />


          <Footer />
        
      
    </div>
  )
}

export default Contact
