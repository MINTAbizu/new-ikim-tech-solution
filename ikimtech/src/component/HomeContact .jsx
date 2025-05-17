import React from 'react'
import Home from './Home/Home'
import Services from './services/Services'
import Project from './project/Project'
import About from './about/About'
import Contact from './Contact/Contact'
import Serviserapw from './services/Serviserapw'

function HomeContact () {
  return (
    <div>
      <Home/>
      <Serviserapw/>
      <Project/>
      <About/>
      <Contact/>
    </div>
  )
}

export default HomeContact 
