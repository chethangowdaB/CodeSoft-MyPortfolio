import React from 'react'
import Navbar from './navbar';
import Footer from './footer';
import Hero from './hero';
import image from '../assets/projects.png'
import Projects from'./projectcard';

const Project = () => {
  return (
    <div>
         <Navbar />
         <Hero image={image}  p2={"PROJECTS"} p={"Some of my Recent works"} />
         <Projects />
          <Footer />

    </div>
  )
}

export default Project
