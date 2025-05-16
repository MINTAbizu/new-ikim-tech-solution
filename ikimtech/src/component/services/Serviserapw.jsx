import React from 'react'
import Services from './Services'
import logo from '../image/icon/logo.jpg'
import '../services/servise.css'

function Serviserapw() {
  return (
    <div>
      <div className="serviserap">
        <Services logo={logo} title={' Web devlopment  '} descrption={'Build user-friendly websites that work seamlessly on all devices. Create intuitive designs that enhance <br/> user experience and engagement.'}/>
   <Services logo={logo} title={' Mobile-Application devlopment '} descrption={'text'}/>
   <Services logo={logo} title={' Video Editing  '} descrption={'text'}/>
      </div>
      <div className="serviserap">
        <Services logo={logo} title={' Graphics Design  '} descrption={'Build user-friendly websites that work seamlessly on all devices. Create intuitive designs that enhance <br/> user experience and engagement.'}/>
   <Services logo={logo} title={' Web devlopment  '} descrption={'text'}/>
   <Services logo={logo} title={' Web devlopment  '} descrption={'text'}/>
      </div>
    </div>
  )
}

export default Serviserapw
