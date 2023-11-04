import React from 'react'
import Items from './items'
import port from '../assets/port.png'
import ecom from '../assets/ecom.png'

const projects=[
    {id:"0",title:"Portfolio website using react",imageLink:port},
{id:"0",title:"Ecommerce Website",imageLink:ecom}
]
const projectcard = () => {
  return (
    <div>
        <h1 className='pro'> MY PROJECTS</h1>
        <Items projects={projects}/>
      
    </div>
  )
}

export default projectcard
