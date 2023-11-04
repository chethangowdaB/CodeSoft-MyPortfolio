import React from 'react'
import './home.css'
import Navbar from './navbar';
import Hero from './herosectionforhome';
import image from '../assets/background.png'
import Footer from './footer';
import Projects from'./projectcard';
console.log("Hi")
const Title =(props)=>{
  return (
   <div>
    <Navbar />
    <Hero image={image} p={"HI, I'M A STUDENT"}  p2={"Web Devoloper"} btn={"Projects"} btn2={"Contact"}  />
    <Projects />
    <Footer />

    </div>
    
    )
}


export default Title
