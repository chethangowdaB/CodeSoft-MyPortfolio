import React from 'react'
import './hero.css' 
const hero = (props) => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='introimg' src={props.image} alt='introimg'></img>

        </div>
        <div className='content'>
        <h2>{props.p2}</h2>
            <p>
                {props.p}
            </p>
            
            

        </div>
      
    </div>
  )
}

export default hero


