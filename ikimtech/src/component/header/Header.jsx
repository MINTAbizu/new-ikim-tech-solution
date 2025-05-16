import React, { useState } from 'react'
import '../header/header.css'
import logo from '../../component/image/icon/logo.jpg'
function Header() {
      const [isSidebarActive, setSidebarActive] = useState(false);
      const toggleSidebar = () => {
    setSidebarActive(prevState => !prevState);
  };
  return (
    
       <div className='header'>
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarActive ? 'active' : ''}`} id="sidebar">
        <ul>
          <li><a href="./index.html">Home</a></li>
          <li><a href="./projext.html">Work</a></li>
          <li><a href="./serveses.html">Services</a></li>
          <li><a href="./about.html">About</a></li>
          <li><a href="#blog-section">Blog</a></li>
          <li><a href="./contact.html">Contact</a></li>
        </ul>
      </div>

      {/* Header */}
      <header className="site-navbar py-4 bg-white" role="banner">
        <div className="container">
          <div className="row align-items-center logoicon">
             <div className="col-11 col-xl-2 logoimage">
              <a href="index.html" className="text-black h2 mb-0">
                <img src={logo}alt="" />
               
              </a>
             </div>
             <div className="menuicon col-12 col-md-10 text-right">
              <div className="icon-menu" id="menu-toggle" onClick={toggleSidebar}>
                <span>☰</span>
              </div>
             </div>
          </div>
        </div>
      </header>
            <div className={`menu-overlay ${isSidebarActive ? 'active' : ''}`} onClick={toggleSidebar}></div>

    </div>
  )
}

export default Header
