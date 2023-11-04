import React, { Component } from 'react'
import './stylesheetforpro.css'
class itempic extends Component{
 render(){ 
    const item = this.props.itempi;
    return (
    
        <figure className='fig'>
            <img className='img' src={item.imageLink}  alt={item.title}/>
            <figdescription className='pa'><p>{item.title}</p></figdescription>
            


        </figure>
        
      
    
  )
}}

export default itempic
