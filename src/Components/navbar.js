import React, { useState }  from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

const Navbar = (props) => {
  const [color,set]=useState(0);
  const change=()=>{
    if(window.scrollY >= 100){
      set(true)

    }
    else{
      set(false)

    }
  }
window.addEventListener('scroll',change);
  return (
    
         <div className={color?'header navbarbg':'header'}>
       <Link to="/" ><h1 >Portfolio</h1></Link>
      <ul className='navmenu'>
        <li>
      <Link to="/" >Home</Link></li>
      <li><Link to="/projects" >Projects</Link></li>
      <li><Link to="/Contact" >Contact</Link></li>
      <li><Link to="/About" >About</Link></li>

      </ul>
      
    </div>
  )
}

export default Navbar
