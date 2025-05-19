import React from 'react'
import './servise.css'

function Services({ logo, title, descrption }) {
  return (
    <div className="services-container">
      <div className="service-box">
        <div className="service-content">
          <div className="service-header">
            <div className='service-logo'>
              <img src={logo} alt={`${title} Logo`} />
            </div>
            <div className="service-title">
              <h2>{title}</h2>
            </div>
          </div>
          <div className="service-description">
            <p>{descrption}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
