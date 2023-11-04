import React, { Component } from 'react'
import Home from './Home';
import Projects from './Project';
import Contact from './Contact';
import About from './About';
import { Route} from 'react-router-dom'



class Main extends Component{
render(){ return (
    <div>
        
        <Route  exact path='/' render={()=>(
            <>
             <Home  />
             
             </>
             
        )} />
        <Route  exact path='/projects' render={()=>(
            <>
            <Projects/>
             </>
             
        )} />
        <Route  exact path='/Contact' render={()=>(
            <>
            <Contact/>
             </>
             
        )} />
         <Route  exact path='/About' render={()=>(
            <>
            <About/>
             </>
             
        )} />
      
    </div>
  )
}}

export default Main
