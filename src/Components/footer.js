import React from 'react'
import './footer.css'
import {FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone} from 'react-icons/fa'
const footer = () => {
  return (
    <div className='footer'>
        <div className='foot-container'>
            <div className='left'>
                <div className='location'>
                    <p><FaHome size={20} style={{color:"white",marginright:"2rem",margintop:"1rem"}}/></p>
                <div className='add'>
                <p className='pa'>Begur (V/P) </p>
                <p className='pa'>Hoskote(T)Banglore(R/D)</p>
                </div>
                </div>
                <div className='phone'>
                <p> <FaPhone size={20} style={{color:"white",marginright:"2rem"}}/> +91 725-942-1988</p>
                </div>
                <div className='email'>
                <p><FaMailBulk size={20} style={{color:"white",marginright:"2rem"}}/>  chb21is@cmrit.ac.in</p>

                </div>
                
            </div>
            <div className='right'>
                
                <p className='pa'>About me</p>
                <p>
                  This is  Chethan Gowda.</p>
                  <p> Student at CMRIT pursing Bachelor of Engineering in Information Technology
                </p>
               
                <div className='phone'>
                <p> <FaFacebook size={20} style={{color:"white",marginright:"2rem"}}/> <FaGithub size={20} style={{color:"white",marginright:"2rem"}}/> <FaInstagram size={20} style={{color:"white",marginright:"2rem"}}/><FaLinkedin size={20} style={{color:"white",marginright:"2rem"}}/></p>
                </div>
               
           </div>
           </div>
      
    </div>
  )
}

export default footer
