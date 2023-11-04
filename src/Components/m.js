import React, { Component } from 'react'
import Title from './Title';
import Items from './items';
import image from '../assets/photo/2t.png';
import { Route} from 'react-router-dom'
import Cart from './Cart';
const item=[
    {id:"0",title:"2-Track UPVC window",imageLink:"https://th.bing.com/th/id/OIP.xeA36H9s43-SxtBYhBU0xwHaE8?pid=ImgDet&rs=1"},
{id:"1",title:"3-Track UPVC Window",imageLink:"https://th.bing.com/th/id/OIP.WIngcF2YLo8GYBuznybY9AHaE_?pid=ImgDet&rs=1"},
{id:"0",title:"2-Track UPVC window",imageLink:image}
]


class Main extends Component{
render(){ return (
    <div>
        
        <Route  exact path='/' render={()=>(
            <>
             <Title title={'ECOMMERCE WEBSITE'} />
             
             </>
             
        )} />
       <Route path='/cart' render={()=>(<Cart />)} 
         />
      
    </div>
  )
}}

export default Main
