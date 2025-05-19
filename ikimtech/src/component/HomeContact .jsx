import React from 'react'
import Home from './Home/Home'
import Project from './project/Project'
// import About from './about/About'
import Contact from './Contact/Contact'
import Serviserapw from './services/Serviserapw'
import ScrollAnimation from './ScrollAnimation'
import About from './about/about'

function HomeContact() {
  return (
    <div>
      <ScrollAnimation>
        <Home/>
      </ScrollAnimation>
      <ScrollAnimation>
        <Serviserapw/>
      </ScrollAnimation>
      <ScrollAnimation>
        <Project/>
      </ScrollAnimation>
      <ScrollAnimation>
        <About/>
      </ScrollAnimation>
      <ScrollAnimation>
        <Contact/>
      </ScrollAnimation>
    </div>
  )
}

export default HomeContact 
