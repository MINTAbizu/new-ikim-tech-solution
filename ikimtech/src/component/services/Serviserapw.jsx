import React from 'react'
import Services from './Services'
import logo from '../image/icon/logo.jpg'
import '../services/servise.css'
import Project from '../project/Project'

function Serviserapw() {
  return (
    <div>
      <div className="serviserap">
        <Services logo={logo} title={' Web devlopment  '} descrption={'Build user-friendly websites that work seamlessly on all devices. Create intuitive designs that enhance <br/> user experience and engagement.'}/>
   <Services logo={logo} title={' Mobile-Application devlopment '} descrption={'Custom iOS and Android applications tailored to your business needs, along with efficient cross-platform solutions.'}/>
   <Services logo={logo} title={' Video Editing  '} descrption={'Transforms raw footage into polished, engaging content. We specialize in creating captivating videos for promotional materials, social media, events, and more.'}/>
      </div>
      <div className="serviserap">
        <Services logo={logo} title={' Graphics Design  '} descrption={'Creating logos, branding assets, and digital visuals for websites and social media by merging artistic flair with technical expertise.'}/>
   <Services logo={logo} title={'UI/UX Design  '} descrption={'Emphasizing user-centric design to create intuitive interfaces, along with prototyping and wireframing to visualize and test concepts.'}/>
   <Services logo={logo} title={' Web Hosting '} descrption={'Ensures that your website is accessible to users, allowing businesses and individuals to establish their online presence easily.'}/>
      </div>

       <div className="serviserap">
        <Services logo={logo} title={' Printing '} descrption={'Our printing design service specializes in creating high-quality graphics for print media like brochures, business cards, and posters.ing logos, branding assets, and digital visuals for websites and social media by merging artistic flair with technical expertise.'}/>
   <Services logo={logo} title={'Market Consultancy '} descrption={'Expert analysis and strategic insights to help businesses understand market trends, identify opportunities, and make data-driven decisions for growth and success. user-centric design to create intuitive interfaces, along with prototyping and wireframing to visualize and test concepts.'}/>
   <Services logo={logo} title={' 3D Designing '} descrption={'Offers innovative solutions for creating detailed three-dimensional models and visualizations. Whether for product design, architectural visualization, or animation.Ensures that your website is accessible to users, allowing businesses and individuals to establish their online presence easily.'}/>
      </div>

     {/* <div className="projectwrap">
       <Project image={logo} title={'web devlopment'}/>
       <Project image={logo} title={'web devlopment'}/>
        <Project image={logo} title={'web devlopment'}/>
     </div> */}
      <div className="projectwrap">
       <Project image={logo} title={'web devlopment'}/>
       <Project image={logo} title={'web devlopment'}/>
        <Project image={logo} title={'web devlopment'}/>
     </div>
    </div>
  )
}

export default Serviserapw
